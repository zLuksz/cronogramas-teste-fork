import { AppDataSource } from "../databases/connections/data-source";
import Unidade from "../databases/models/unidade"


const cursor = AppDataSource.getRepository(Unidade)

type newUnidadeRequest = {
    descricao_unidade: string
    carga_horaria_unidade: number
    ordem: number
    fk_curso: string
}

type updateUnidadeRequest = {
    id_unidade: string
    descricao_unidade: string
    carga_horaria_unidade: number
    ordem: number
    fk_curso: string
}

type findOneUnidadeRequest = {
    id_unidade: string
}

export class UnidadeService {
    async create({
        descricao_unidade,
        carga_horaria_unidade,
        ordem,
        fk_curso,
    }: newUnidadeRequest): Promise <Unidade | Error> {
        if (await cursor.findOne({ where : {descricao_unidade}})) {
            return new Error("Unidade Já Cadastrada!")
        }

        const unidade = cursor.create({
            descricao_unidade,
            carga_horaria_unidade,
            ordem,
            fk_curso,
        })

        await cursor.save(unidade)

        return unidade
    }

    async readAll() {
        const unidade = await cursor.find()
        return unidade
    }

    async readOne({ id_unidade }: findOneUnidadeRequest): Promise <Unidade | Error> {
        const unidade = await cursor.findOne({ where : {id_unidade}})
        if (!unidade) {
            return new Error("Unidade Não Encontrada!")
        }

        return unidade
    }

    async update({
        id_unidade,
        descricao_unidade,
        carga_horaria_unidade,
        ordem,
        fk_curso,
    }: updateUnidadeRequest): Promise <Unidade | Error> {
        const unidade = await cursor.findOne({ where : {id_unidade}})
        if (!unidade) {
            return new Error("Unidade Não Encontrada!")
        }

        unidade.descricao_unidade = descricao_unidade
            ? descricao_unidade
            : unidade.descricao_unidade
        unidade.carga_horaria_unidade = carga_horaria_unidade
            ? carga_horaria_unidade
            : unidade.carga_horaria_unidade
        unidade.ordem = ordem 
            ? ordem
            : unidade.ordem
        unidade.fk_curso = fk_curso
            ? fk_curso
            : unidade.fk_curso

        await cursor.save(unidade)

        return unidade
    }

    async delete({ id_unidade }: findOneUnidadeRequest): Promise <String | Error> {
        const unidade = await cursor.findOne({ where : {id_unidade}})
        if (!unidade) {
            return new Error("Unidade Não Encontrada!")
        }

        await cursor.delete(unidade.id_unidade)

        return "Curso Excluído Com Sucesso!"
    }
}