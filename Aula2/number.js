let num1 = 1;
console.log(num1)
let num2 = 1.1;
console.log(num2)
let num3 = Number();
console.log(num3)
let num4 = Number(1.0);
console.log(num4)
let num5 = Number(undefined);
console.log(num5)
let num6 = Number(null);
console.log(num6)
let num7 = Number("");
console.log(num7)
let num8 = Number(false);
console.log(num8)

//PROPRIEDADES
    console.log(Number.NaN);
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.EPSILON);
    console.log(Number.POSITIVE_INFINITY);
    console.log(Number.NEGATIVE_INFINITY);

//METODOS 
    const n1 = 200.5557;
    console.log(n1);
    console.log(n1.toString());

    //String formatada 
    console.log(n1.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'}));

    console.log(n1.toExponential(2));
    console.log(n1.toFixed(2));
    console.log(n1.toPrecision(5));
    console.log(n1.valueOf());

    console.log(Number.isNaN(n1));
    console.log(Number.isInteger(n1));
    console.log(Number.isFinite(n1));