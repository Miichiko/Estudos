/*let js = "incrivel";
if (js === "incrivel");
console.log(40 + 8 + 23 - 10);
console.log("miikan");
console.log(27);
let firstName = "miikan";
let secondName = "Michiko";

  //lembre-se de simplificar o nome das variaveis como...*/
const task1 = "limpar a casa";
const task2 = "ir ao mercado";
// As variáveis podem ter apenas: números,letras, _ e $.*/
//console.log(firstName); // o console.log define uma várivel "firstName"
//console.log(secondName); // para o meu valor "miikan".

//let 3anos = 3; é inválido, "SyntaxError".
//let miikan&michiko = "MM" é inválido, "SyntaxError".

//console.log("segunda = " + task1 + " e " + task2);

//console.log(new Date().toLocaleDateString()); Método e Objeto utiliza para definir data e hora local
/*  Data Type - 7 dados primitivos
1. Number - para decimais e inteiros. let age = 22;*
2. String - para texto. ex: let firstName = "Mi";*
3. Boolean - true or false nas decisões. let fullage = true;*
4. Underfined - o valor possui variavel, mas não definido. let children;
5. Null - sem valor.        
6. Symbol (ES2015) - valor único q não pode ser alterado.
7. Bigint (ES 2020) - número maior do q o tipo do número pode conter.
*/

/*let Javaincrivel = true;
console.log(Javaincrivel);

//console.log(typeof true);
console.log(typeof Javaincrivel);
console.log(typeof 22);
console.log(typeof "Mi");

let ano;
console.log(ano);
console.log(typeof ano);

console.log(typeof null); // aparece object é um bug do Java.*/
// Operador - combinar valores, transfomar e operar multipos trabalhos com valores.

// Operadores Matemáticos

const now = 2037;
const ageMi = now - 2000;
const ageDre = now - 2002;
console.log(ageMi, ageDre);

console.log(ageMi * 2, ageMi / 10, 2 ** 3);
// 2 ** 3 _ 2 elevado ao triplo = 8

// Operadores de Atribuição

let x = 10 + 5; //15
x += 10; //x = x + 10 = 25
x *= 4; //x = x * 4 = 100
x++; //x = x + 1
x--; //x = x - 1
x--;
console.log(x);

// Operadores de Comparação
console.log(ageMi > ageDre); // <ou>, <=, >=
console.log(ageMi >= 37);

//const isFullAge = ageMi >= 18; (boolean)

console.log(now - 2000 > now - 2002);

// CHALLERGE 1

let MarkKg = 78;
let MarkKg2 = 95;
let johnKg = 92;
let johnKg2 = 85;

let MarkA = 1.69;
let MarkA2 = 1.88;
let johnA = 1.95;
let johnA2 = 1.76;

console.log(MarkKg / MarkA ** 2);
console.log(MarkKg2 / MarkA2 ** 2);
console.log(johnKg / johnA ** 2);
console.log(johnKg2 / johnA2 ** 2);

let MBMI = 27.3;
let MBMI2 = 26.87;
let JBMI = 24.19;
let JBMI2 = 27.44;

const markHigherBMI = MBMI >= JBMI;
console.log(markHigherBMI);

//console.log((2 + 3) * 2);

/////////////////////////////////////////////

const MyName = "Michiko";
const birthyear = 2000;
const year = 2023;

const michiko =
  "I'm " + MyName + ", a " + (year - birthyear) + "years old" + "!";
console.log(michiko);

const MiMew = `I'm ${MyName}`;
console.log(MiMew);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String 
multiple 
lines`);

//////////////////////////////////////////////

const age = 16;

if (age >= 18) {
  console.log(`Mi can start too drinking`);
} else {
  const yearsleft = 18 - age;
  console.log(`Mi is too young. Wait another ${yearsleft} years :)`);
}

//  Challenge 2

if (MBMI >= JBMI) {
  console.log(` Mark's BMI (${MBMI}) is higher than John's (${JBMI})!`);
} else {
  const no = MBMI >= JBMI2;
  console.log(`John's BMI (${JBMI2}) is higher than Mark's (${MBMI})`);
}

///////////////////////////////////////////////

// conversão de tipo : acontece quando o operador esta lidando com dois valores diferentes Ex: String e Number
const inputYear = "2000";
console.log(Number(inputYear), inputYear); // Number transfomou a strig em um númuro
console.log(Number(inputYear) + 18); // para ent ser somado.

console.log(Number("Michiko")); // o Number não  indentificou como um número.
console.log(typeof NaN);
console.log(String(23), 23); // branco string roxo numero

// coerção de tipo
console.log(`I'am ` + 23 + ` years old`); // o + converte numeros em String
console.log(`I'am ` + String(23) + ` years old`);
console.log(`23` - `10` - 3);
console.log(`23` + `10` - 3); // o + transformou td em uma string dando 2307 sendo q o 10 - 3 foi executado
console.log(`23` * 2);
console.log(`23` * `2`);

//////////////////////////////////////////////////

// Os 5 valores falsos: 0, '', Null,NaN e undefined.

console.log(Boolean(0));
console.log(Boolean("mi"));
console.log(Boolean({}));
console.log(Boolean(undefined));
console.log(Boolean(""));

//const idade = 18;
//if (idade === 18) console.log(" Voçe já é alduta :D ");
// '18' (Sring) === 18 nos da o false
// '18' == 18 nos verdadeiro pq o == existe coenverção de tipo o === não existe.
// o === é para o valor exatamente igual a ele.
// o msm para == porem msm se o numero for uma string ele iria se igualar.

/*const favourite = prompt("Qual é seu número favorito??? :)");
console.log(favourite);
console.log(typeof favourite);
if (favourite == 27) {
  console.log("Legal meu número da sorte:D");
} else {
  console.log("Não é meu número.");
}
if (favourite !== 27) console.log("Por que não 27");*/

//////////////////////////////////////////////////

//     Operadores Lógicos

const licença = true; // A
const boavisão = true; // b

console.log(licença && boavisão);
console.log(licença || boavisão);
console.log(!licença);

/*if (licença && boavisão) {
  console.log("Pode dirigir :D");
} else {
  console.log("Melhor registrar ou pessoa... :(");
}*/

const istired = true; // C
console.log(licença && boavisão && istired); // != não ou seja não cansada.

if (licença && boavisão && !istired) {
  console.log("Pode dirigir :D");
} else {
  console.log("Melhor ou pessoa dirigir... :(");
}

//     Challenge 3
// 1 - calcular a média de cada time.
// 2 - compare e dertermine o vencedor.
// 3 - se houver empate, falar q foi empate.

const ASD = 97; // 97
const ASK = 96; // 96

console.log(ASD || ASK);

if (ASD || ASK) {
  console.log("Time Dolphins é o vencedor!!!");
} else {
  console.log("Time Koalas é o vencedor!!!");
}

// 1 - saber as duas medias.
// 2 - saber qual é a maior.
// 3 - fala quem ganhou.

/*if (ASD > ASK) {
  console.log("ASD ganhou o jogo");
}
if (ASK > ASD) {
  console.log("ASK ganhou o jogo");
}*/

//     Correção

const SDolphins = (96 + 108 + 89) / 3; // 97
const SKoalas = (88 + 91 + 110) / 2; // 96
// D(97 + 112 + 81)/3 = 96
// K(109 + 95 + 86)/3 = 96 ambos nao levam o trofeu <=100
// *D(         + 101)/3 = 103
// K(         + 123)/3 = 109 Nesse caso os koalas ganham
// *K(         + 106)/3 = 103 aki ambos empatam

console.log(SDolphins, SKoalas);
//      TESTE 1 e 2            Bonus 1
if (SDolphins > SKoalas && SDolphins >= 100) {
  console.log("Dolphins win the trophy !!!");
} else if (SKoalas > SDolphins && SKoalas >= 100) {
  console.log("Koalas win the trophy !!!");
} else if (SDolphins === SKoalas && SDolphins >= 100 && SKoalas >= 100) {
  console.log("Both win the trophy !!!");
} else {
  console.log("No one wins the trophy. :( ");
}

///////////////////////////////////////////

// Ideia q tive pra complementar a aula de hj

// Cria um novo objeto de data

const dataAtual = new Date();

// Obtem o dia, mês e ano atual
const dia = dataAtual.getDate();
const mês = dataAtual.getMonth() + 1; // os meses são indexados de 0 a 11
const ano = dataAtual.getFullYear();

console.log("Hoje é " + dia + "/" + mês + "/" + ano);

// Agr obter o dia da semana

// Obter o número do dia da semana (0-6)
const numeroDiaSemana = dataAtual.getDay();

console.log(new Date().getDay());
console.log(numeroDiaSemana);

// Coloque os nomes dos dias de semana

let nomesDiasSemana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

console.log(nomesDiasSemana[6].toUpperCase());
// Obtem o nome dia da semana atual

nomesDiasSemana = nomesDiasSemana[numeroDiaSemana];

// Exibe o dia da semana atual
console.log("Hoje é " + nomesDiasSemana);

// aula de hoje
const hoje = nomesDiasSemana;
switch (hoje) {
  case "Segunda": // hoje === segunda
    console.log("Tirar o lixo");
    break;
  case "Terça":
    console.log("estudar programação");
    break;
  case "Quarta":
    console.log("lavar roupa");
    console.log("Tirar lalau no hokai treizim");
    break;
  case "Quinta":
    console.log("limpar o chão");
    break;
  case "Sexta":
    console.log("passar cera no chão");
    break;
  case "Sábado":
  case "Domingo":
    console.log("Aproveite o fim de semana :D");
    break;
  default:
    console.log("Não é um dia válido.");
}

//////////////////////////////////////////

//  Em if else...

const day = nomesDiasSemana;

if (day === "Segunda") {
  console.log("hj é Segunda");
} else if (day === "Terça") {
  console.log("hj é Terça");
} else if (day === "Quarta") {
  console.log("Hj é Quarta");
} else if (day === "Quinta") {
  console.log("Hj é Quinta");
} else if (day === "Sexta") {
  console.log("Hj é Sexta");
} else if (day === "Sábado" || day === "Domingo") {
  console.log("Sextoooooouu");
} else {
  console.log("dia não válido");
}

// Operador Ternary é um if e else resumido

const Midade = 22;
Midade >= 18
  ? console.log("posso beber yay")
  : console.log("não posso beber :(");

const drink = Midade >= 18 ? "vinho" : "água";
console.log(drink);

console.log(`like to drink ${Midade >= 18 ? "vinho" : "água"}`);

// formas bem resumidas de escrever em if else

// Challenge 4

const bill = 275;
const porcentagem = 15;

const gorgeta = (bill * porcentagem) / 100;

console.log(
  `A conta ficou em ${bill} e a gorgeta em ${gorgeta} o valor total deu ${
    bill + gorgeta
  }.}`
);

//////////////////////////////////////////////////

/*const listaDeCompras = ["Arroz", "Feijão", "óleo", "Macarrão", "Qboa"];
console.log(listaDeCompras);
console.log(listaDeCompras.sort());
const arroz1 = {
  Marca:'kurumin',
  preco:20
}
const arroz2 = {
  Marca:'Benta',
  preco:25
}*/

const listaDeCompras = ["Arroz", "Feijão", "óleo", "Macarrão", "Qboa"];

// Challenge da Facul do Mor

const quantidade = prompt("Escolha a quantidade que deseja. :)");

const valor = prompt("Escolha o valor do produto. :)");

let valorTotal = 0;
let desconto = 0;

if (0 < quantidade && quantidade <= 9) {
  valorTotal = quantidade * valor;
  console.log(
    `O valor total da compra deu ${valorTotal} reais. Sem desconto por unidade.`
  );
} else if (10 <= quantidade && quantidade <= 99) {
  compra(5);
}

function compra(a) {
  valorTotal = quantidade * valor;
  desconto = a;
  umPorCento = valorTotal / 100;
  console.log(
    `O valor total da compra deu ${valorTotal}, mas com o desconto o valor é de ${(valorTotal =
      valorTotal - umPorCento * desconto)}.`
  );
}
