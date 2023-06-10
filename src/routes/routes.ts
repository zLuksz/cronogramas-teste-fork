import { Router } from "express"
import CursoController from "../controllers/controllerCurso"
import TurmaController from "../controllers/controllerTurma"
import UnidadeController from "../controllers/controllerUnidade"

const rotas = Router()

rotas.get("/", (request, response) => {
    return response.json("home page")
})

//Curso
rotas.post("/cursos", new CursoController().create)
rotas.get("/cursos", new CursoController().readAll)
rotas.get("/cursos/:id_curso", new CursoController().readOne)
rotas.put("/cursos/:id_curso", new CursoController().update)
rotas.delete("/cursos/:id_curso", new CursoController().delete)

//Turma
rotas.post("/turmas", new TurmaController().create)
rotas.get("/turmas", new TurmaController().readAll)
rotas.get("/turmas/:id_turma", new TurmaController().readOne)
rotas.put("/turmas/:id_turma", new TurmaController().update)
rotas.delete("/turmas/:id_turma", new TurmaController().delete)

//Unidade
rotas.post("/unidades", new UnidadeController().create)
rotas.get("/unidades", new UnidadeController().readAll)
rotas.get("/unidades/:id_unidade", new UnidadeController().readOne)
rotas.put("/unidades/:id_unidade", new UnidadeController().update)
rotas.delete("/unidades/:id_unidade", new UnidadeController().delete)

export default rotas
