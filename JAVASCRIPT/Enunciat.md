### **Exercici 1: Salutació bàsica**
Demana el nom de l’usuari utilitzant `prompt()` i mostra un missatge de benvinguda amb `alert()`.

1. Demana el nom de l’usuari amb `prompt()`.
2. Mostra un missatge com "Hola, [nom]!" amb `alert()`.

---

### **Exercici 2: Canvi de contingut dinàmic**
Canvia el text d’un element HTML utilitzant `innerHTML`.

1. Crea un fitxer HTML amb un `<div id="missatge">Text original</div>`.
2. Afegeix un botó que, en fer clic, canvie el text del `<div>` per "El text ha canviat!" utilitzant `innerHTML`.

---

### **Exercici 3: Missatge a la consola**
Mostra un missatge a la consola del navegador utilitzant `console.log()`.

1. Escriu un codi JavaScript que mostre "Açò és un missatge de prova" a la consola.
2. Obri la consola del navegador (F12) i comprova que el missatge apareix.

---

### **Exercici 4: Confirmació d’acció**
Utilitza `confirm()` per a demanar una acció a l’usuari i mostra la resposta a la consola.

1. Mostra una finestra de confirmació amb `confirm("Vols continuar?")`.
2. Si l’usuari accepta, mostra "L’usuari ha acceptat" a la consola.
3. Si l’usuari cancel·la, mostra "L’usuari ha cancel·lat" a la consola.

---

### **Exercici 5: Demanar informació a l’usuari**
Demana una dada a l’usuari amb `prompt()` i mostra-la per consola.

1. Pregunta a l’usuari "Quina és la teua ciutat preferida?" utilitzant `prompt()`.
2. Mostra la resposta a la consola amb `console.log()`.

---

### **Exercici 6: Classificació d’edats**
Utilitza `if`, `else if` i `else` per classificar una edat.

1. Demana a l’usuari la seua edat amb `prompt()`.
2. Mostra un missatge segons l’edat:
    - Menys de 18: "Eres menor d’edat".
    - Entre 18 i 65: "Eres adult".
    - 65 o més: "Eres jubilat".

---

### **Exercici 7: Mostra números del 0 al 4**
Utilitza un bucle `while` per a mostrar els nombres del 0 al 4 a la consola.

1. Declara una variable `let num = 0;`.
2. Fes que un `while` incremente `num` fins a 4.
3. Mostra cada número a la consola amb `console.log()`.

---

### **Exercici 8: Números parells**
Utilitza un bucle `for` per mostrar els números parells de l’1 al 10 a la consola.

1. Escriu un bucle `for` que recórrega els números de l’1 al 10.
2. Comprova si un número és parell (`num % 2 == 0`).
3. Mostra els nombres parells a la consola.

---

### **Exercici 9: Canvi de missatge amb `document.write()`**
Utilitza `document.write()` per mostrar un missatge nou a la pàgina.

1. Escriu un codi JavaScript que execute `document.write("Este és un nou missatge.");`.
2. Comprova que en executar el codi, el contingut de la pàgina es reemplaça pel missatge nou.

---

### **Exercici 10: Classificació de dies amb `switch`**
Utilitza `switch` per classificar un número com a dia de la setmana.

1. Declara una variable `let dia = prompt("Introdueix un número de l’1 al 3");`.
2. Utilitza `switch` per mostrar:
    - "Dilluns" si el número és 1.
    - "Dimarts" si el número és 2.
    - "Dimecres" si el número és 3.
    - "Número incorrecte" si el valor no està entre 1 i 3.



---
## Arrays

### **Exercici 11: Treballant amb elements d'un array**
Crea un array de colors i realitza diverses operacions sobre ell.

1. Declara un array `colors` amb els valors `["blau", "verd", "roig"]`.
2. Mostra el segon element de l'array a la consola.
3. Modifica el segon element i posa `"groc"`.
4. Mostra tot l’array després del canvi.


---

### **Exercici 12: Afegir i eliminar elements d’un array**
Utilitza `push()` i `pop()` per afegir i eliminar elements d'un array.

1. Crea un array `fruites` amb els valors `["poma", "pera", "plàtan"]`.
2. Afig `"taronja"` al final de l'array.
3. Mostra l'array després d’afegir l’element.
4. Elimina l'últim element amb `pop()`.
5. Mostra l'array final a la consola.


---

### **Exercici 13: Recórrer un array amb un bucle**
Utilitza un bucle `for` per mostrar els elements d’un array un per un.

1. Crea un array `animals` amb els valors `["gat", "gos", "ocell", "peix"]`.
2. Utilitza un bucle `for` per mostrar cada element a la consola.

---

### **Exercici 14: Utilitzar `splice()` per modificar un array**
Modifica el contingut d’un array eliminant i afegint elements.

1. Crea un array `llista` amb els valors `["primer", "segon", "tercer", "quart"]`.
2. Elimina `"segon"` i `"tercer"` amb `splice()`.
3. Afig `"nou"` en la segona posició (índex 1).
4. Mostra l'array final a la consola.


---

## Objectes

### **Exercici 15: Creació i accés a un objecte**
Declara un objecte i accedeix als seus valors.

1. Crea un objecte `persona` amb les propietats `nom`, `edat` i `ciutat`.
2. Mostra cada propietat per separat a la consola.

---

### **Exercici 16: Modificació i eliminació de propietats**
Canvia una propietat i elimina'n una altra en un objecte.

1. Crea un objecte `cotxe` amb `marca`, `model` i `any`.
2. Modifica l'any del cotxe.
3. Elimina la propietat `model`.
4. Mostra l’objecte resultant a la consola.

---

### **Exercici 17: Afegir una nova propietat**
Afig una propietat nova a un objecte existent.

1. Crea un objecte `llibre` amb `títol` i `autor`.
2. Afig una nova propietat `anyPublicacio`.
3. Mostra l’objecte complet a la consola.


---

### **Exercici 18: Iteració d’un objecte amb `for-in`**
Mostra totes les propietats i els seus valors utilitzant un bucle.

1. Crea un objecte `usuari` amb `nom`, `email` i `edat`.
2. Utilitza un bucle `for-in` per mostrar cada propietat i el seu valor.

---

### **Exercici 19: Objectes anidats**
Accedeix a valors dins d'un objecte que conté un altre objecte.

1. Crea un objecte `alumne` amb `nom` i `adreça`.
2. `adreça` ha de ser un objecte amb `carrer` i `ciutat`.
3. Mostra el nom de l’alumne i la seua ciutat a la consola.

---

### **Exercici 20: Convertir un objecte en un array de valors**
Utilitza `Object.values()` per convertir un objecte en un array.

1. Crea un objecte `pelicula` amb `titol`, `director` i `any`.
2. Converteix els valors de l’objecte en un array amb `Object.values()`.
3. Mostra l’array resultant a la consola.



---
## FUNCIONS


### **Exercici 21: Creació i ús d’una funció**
Declara una funció que reba un nom com a paràmetre i mostre un missatge de salutació a la consola.

- Defineix una funció `saludar` que accepte un paràmetre `nom`.
- La funció ha de mostrar `"Hola, [nom]!"` a la consola.
- Crida la funció amb un exemple.

---

### **Exercici 22: Funció amb return**
Crea una funció que retorne la suma de dos números.

- Defineix una funció `suma` que reba dos nombres com a paràmetres.
- La funció ha de retornar la suma d’ambdós nombres.
- Guarda el resultat en una variable i mostra'l a la consola.

---

### **Exercici 23: Expressió de funció**
Crea una funció com a expressió i assigna-la a una variable.

- Defineix una expressió de funció `multiplica` que accepte dos nombres i els multiplique.
- Crida la funció passant dos nombres i mostra el resultat a la consola.

---

### **Exercici 24: Funció anònima com a paràmetre**
Utilitza una funció anònima passada com a argument d'una altra funció.

- Defineix una funció `operacio` que accepte dos nombres i una funció com a paràmetres.
- Passa una funció anònima que reste els nombres.
- Mostra el resultat de la crida a la consola.

---

### **Exercici 25: Funció de flecha (Arrow Function)**
Defineix una funció de flecha per calcular el quadrat d'un nombre.

- Crea una funció `quadrat` utilitzant la sintaxi de flecha.
- La funció ha de rebre un nombre i retornar el seu quadrat.
- Mostra el resultat en la consola.

---

### **Exercici 26: Funció sense paràmetres**
Declara una funció de flecha sense paràmetres que mostre un missatge.

- Defineix una funció `salutacio` que mostre `"Hola, món!"` a la consola.
- Crida la funció per mostrar el missatge.

---

