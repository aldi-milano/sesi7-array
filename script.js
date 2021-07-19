//Soal no.1

let pekerjaan = ["Front End", "Back End", "Software Engineer", "Mobile Developer", "Cloud Engineer"]

console.log(pekerjaan);
document.getElementById("panjang").innerHTML = "Total length pada arrays data adalah " + pekerjaan.length;


document.write("<ol>")
for(let i = 0; i < pekerjaan.length; i++) {
    document.write(`<li> ${ (pekerjaan[i]) } </li>`) 
}
document.write("</ol>")

//Soal. no.2

let tim = ["Goku", "Bejita", "Bulma", "Krilin", "Android 18", "Cell"]

let timSlice1 = tim.slice (0, 3)
let timSlice2 = tim.slice (3, 6)

document.write("<h3>Soal No.2</h3>")
document.write("Total tim: " + tim + "<br>" + "<br>")
document.write("Tim 1: " + timSlice1 + "<br>")
document.write("Tim 2: " + timSlice2 + "<br>")

//Soal no.3

let data = [3, 5, 7, 9, 11]

let double = data.map(i => {
    return i * 5
})

document.write("<h3>Soal no.3</h3>")
document.write("Hasil perkalian 5 pada data Array [3, 5, 7, 9, 11] adalah " + "[" + double + "]")
console.log(double);

//Soal no.4

let pertama = ["Math", "English", "Programming"]
let kedua = ["Geography", "Spanish", "Programming"]

document.write("<h3>Soal no.4</h3>")
document.write("Cek nilai yang sama pada dua Array sbb: " + "<br>" + "<br>")
document.write(`pertama = ["Math", "English", "Programming"]` + "<br>" + "<br>")
document.write(`kedua = ["Geography", "Spanish", "Programming"]` + "<br>" + "<br>")

for(let i = 0; i < pertama.length; i++) {
    for(let j = 0; j < kedua.length; j++) {
        if(pertama[i] == kedua[j]) {
            console.log(true);
            document.write(true + "<br>");
        }else{
            console.log(false);
            document.write(false + "<br>");
        }
    }
}