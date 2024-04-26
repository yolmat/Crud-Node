// Importações de bibliotecas
import express from "express"
import cors from 'cors'
import dotenv from "dotenv"

// Importações de funções 
import routes from "./routes/index.js"

// configura o .env
dotenv.config()

// Coloca o Express em uma variavel
const app = express()

// Libera o cors
app.use(cors())

// Express reconhça o formato JSON
app.use(express.json())

// Importa as rotas
routes(app)

// Define a porta do back
app.listen(3001)
console.log("Iniciou")