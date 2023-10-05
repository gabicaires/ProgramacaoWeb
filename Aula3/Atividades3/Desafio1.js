function adicionar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Divisão por zero não é permitida.";
    }
    return a / b;
}

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

function calcular(operacao, n1, n2) {
    switch (operacao) {
        case '+':
            return adicionar(n1, n2);
        case '-':
            return subtrair(n1, n2);
        case '*':
            return multiplicar(n1, n2);
        case '/':
            return dividir(n1, n2);
        case '!':
            return fatorial(n1);
        default:
            return "Operação não reconhecida.";
    }
}

console.log("2 + 3 =", calcular('+', 2, 3));
console.log("5 - 2 =", calcular('-', 5, 2));
console.log("4 * 6 =", calcular('*', 4, 6));
console.log("8 / 2 =", calcular('/', 8, 2));
console.log("Fatorial de 3 =", calcular('!', 3));
console.log("Fatorial de 5 =", calcular('!', 5));