var prixHt = Number(prompt("Entrez votre prix HT svp :"));
//var prixHt = Number(prixHtDefinition)
var ttc = prixHt * 0.196 + prixHt;
console.log("Le prix est de " + ttc +" €");