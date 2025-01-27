"use strict";

function beregnFragt() {
    // Hent værdier af vægt og destination
    const vaegt = parseInt(document.getElementById("vaegt").value);
    const destination = document.querySelector("input[name='destination']:checked").value;

    // Variabel til fragtprisen
    let pris;

    if (destination === "PakkeShop") {
        if (vaegt > 0 && vaegt <= 1) {
            pris = 46;
        } else if (vaegt > 1 && vaegt <= 5) {
            pris = 56;
        } else if (vaegt > 5 && vaegt <= 10) {
            pris = 70;
        } else if (vaegt > 10 && vaegt <= 15) {
            pris = 95;
        } else if (vaegt > 15 && vaegt <= 20) {
            pris = 110;
        } else {
            pris = "ukendt vægt - derfor ukendt pris";
        }
    } else if (destination === "Erhverv/Privatadresse") {
        if (vaegt > 0 && vaegt <= 1) {
            pris = 62;
        } else if (vaegt > 1 && vaegt <= 5) {
            pris = 72;
        } else if (vaegt > 5 && vaegt <= 10) {
            pris = 90;
        } else if (vaegt > 10 && vaegt <= 15) {
            pris = 110;
        } else if (vaegt > 15 && vaegt <= 20) {
            pris = 125;
        } else {
            pris = "ukendt vægt - derfor ukendt pris";
        }
    }

    // Vis resultatet
    const resultDivElem = document.getElementById("result");
    resultDivElem.textContent = `Fragtprisen er: ${pris},-`;
    resultDivElem.style.display = "block";
}
