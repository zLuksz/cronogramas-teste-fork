import { Request, Response } from "express"
import { UnidadeService } from "../services/serviceUnidade"

const service = new UnidadeService()

export default class UnidadeController {
  async create(request: Request, response: Response) {
    const { descricao_unidade, carga_horaria_unidade, ordem, fk_curso } =
      request.body

    const result = await service.create({
      descricao_unidade,
      carga_horaria_unidade,
      ordem,
      fk_curso,
    })

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }
    return response.json(result)
  }

  async readAll(request: Request, response: Response) {
    const result = await service.readAll()
    if (result.length < 1) {
      return response.json("Nenhuma unidade cadastrada!")
    }
    return response.json(result)
  }

  async readOne(request: Request, response: Response) {
    const { id_unidade } = request.params
    const result = await service.readOne({ id_unidade })
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.json(result)
  }

  async readByFkCurso(request: Request, response: Response) {
    const { fk_curso } = request.params
    const result = await service.readByFkCurso({ fk_curso })
    if (result instanceof Error) {
      return response.status(418).json(result.message)
    }
    else {
      if (result.length < 1) {
        return response.status(418).json("Nenhuma unidade cadastrada!")
    }
    return response.json(result)
  }
}

  async update(request: Request, response: Response) {
    const { id_unidade } = request.params
    const { descricao_unidade, carga_horaria_unidade, ordem, fk_curso } =
      request.body
    const result = await service.update({
      id_unidade,
      descricao_unidade,
      carga_horaria_unidade,
      ordem,
      fk_curso,
    })
    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }
    return response.json(result)
  }

  async delete(request: Request, response: Response) {
    const { id_unidade } = request.params
    const result = await service.delete({ id_unidade })
    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }
    return response.status(300).json(result)
  }
}
