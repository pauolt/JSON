let nom = prompt("Nom?");
let edat = parseInt(prompt("Edat?"));

let num_pel = parseInt(prompt("Quantes pel·lúcles vols introduir?"));
let pelicules = [];
for (let i = 0; i < num_pel; i++) {
    pelicules.push(prompt("Pelicula" + i + "?"));
}
let alfabet = confirm("Vols ordenarles alfabèticament?");
if (alfabet) {
    pelicules.sort();
}
let usuari = {
    nom: nom,
    edat: edat,
    pelicules: pelicules
}

console.log(usuari);
document.write(usuari);