// Soal 1 ---------------------------------------------
console.log("\n-------------------- Soal 1 --------------------");
function cetakFunction() {
  return "Halo Nama saya Dimas Fahrul";
}

console.log(cetakFunction());

// Soal 2 ---------------------------------------------
console.log("\n-------------------- Soal 2 --------------------");
function myFunction(a, b) {
  return a + b;
}

let angka1 = 20;
let angka2 = 7;
let output = myFunction(angka1, angka2);

console.log(output);

// Soal 3 ---------------------------------------------
console.log("\n-------------------- Soal 3 --------------------");
const Hello = () => "Hello";
console.log(Hello());

// Soal 4 ---------------------------------------------
console.log("\n-------------------- Soal 4 --------------------");
let obj = {
  nama: "john",

  umur: 22,

  bahasa: "indonesia",
};

console.log(obj.bahasa);

// Soal 5 ---------------------------------------------
console.log("\n-------------------- Soal 5 --------------------");
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992];
let objDaftarPeserta = {
  nama: arrayDaftarPeserta[0],
  jenisKelamin: arrayDaftarPeserta[1],
  hobi: arrayDaftarPeserta[2],
  tahunLahir: arrayDaftarPeserta[3],
};
console.log(objDaftarPeserta);

// Soal 6 ---------------------------------------------
console.log("\n-------------------- Soal 6 --------------------");
let arrayBuah = [
  {
    nama: "Nanas",
    warna: "Kuning",
    adaBijinya: false,
    harga: 9000,
  },
  {
    nama: "Jeruk",
    warna: "Oranye",
    adaBijinya: true,
    harga: 8000,
  },
  {
    nama: "Semangka",
    warna: "Hijau & Merah",
    adaBijinya: true,
    harga: 10000,
  },
  {
    nama: "Pisang",
    warna: "Kuning",
    adaBijinya: false,
    harga: 5000,
  },
];

var dataBuahFilter = arrayBuah.filter((item) => {
  return item.adaBijinya === false;
});

console.log(dataBuahFilter);

// Soal 7 ---------------------------------------------
console.log("\n-------------------- Soal 7 --------------------");
let phone = {
  name: "Galaxy Note 20",
  brand: "Samsung",
  year: 2020,
};

let { name, brand, year } = phone;

console.log(name, brand, year);

// Soal 8 ---------------------------------------------
console.log("\n-------------------- Soal 8 --------------------");
let dataBukuTambahan = {
  penulis: "john doe",
  tahunTerbit: 2020,
};

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
};

let objOutput = {};

objOutput = { ...dataBukuTambahan, ...buku };
console.log(objOutput);

// Soal 9 ---------------------------------------------
console.log("\n-------------------- Soal 9 --------------------");
let mobil = {
  merk: "bmw",
  color: "red",
  year: 2002,
};

const functionObject = (param) => {
  return param;
};

console.log(functionObject(mobil));
