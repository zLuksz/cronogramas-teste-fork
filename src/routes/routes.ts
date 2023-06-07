import { Router } from "express"
import CursoController from "../controllers/controllerCurso"

const rotas = Router()

// Rota Principal
rotas.get("/", (request, response) => {
  return response.json("Home Page")
})

rotas.post("/cursos", new CursoController().create)
rotas.get("/cursos", new CursoController().readAll)
rotas.get("/cursos/:id", new CursoController().readOne)
rotas.put("/cursos/:id", new CursoController().update)
rotas.delete("/cursos/:id", new CursoController().delete)

export default rotas
