const hora = 12;
let cumprimento = "";

if(hora < 12){
    cumprimento = "Bom dia";
}
else if(hora < 18){
    cumprimento = "Boa tarde";
}
else{
    cumprimento = "Boa noite";
}

console.log(cumprimento);