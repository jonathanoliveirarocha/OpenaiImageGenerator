const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()

//Ativando body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Definindo pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

app.use('/openai', require('./routes/openaiRoutes'))

app.listen(port, ()=>console.log(`Servidor rodando na porta ${port}!`))