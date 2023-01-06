const express = require("express")
const UserModel = require('../../src/models/user.model')

const app = express()

app.get("/home", (req, res) => {
    res.contentType('application/html')
    res.status(200).send("<h1>Hello world</h1>")
})

app.get("/users", (req,res) => {
    const users = [
        {
            name: 'User1',
            password: '12345'
        },
        {
            name: 'User2',
            password: '098765'
        }
    ]

    res.status(200).json(users)
})

app.post('/users', async (req, res) => {

    try {
        const user = await UserModel.create(req.body)
        res.status(201).json(user)
    }

    catch(error) {
        res.status(500).send(error.message)
    }
    //code status 201 diz que o registro foi criado com sucesso
})

const port = 3000

app.listen(port, () => console.log(`Server express rodando na port ${port}`))