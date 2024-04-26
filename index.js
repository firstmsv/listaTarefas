//BIBLIOTECAS/MODULOS UTILIZADOS
const database = require("./db/db");
const routes = require("./routes/routes");
const express = require("express");
const app = express();
//const usuarioController = require("./controller/usuarioController");
//CODIFICAÇÃO UTILIZAÇÃO DO JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//MODELS
const Usuario = require("./model/usuarioModel");
const Tarefa = require("./model/tarefaModel");
//SINCRONISMO COM O BANCO DE DADOS
try {
  database.sync().then(() => {});
} catch (erro) {
  console.log("Houve uma falha ao sincronizar com o banco de dados. ", erro);
}
//ROTA PRINCIPAL
app.use("/", routes);
app.listen(3000);
