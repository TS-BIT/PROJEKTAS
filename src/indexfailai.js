/*
const fs = require("fs");


const fs = require("fs");
console.log("start");
fs.readFile("a.txt", (err, data) => {
if (err) {
console.log("Klaida", err);
return;
}
console.log("" + data);
});
fs.readFile("b.txt", (err, data) => {
if (err) {
console.log("Klaida", err);
return;
}
console.log("" + data);
});
console.log("finish");
*/

/*
perskaitytumet duomenis is failu a.txt, b.txt, c.txt
priskirtumet vienam kintamajam butent tokia tvarka
ir atspausdintumet to kintojo reiksme
*/


const fs = require("fs");

console.log("start");

let snd = ""
fs.readFile("and.txt", (err, data) => {
    if (err) {
        console.log("Klaida", err);
        return;
    }
    snd += data; 
    console.log(snd);
});

fs.readFile("bnd.txt", (err, data) => {
    if (err) {
        console.log("Klaida", err);
        return;
    }
    snd = 
    console.log("" + data);
});
console.log("finish");



//Vienas promisas vyksta viename evente?


/*
import * as fs from "fs";

console.log("start");

function readFile (name) {
    return new Promise((resolve, reject) => {
        fs.readFile(name, (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
}
// let data = "" + await readFile("a.txt");
// console.log(data);
// console.log("finish");
readFile("a.txt").then( data => {
console.log("" + data);
console.log("finish");
});
*/










/*
import * as fs from "fs";

console.log("start");

function readFile (name) {
    return new Promise((resolve, reject) => {
        fs.readFile(name, (err, data) => {
            console.log("files read");
            if (err) {
                reject(err);

            }
        }
    }
}

*/