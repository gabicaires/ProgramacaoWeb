function palavrasDistintas(string) {
    
    const palavras = string.split(/\s+/);

    const palavrasDistintasSet = new Set(palavras);

    const palavrasDistintasArray = [...palavrasDistintasSet];

    return palavrasDistintasArray;
}

const texto = "Esta é uma frase com algumas palavras repetidas.";
const palavrasUnicas = palavrasDistintas(texto);
console.log(palavrasUnicas);