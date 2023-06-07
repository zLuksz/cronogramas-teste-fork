import { AppDataSource } from "../databases/connections/data-source"
import Unidade from "../databases/models/unidade"


// 1) Estabelece conexão com a tabela alvo no banco de dados através de um cursor

const cursor = AppDataSource.getRepository(Unidade)

// 2) Recebe dados da Requisição HTTP lá do FRONTEND

type newUnidadeRequest = {
    id_unidade: string
    fk_curso: string
    descricao_unidade: string
    carga_horaria_unidade: number
    ordem: number
}

type updateUnidadeRequest = {
    id_unidade: string
    fk_curso: string
    descricao_unidade: string
    carga_horaria_unidade: number
    ordem: number
}

type findOneUnidadeRequest = {
    id_unidade: string
}

// 3) Funções CRUD

export class UnidadeService {
    async create({
        id_unidade,
        fk_curso,
        descricao_unidade,
        carga_horaria_unidade,
        ordem,
}: newUnidadeRequest): Promise<Unidade | Error> {
    if (await cursor.findOne({ where: { id_unidade } })) {
    return new Error("Unidade já cadastrado!")
    }

    const unidade = cursor.create({
        id_unidade,
        fk_curso,
        descricao_unidade,
        carga_horaria_unidade,
        ordem,
    })

    await cursor.save(unidade)

    return unidade
}