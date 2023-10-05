const diaDaSemana = 4;
let nomeDiaSemana = "";

switch(diaDaSemana){
    case 0:
        nomeDiaSemana = "Domingo";
        break;
    case 1:
        nomeDiaSemana = "Segunda";
        break;
    case 2:
        nomeDiaSemana = "Terca";
        break;
    case 3:
        nomeDiaSemana = "Quarta";
        break;
    case 4:
        nomeDiaSemana = "Quinta";
        break;
    case 5:
        nomeDiaSemana = "Sexta";
        break;
    case 6:
        nomeDiaSemana = "Sabado";
        break;
    default:
        nomeDiaSemana = "Nao encontrado!"
        break;
}

console.log(nomeDiaSemana)