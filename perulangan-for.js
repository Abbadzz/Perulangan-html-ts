"use strict";
const output1 = document.getElementById("output1");
const inputN = prompt("Masukkan angka N: ");
const N = Number(inputN);
let hasil1 = "";
for (let i = 1; i <= N; i++) {
    hasil1 += `${i}<br>`;
}
output1.innerHTML = hasil1;
// Soal Nomor 2
const output2 = document.getElementById("output2");
const inputBatas = prompt("Masukkan batas atas: ");
const batas = Number(inputBatas);
let hasil2 = "";
for (let i = 2; i <= batas; i += 2) {
    hasil2 += `${i}<br>`;
}
output2.innerHTML = hasil2;
//Soal Nomor 3
const output3 = document.getElementById("output3");
const inputAwal = prompt("Masukkan angka awal: ");
const awal = Number(inputAwal);
let hasil3 = "";
for (let i = awal; i >= 1; i--) {
    hasil3 += `${i}<br>`;
}
hasil3 += "Selamat Tahun Baru!";
output3.innerHTML = hasil3;
//Soal Nomor 4
const output4 = document.getElementById("output4");
const inputM = prompt("Masukkan angka: ");
const M = Number(inputM);
let hasil4 = "";
for (let i = 1; i <= 10; i++) {
    hasil4 += `${i} x ${i * M} = ${i * M}<br>`;
}
output4.innerHTML = hasil4;
