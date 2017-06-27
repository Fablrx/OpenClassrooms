var nombre1 = 5;
var nombre2 = 3;

var temp = nombre1;
var nombre1 = nombre2;
var nombre2 = temp;

console.log("Doit afficher 3 => " + nombre1); // Doit afficher 3
console.log("Doit afficher 5 => " + nombre2); // Doit afficher 5