import { Router } from "express";
import CursoController from "../controllers/controllerCurso"

const rotas = Router()

rotas.get("/", (request, response) => {
    return response.json("Home Page")
})

rotas.post("/cursos", new CursoController().create)
rotas.post("/cursos", new CursoController().readAll)
rotas.post("/cursos/:id", new CursoController().readOne)
rotas.post("/cursoss/:id", new CursoController().update)
rotas.post("/cursos/id", new CursoController().delete)

export default rotas

import { Router } from "express";
import TurmaController from "../controllers/controllerTurma"

const rotas = Router()

rotas.get("/", (request, response) => {
    return response.json("Home Page")
})

rotas.post("/turmas", new TurmaController().create)
rotas.post("/turmas", new TurmaController().readAll)
rotas.post("/turmas/:id", new TurmaController().readOne)
rotas.post("/turmas/:id", new TurmaController().update)
rotas.post("/turmas/id", new TurmaController().delete)

export default rotas

import { Router } from "express";
import UnidadeController from "../controllers/controllerUnidade"

const rotas = Router()

rotas.get("/", (request, response) => {
    return response.json("Home Page")
})

rotas.post("/unidades", new UnidadeController().create)
rotas.post("/unidades", new UnidadeController().readAll)
rotas.post("/unidades/:id", new UnidadeController().readOne)
rotas.post("/unidades/:id", new UnidadeController().update)
rotas.post("/unidades/id", new UnidadeaController().delete)

export default rotas