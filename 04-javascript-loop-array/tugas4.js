// Soal 1 ----------------------------------------
console.log("\n----------------------------------------");
console.log("Soal 1");
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// Soal 2 ----------------------------------------
console.log("\n----------------------------------------");
console.log("Soal 2");
for (var i = 1; i < 10; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// Soal 3 ----------------------------------------
console.log("\n----------------------------------------");
console.log("Soal 3");
for (var i = 1; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Soal 4 ----------------------------------------
console.log("\n----------------------------------------");
console.log("Soal 4");
let array1 = [1, 2, 3, 4, 5, 6];
console.log(array1[5]);

// Soal 5 ----------------------------------------
console.log("\n----------------------------------------");
console.log("Soal 5");
let array2 = [5, 2, 4, 1, 3, 5];
console.log(array2.sort());

// Soal 6 ----------------------------------------
console.log("\n----------------------------------------");
console.log("Soal 6");
let array3 = [
  "selamat",
  "anda",
  "melakukan",
  "perulangan",
  "array",
  "dengan",
  "for",
];

array3.forEach((kalimat) => {
  console.log(kalimat);
});

// Soal 7 ----------------------------------------
console.log("\n----------------------------------------");
console.log("Soal 7");
let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i <= array4.length; i++) {
  if (array4[i] % 2 == 0) {
    console.log(array4[i]);
  }
}

// Soal 8 ----------------------------------------
console.log("\n----------------------------------------");
console.log("Soal 8");
let kalimat = ["saya", "sangat", "senang", "belajar", "javascript"];
let kalimatBaru = kalimat.join(" ");
console.log(kalimatBaru);

// Soal 9 ----------------------------------------
console.log("\n----------------------------------------");
console.log("Soal 9");
var sayuran = [];
sayuran.push("kangkung");
sayuran.push("bayam");
sayuran.push("buncis");
sayuran.push("kubis");
sayuran.push("timun");
sayuran.push("seledri");
sayuran.push("tauge");

console.log(sayuran);
