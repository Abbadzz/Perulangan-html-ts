"use strict";
//Soal Nomor 6
const output6 = document.getElementById("output6");
const inputbatas = prompt("Masukkan batas angka: ");
const Batas = Number(inputbatas);
let hasil6 = "";
let g = 1;
while (g <= Batas) {
    hasil6 += `${g}<br>`;
    g++;
}
output6.innerHTML = hasil6;
//Soal Nomor 7
const output7 = document.getElementById("output7");
const inputPercobaan = prompt("Masukkan jumlah percobaan maksimal: ");
const jumlahPercobaan = Number(inputPercobaan);
let hasil7 = "";
let percobaan = 1;
while (percobaan <= jumlahPercobaan) {
    hasil7 += `Percobaan ke-${percobaan}<br>`;
    percobaan++;
}
output7.innerHTML = hasil7;
//Soal nomor 8
const output8 = document.getElementById("output8");
const inputO = prompt("Masukkan angka O: ");
const O = Number(inputO);
//For
let hasil8 = "";
for (let h = 1; h <= O; h++) {
    hasil8 += `${h}<br>`;
}
//While
let hasil9 = "";
let j = 1;
while (j <= O) {
    hasil9 += `${j}<br>`;
    j++;
}
output8.innerHTML =
    `<h5>Versi <em>For</em></h5>
${hasil8}
<h5>Versi <em>While</em></h5>
${hasil9}`;
