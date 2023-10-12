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
    cpf: req.body.cpf,
    dataNascimento: req.body.dataNascimento,
    endereco: req.body.endereco,
    uf: req.body.uf,
    cep: req.body.cep,
    email: req.body.email,
    telefone: req.body.telefone,
    especialidade: req.body.especialidade,
    dataAgendamento: req.body.dataAgendamento,
    medicamentosAlergicos: req.body.medicamentosAlergicos
  };
// colocar dados do forms
  let erro_form = false;
  if (dados.nome == "") {
    erro_form = true;
  }
  if (dados.cpf == "") {
    erro_form = true;
  }
  if (dados.dataNascimento == "") {
    erro_form = true;
  }
  if (dados.endereco == "") {
    erro_form = true;
  }
  if (dados.uf == "") {
    erro_form = true;
  }
  if (dados.cep == "") {
    erro_form = true;
  }
  if (dados.email == "") {
    erro_form = true;
  }
  if (dados.telefone == "") {
    erro_form = true;
  }
  if (dados.especialidade == "selecionarEspecialidade") {
    erro_form = true;
  }
  if (dados.dataAgendamento == "") {
    erro_form = true;
  }
  if (dados.medicamentosAlergicos == "selecionarMedicamento") {
    erro_form = true;
  }

  // console.log(dados);
  res.render("dados", {dados, erro_form});
});


app.listen(port, () => {
  console.log(`Programa rodando na porta ${port}`)
})