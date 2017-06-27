var a = 2;
a = a - 1;
a++;//2
console.log("Valeur est égale à 2 résultat = " + a);
var b = 8;
b += 2;// b=10
console.log("Valeur est égale à 10 résultat = " + b);
var c = a + b * b; // c = 102 multiplication avant adition
console.log("Valeur est égale à 102 résultat = " + c);
var d = a * b + b; // d = 30
console.log("Valeur est égale à 30 résultat = " + d);
var e = a * (b + b); // e = 40
console.log("Valeur est égale à 40 résultat = " + e);
var f = a * b / a; // f = 10
console.log("Valeur est égale à 10 résultat = " + f);
var g = b / a * a; // g = 10
console.log("Valeur est égale à 10 résultat = " + g);