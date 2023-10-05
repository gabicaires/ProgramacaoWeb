const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();
const port = 8080;

app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index", {});
});

app.post("/dados", function (req, res) {
  const dados = {
    nome: req.body.nome,
    endereco: req.body.endereco,
    telefone: req.body.telefone,
    dataAgendamento: req.body.dataAgendamento
  };
  res.render("dados", dados);
});


app.listen(port, () => {
  console.log(`Programa rodando na porta ${port}`)
})
