const mongoose = require('mongoose')

const connectToDataBase = async () => {
    await mongoose.connect(
        "mongodb+srv://admin:<password>@nodetutorial.4vjzqem.mongodb.net/?retryWrites=true&w=majority", (error) => {
            if(error) {
                return console.log("Ocorreu um erro ao tentar se conectar com o banco de dados: ", error)
            }
            return console.log("A conexão com o banco de dados foi realizada com sucesso")
        }
    )
} 

module.exports = connectToDataBase