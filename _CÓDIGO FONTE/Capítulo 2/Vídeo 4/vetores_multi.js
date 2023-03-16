const pessoa_em_fileiras = [
  ["João", "Maria", "Luiz"],
  ["Amanda", "José", "Paulo"],
];

const fileira_0 = pessoa_em_fileiras[0];
const pessoa_2 = fileira_0[2];

console.log("1) Pessoa no assento 2 da fileira 0: " + pessoa_2);

const pessoa_1_fileira_1 = pessoa_em_fileiras[0][0];

console.log("2) Pessoa na assento 1 da fileira 1: " + pessoa_1_fileira_1);

pessoa_em_fileiras[1][1] = "Adriana";

console.log("3) Nova pessoa na assento 1 da fileira 1: " + pessoa_em_fileiras[1][1]);

