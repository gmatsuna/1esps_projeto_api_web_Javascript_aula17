const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const Port = 5001;

app.get("/teste", (req, res) => {
    res.send("Seja bem vindo ao teste")
})

app.get("/login", (req, res) => {
    res.send("Endpoint de login")
})

app.get("/produto", (req, res) => {
    res.send("Nossos produtos")
})

app.get("/perfil", (req, res) => {
    res.send("Perfil do usuário")
})

//ROTA PRODUTO - CREATE


app.listen(Port, () => {
    console.log(`Servidor Rodando na Porta, ${Port}`)
})