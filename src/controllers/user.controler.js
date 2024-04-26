// importa os repositorys criados
import { createUser } from "../repositorys/user.repository.js";

// Cria uma função para enviar a requisição
export const create = async (req, res) => {
    try {
        // Usa o repository
        const user = await createUser(req.body)

        //caso certo, envia o status 200 mais o corpo do que foi enviado
        res.status(200).send(user)
    } catch (e) {
        // caso erro, envia o status 400 junto ao erro
        res.status(400).send(e)
    }
}