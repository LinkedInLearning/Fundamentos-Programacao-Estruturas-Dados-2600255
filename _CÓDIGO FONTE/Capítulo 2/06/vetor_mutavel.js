var frutas = [];
console.log(frutas);

frutas.push("Maçã");
console.log(frutas);

outras_frutas = ["Banana", "Limão"]
frutas.push(...outras_frutas)
console.log(frutas);

mais_frutas = ["Pera", "Manga"]
todas_frutas =  frutas.concat(mais_frutas)
console.log(todas_frutas)
