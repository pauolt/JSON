function calculadora(){
    let num1 = parseInt(prompt("Introdueix el primer número"));
    let num2 = parseInt(prompt("Introdueix el segon número"));

    function sumar() {
        alert("El resultat es: " + num1 + num2);
    }

    function restar() {
        alert("El resultat es: " + num1 - num2);
    }

    function multiplicar() {
        alert("El resultat es: " + num1 * num2);
    }

    function dividir() {
        alert("El resultat es: " + num1 / num2);
    }
    while (true){
        let opcio = prompt("Que operació vols fer?\n+\n-\n*\n/")
        switch (opcio) {
            case "+":
                sumar();
                break;
            case "-":
                restar();
                break;
            case "*":
                multiplicar();
                break;
            case "/":
                dividir();
                break;
            default:
                alert("Opció no valida")
                return;
        }
        num1 = parseInt(prompt("Introdueix el primer número"));
        num2 = parseInt(prompt("Introdueix el segon número"));
    }

}
