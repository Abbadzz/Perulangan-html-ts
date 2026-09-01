const output1 = document.getElementById("output1") as HTMLElement;

const inputN: string | null = prompt("Masukkan angka N: ");
const N: number = Number(inputN);

let hasil1: string = "";

for (let i: number = 1; i <= N; i++) {
    hasil1 += `${i}<br>`;
}
output1.innerHTML = hasil1;

// Soal Nomor 2
const output2 = document.getElementById("output2") as HTMLElement;

const inputBatas: string | null = prompt("Masukkan batas atas: ");
const batas: number = Number(inputBatas);

let hasil2: string = "";

for (let i: number = 2; i <= batas; i += 2) {
    hasil2 += `${i}<br>`;
}
output2.innerHTML = hasil2;

//Soal Nomor 3
const output3 = document.getElementById("output3") as HTMLElement;

const inputAwal: string | null = prompt("Masukkan angka awal: ");
const awal: number = Number(inputAwal);

let hasil3: string = "";

for (let i: number = awal; i >= 1; i--) {
    hasil3 += `${i}<br>`;
}

hasil3 += "Selamat Tahun Baru!";

output3.innerHTML = hasil3;

//Soal Nomor 4
const output4 = document.getElementById("output4") as HTMLElement;

const inputM: string | null = prompt("Masukkan angka: ");
const M: number = Number(inputM);

let hasil4: string = "";

for (let i: number = 1; i <= 10; i++) {
    hasil4 += `${i} x ${i * M} = ${i * M}<br>`;
}

output4.innerHTML = hasil4;
