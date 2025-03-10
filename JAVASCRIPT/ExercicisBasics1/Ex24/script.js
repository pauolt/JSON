function operacio (a, b, func){
    return func(a, b);
}

let resta = function (x, y) {
    return x - y;
}

let resultat = operacio(5, 3, resta);
console.log(resultat);