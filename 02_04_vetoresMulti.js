// Declaração do vetor pessoasEmFileirasAssentos
const pessoasEmFileirasAssentos = [
  ["João", "Maria", "Luiz"],
  ["Amanda", "José", "Paulo"],
];

// Imprir vetor
console.log("0) Pessoas em fileiras e assentos: " + pessoasEmFileirasAssentos);

// Pegar segunda(1) fileira do vetor pessoasEmFileirasAssentos - um vetor de assentos (que são strings)
const pessoasSegundaFileira = pessoasEmFileirasAssentos[0];
console.log("1) Pessoas na segunda fileira" + pessoasSegundaFileira);

// Da segunda fileira, pegar pessoa no terceiro(2) assento - um string dentro do vetor segundaFileira
const pessoaSegundaFileiraTerceiroAssento = pessoasSegundaFileira[2];

// Imprimir resultado
console.log("Pessoa na segunda fileira, terceiro assento" + pessoaSegundaFileiraTerceiroAssento);

// Pegar pessoa na primeira(0) fileira, primeiro(0) assento diretamente do vetor pessoasEmFileirasAssentos
const pessoaPrimeiraFileiraPrimeiroAssento = pessoasEmFileirasAssentos[0][0];

// Imprimir resultado
console.log("Pessoa na primeira fileira, primeiroAssento" + pessoaPrimeiraFileiraPrimeiroAssento);

// Trocar o nome da pessoa na primeira fileira(0), segundo assento(1)
pessoasEmFileirasAssentos[0][1] = "Adriana";

// Imprimir resultado
console.log("Pessoas em fileiras e assentos", pessoasEmFileirasAssentos);