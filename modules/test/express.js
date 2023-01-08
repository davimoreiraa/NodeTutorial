const express = require("express")
const UserModel = require('../../src/models/user.model')

const app = express()

app.use(express.json())

app.get("/home", (req, res) => {
    res.contentType('application/html')
    res.status(200).send("<h1>Hello world</h1>")
})

app.get("/users", async (req,res) => {
    try {
        const users = await UserModel.find({})
        res.status(200).json(users)
    }

    catch (error) {
        res.status(500).send(error.message)
    }
})

app.get("/users/:id", async (req,res) => {
  try {
    const id = req.params.id
    const user = await UserModel.findById(id)
    return res.status(200).json(user)
  }
  catch(error) {
    return res.status(500).send(error.message)
  }
})

app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body)
        res.status(201).json(user)
    }

    catch (error) {
        res.status(500).send(error.message)
    }
    //code status 201 diz que o registro foi criado com sucesso
})

app.patch('/users', async (req, res) => {
    const id = req.params.id
    try {
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(user)
    }

    catch (error) {
        res.status(500).send(error.message)
    }
})

//patch => usado p alterar uma parte do registro
//put => usado p alterar o registro completamente

const port = 3000

app.listen(port, () => console.log(`Server express rodando na port ${port}`))