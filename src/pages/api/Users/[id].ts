// Criei uma rota para buscar os usuários no banco de dados. Este arquivo está sendo executado no Next, o código
// não é acessíovel pelo cliente, somente os dados retornados 
// Request - requisição http
// Response - retorno da requisição http, JSON

import { NextApiRequest, NextApiResponse } from "next";

export default function Users(request: NextApiRequest, response: NextApiResponse) {

    console.log(request.query);

    const users = [
        { id: 1, name: 'Diego' },
        { id: 2, name: 'Dani' },
        { id: 3, name: 'Rafa' },
    ]

    return response.json(users)

}