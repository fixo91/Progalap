const calculator = require("./modules");
const readline = require("readline-sync");

//1.
//string (szöveg vagy karakterlánc)
const valamitext = "kiscica";

//number (ez egy szám)
const num = 5;

//boolean (logikai érték)
const output = true;

//object (objektum)
const obj = { name: "Robi", age: 30 };

//array (tömb)
const arr = [1, 12, 3, 5, 9];

//speciális válltozók is vannak, pl: undefined, null

//2.
//Ha egy változót a const -ként hozunk létre, akkor muszáj neki értéket adni és késöbb NEMTUDJUK változtatni ezt az értéket.
//Ha egy változót a let -ként hozunk létre, akkor létrehozhatjuk érték nélkül is, késöbb adhatunk neki értéket, majd ezt a
//későbbiekben is MEGTUDJUK válltoztatni.

//3

//A referencia szerinti átadás során a változo eredeti értéke vagy tartalma is módosul, ilyenek pl
//a tömb vagy az objektum. A primitiv változók, pl. a string vagy number értéke viszont nem módosul
//ha meghivjuk a függvényünket.

let probatext = "Fixo";
let arrayProba = [1, 2];

const proba = (szoveg, tomb1) => {
  szoveg += "Fixie";
  tomb1.push(3);
};

proba(probatext, arrayProba);
//A text maradt Fixo, nem változott.
//A tömbünkbe viszont belekerül a 3-as, arrayProba = [1, 2, 3]

let tomb = [4, 8, 9, 74, 16];
let tomb2 = [3, 8, 9, 54, 19, 8];

//4

const containsElement = (arr, element) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
  return false;
};
console.log(containsElement(tomb, 9));
console.log(containsElement(tomb, 18));

//5

let humans = [
  { name: "Fixo", age: 30 },
  { name: "Jonka", age: 21 },
  { name: "Buci", age: 29 },
];

const maximumAge = (arr) => {
  let max = arr[0].age;
  let name = arr[0].name;
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i].age) {
      max = arr[i].age;
      name = arr[i].name;
    }
  }
  return name;
};
console.log(maximumAge(humans));

//6

const metszet = (arr, arr2) => {
  let ujTombMetszet = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr[i] === arr2[j]) {
        ujTombMetszet.push(arr[i]);
        break;
      }
    }
  }
  return ujTombMetszet;
};
console.log(metszet(tomb, tomb2));

7; //

console.log(calculator.sum(5, 2));
console.log(calculator.multiply(5, 2));
console.log(calculator.powerOf(5, 2));

//9.

const n = readline.question("Kérem az n paramétert: ");
const m = readline.question("Kérem az m paramétert: ");

const arrGen = (n, m) => {
  let matrix = [];
  let pows = 1;
  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < m; j++) {
      matrix[i].push(pows);
      pows *= 2;
    }
  }
  return matrix;
};
console.log(arrGen(n, m));
