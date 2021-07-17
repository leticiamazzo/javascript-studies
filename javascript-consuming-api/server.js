const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')
// muito parecido com o fetch do front. é como se o axios tivesse um fetch dentro dele

app.use(cors())

app.get('/', async(req, res) => {
    try {
        // se usou await aqui precisa do async lá em cima
        // response é a resposta do axios, mas tiramos { data } de dentro do response
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')
        // console.log(data);

        return res.json(data)

    } catch (error) {
        console.log(error);
    }
})
// servindo a API

app.listen('4567')
// porta que var acessar API