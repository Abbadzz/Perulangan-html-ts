//Soal Nomor 6
const output6 = document.getElementById("output6") as HTMLElement;

const inputbatas: string | null = prompt("Masukkan batas angka: ");
const Batas: number = Number(inputbatas);

let hasil6: string = "";
let g: number = 1;

while (g <= Batas) {
    hasil6 += `${g}<br>`;
    g++;
}

output6.innerHTML = hasil6;

//Soal Nomor 7
const output7 = document.getElementById("output7") as HTMLElement;

const inputPercobaan: string | null = prompt("Masukkan jumlah percobaan maksimal: ");
const jumlahPercobaan: number = Number(inputPercobaan);

let hasil7: string = "";
let percobaan: number = 1;

while (percobaan <= jumlahPercobaan) {
    hasil7 += `Percobaan ke-${percobaan}<br>`;
    percobaan++;
}

output7.innerHTML = hasil7;

//Soal nomor 8
const output8 = document.getElementById("output8") as HTMLElement;

const inputO: string | null = prompt("Masukkan angka O: ");
const O: number = Number(inputO);
//For
let hasil8: string = "";

for (let h: number = 1; h <= O; h++) {
    hasil8 += `${h}<br>`;
}
//While
let hasil9: string = "";
let j: number = 1;

while (j <= O) {
    hasil9 += `${j}<br>`;
    j++;
}
output8.innerHTML = 
`<h5>Versi <em>For</em></h5>
${hasil8}
<h5>Versi <em>While</em></h5>
${hasil9}`