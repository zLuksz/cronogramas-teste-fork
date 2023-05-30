// Importa a constante AppDataSource do arquivo data-source.ts
import { AppDataSource } from "./databases/connections/data-source"

// Invoca o método initialize() para estabelecer a conexão do App Backend com o Banco de Dados
AppDataSource.initialize()

// "Importa" e instancia um servidor HTTP express na constante app
const express = require("express")
const app = express()

// Invoca o método use() para determinar que a aplicação transfira dados no formato JSON
app.use(express.json())

// Cria a rota principal da aplicação, que mostra para o usuário a mensagem "Aoba!" em formato JSON
app.get("/", (req, res) => {
  return res.json("I am bão")
})

// Invoca o método listen() que recebe 2 parâmetros: a porta onde o servidor irá ouvir as requisições e a mensagem que deve aparecer no console quando o servidor for ao ar.
app.listen(3333, () => console.log("Server tá on na porta 3333."))
