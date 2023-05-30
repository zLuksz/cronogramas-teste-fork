import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
  type: "postgres", // só funciona com driver instalado
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "cronogramas",
  synchronize: true,
  logging: true,
  // entities: [Curso, Unidade, Turma, Aula]
})
