const { Person } = require('./person')
const person = new Person("Davi") 
console.log(person.sayMyName())
const connectToDataBase = require('./src/database/connect')

const dotenv = require('dotenv')
dotenv.config()

connectToDataBase()

require('./modules/express')
//Para executar um arquivo com o node basta digitar no terminal: node (nome do arquivo)
//caso queira instalar um modulo node que será usado apenas durante o desenvolvimento, ele deverá ser instalado com o sufixo --save-dev,
//ele ficará numa divisão diferente dentro do package.json