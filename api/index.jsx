const express = require("express");
const cors = require("cors");
const {v4: uuidv4} = require("uuid");

const app = express();
const Port = 5001;

app.use(cors());
app.use(express.json())

let produtos = [];

// app.get("/teste", (req, res) => {
//     res.send("Seja bem vindo ao teste")
// })

// app.get("/login", (req, res) => {
//     res.send("Endpoint de login")
// })

// app.get("/produto", (req, res) => {
//     res.send("Nossos produtos")
// })

// app.get("/perfil", (req, res) => {
//     res.send("Perfil do usuário")
// })

//ROTA PRODUTO - CREATE
app.post("/produtos", (req, res) => {
    const {nome, descricao} = req.body;
    if (!nome || !descricao) {
        return res.status(400).json({error: "Campos obrigatórios"});
    }
    const novoItem = {id:uuidv4(), nome, descricao};
    produtos.push(novoItem);
    res.status(201).json(novoItem)
})


app.listen(Port, () => {
    console.log(`Servidor Rodando na Porta, ${Port}`)
})