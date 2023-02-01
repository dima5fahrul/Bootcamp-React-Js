// Soal 1 ---------------------------------------------
let namalengkap = "Dimas Fahrul Putra Arismanto ";
console.log(namalengkap);

// Soal 2 ---------------------------------------------
let word = "JavaScript";
let second = "is";
let third = "awesome";

let outputGabunganVariable = word + " " + second + " " + third;
console.log(outputGabunganVariable);

// Soal 3 ---------------------------------------------
let hello = "Hello";
let world = "World!";

let output = hello + " " + world;
console.log(output);

// Soal 4 ---------------------------------------------
let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";
let kelilingPersegiPanjang = 2 * (panjangPersegiPanjang + lebarPersegiPanjang);

console.log(kelilingPersegiPanjang);

// Soal 5 ---------------------------------------------
let sentences = "Wah JavaScript itu keren sekali.";

let firstWord = sentences.substring(0, 3);
let secondWord = sentences.substring(4, 14);
let thirdWord = sentences.substring(15, 18);
let fourthWord = sentences.substring(19, 24);
let fifthWord = sentences.substring(25, 31);

console.log("Kata Pertama: " + firstWord);
console.log("Kata Kedua: " + secondWord);
console.log("Kata Ketiga: " + thirdWord);
console.log("Kata Keempat: " + fourthWord);
console.log("Kata Kelima: " + fifthWord);

// Soal 6 ---------------------------------------------
var sentence = "I am going to be React JS Developer";

var exampleFirstWorld = sentence[0];
var exampleSecondWord = sentence[2] + sentence[3];
var exampleThirdWord =
  sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];
var exampleFourthWord = sentence[11] + sentence[12];
var exampleFifthWord = sentence[14] + sentence[15];
var exampleSixthWord =
  sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21];
var exampleSeventhWord = sentence[23] + sentence[24];
var exampleEighthWord =
  sentence[26] +
  sentence[27] +
  sentence[28] +
  sentence[29] +
  sentence[30] +
  sentence[31] +
  sentence[32] +
  sentence[33] +
  sentence[34];

console.log("First Word: " + exampleFirstWorld);
console.log("Second Word: " + exampleSecondWord);
console.log("Third Word: " + exampleThirdWord);
console.log("Fourth Word: " + exampleFourthWord);
console.log("Fifth Word: " + exampleFifthWord);
console.log("Sixth Word: " + exampleSixthWord);
console.log("Seventh Word: " + exampleSeventhWord);
console.log("Eighth Word: " + exampleEighthWord);

// Soal 7 ---------------------------------------------
let txt = "I can eat bananas all day";
let hasil = txt.slice(10, 17);

console.log(hasil);

// Soal 8 ---------------------------------------------
var nilaiDoe = 50;

if (nilaiDoe >= 80) {
  console.log("Indeksnya A");
} else if (nilaiDoe >= 70 && nilaiDoe < 80) {
  console.log("Indeksnya B");
} else if (nilaiDoe >= 60 && nilaiDoe < 70) {
  console.log("Indeksnya C");
} else if (nilaiDoe >= 50 && nilaiDoe < 60) {
  console.log("Indeksnya D");
} else {
  console.log("Indeksnya E");
}

// Soal 9 ---------------------------------------------
let angka = 2;

angka === 2 ? console.log("Angka 2") : console.log("Bukan angka 2");

// Soal 10 ---------------------------------------------
var traffic_lights = "red";

switch (traffic_lights) {
  case "red":
    console.log("berhenti");
    break;
  case "yellow":
    console.log("siap-siap");
    break;
  case "green":
    console.log("jalan");
    break;
  default:
    console.log("warna lampu salah");
    break;
}
