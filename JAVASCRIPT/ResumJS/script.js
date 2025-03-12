let nom = prompt("Nom?");
let edat = parseInt(prompt("Edat?"));

let num_pel = parseInt(prompt("Quantes pel·lícules vols introduir?"));
let pelicules = [];
for (let i = 0; i < num_pel; i++) {
    pelicules.push(prompt("Pelicula " + (i+1) + "?"));
}
if (confirm("Vols ordenarles alfabèticament?")) {
    pelicules.sort();
}
let usuari = {
    nom: nom,
    edat: edat,
    pelicules: pelicules
}

function mostrarUsuari () {
    console.log("Usuari:", usuari);
    document.getElementById("output").innerHTML =`
        <p><strong>Nom:</strong> ${usuari.nom}</p>
        <p><strong>Edat:</strong> ${usuari.edat}</p>
        <p><strong>Pelicules:</strong> ${usuari.pelicules.join(", ")}</p>
    `;
}


function afegirPelicula () {
    let novaPeli = prompt("Introdueix una nova pelicula");
    if (novaPeli) {
        usuari.pelicules.push(novaPeli);
        alert("Pelicula afegida correctament")
    }
    mostrarUsuari();
}

function modificarEdat (){
    let novaEdat = parseInt(prompt("Introdueix la nova edat:"));
    if (novaEdat > 0) {
        usuari.edat = novaEdat;
        alert("Edat modificada correctament");
    } else {
        alert("Edat no valida")
    }
    mostrarUsuari();
}

function eliminarPelicula () {
    let peliaEliminar = prompt("Quina pelicula vols eliminar?")
    let index = usuari.pelicules.indexOf(peliaEliminar);
    if (index !== -1) {
        usuari.pelicules.splice(index, 1);
        alert("Pelicula eliminada correctament");
    } else {
        alert("Aquesta pel·licula no es troba a la llista")
    }
    mostrarUsuari();
}

function modificarUsuari () {
    while(true){
        let opcio = prompt("Què vols fer?\n1.Modificar edat\n2.Afegir pel·licula\n3.Eliminar pel·licula\n4.Exit");
        switch (opcio) {
            case "1":
                modificarEdat();
                break;
            case "2":
                afegirPelicula();
                break;
            case "3":
                eliminarPelicula();
                break;
            case "4":
                alert("Adeu");
                mostrarUsuari();
                return;
            default:
                alert("Opcio no valida")
        }
    }
}
modificarUsuari();


