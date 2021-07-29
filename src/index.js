// "type": "commonjs", 
// const Puodukas = require("./Puodukas.js");

import { Puodukas } from "./Puodukas.js";

//const { Puodukas } = require("./Puodukas.js");
// const importuojamasFailas = require("./Puodukas.js");
//const Puodukas = importuojamasFailas.Puodukas;


//const {servizas} = require("./Puodukas.js");
//const Puodukas = 

let p = new Puodukas();

console.log("Hello World!!!");

console.log(p);



/*
let vardas = "Jonas";
let pavarde = "Jonaitis";
//objektas zmogus
let zmogus = {
    vardas,
    pavarde,
    gimimoMetai: 1999,
    //pasisveikinimas: function(kalba) {}
    pasisveikinimas(kalba) {
        if(kalba === "en") {
        console.log("Hello", this.vardas, this.pavarde);
        } else {
        console.log("Labas", this.vardas, this.pavarde);
        }
    }
};


console.log(zmogus);
zmogus.pasisveikinimas("en");
zmogus.pasisveikinimas("jp");

labas(zmogus);
labasBelukstu(zmogus);
labas({});

function labas ({vardas, pavarde}) {
console.log("Labinuosi is labas su", vardas, pavarde);
}

function labasBeLukstu (zm) {
    if (zm) {
    console.log("Labinuosi is labas su", vardas, pavarde);
    let vardas = zm.vardas;
    let pavarde = zm.pavarde;
    } else {
    console.log("Nera su kuo sveikintis", this.vardas, this.pavarde);
    }
}

// call pakisa proto nuoroda i f-j puoduko prototie, kuri rodo f-j termoso prototype naujam objektui 
// f-j prototype yra aprasytos call() ir aplly()


*/



