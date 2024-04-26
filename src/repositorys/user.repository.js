// importa o prisma do services
import { prisma } from "../services/prisma.js";

// Cria o createUser onde vai criar uma nova linha dentro da tabela seleciona
export const createUser = async (data) => {
    // Atraves do prisma seleciona a tabela onde sera criada a nova linha
    const user = await prisma.user.create({
        // tras os dados que recebeu da função para criar a nova linha
        data // ja como recebemos as informações exatas do data podemos colocalo assim

        // Pode ser feito da seguinte forma tambem
        /*
        data: {
            name: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone
        } */
    })
    // retorna o usuario criado
    return user
}