"use strict";
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

import * as fs from "fs";

//const fs = require("fs");

console.log("start");

let snd = ""; 
fs.readFile("and.txt", (err, data) => {
    if (err) {
        console.log("Klaida", err);
        return;
    }
    snd += data;
    console.log(snd);
    fs.readFile("bnd.txt", (err, data) => {
        if (err) {
            console.log("Klaida", err);
            return;
        }
        snd += data;
        console.log(snd);
        fs.readFile("cnd.txt", (err, data) => {
            if (err) {
                console.log("Klaida", err);
                return;
            }
            snd += data;
            console.log(snd);
            let mnd = snd.split(" ");
            console.log(mnd);
            mnd.sort((e1, e2) => e1.length - e2.length);
            console.log(mnd);
        });
    });
});

console.log("finish");

/*
fs.readFile("bnd.txt", (err, data) => {
    if (err) {
        console.log("Klaida", err);
        return;
    }
    snd += 
    console.log("" + data);
});
console.log("finish");
*/
/*
const fs = require("fs");
let s = "";
fs.readFile("4.txt", (err, data) => {
    s += data;
    // let a = ("" + data);
    fs.readFile("3.txt", (err, data) => {
        s += " " + data;
        // let b = ("" + data);
        fs.readFile("1.txt", (err, data) => {
            s += " " + data;
            console.log(s);
            let m = s.split(" ");
            // let c = ("" + data);
            //  let m = [a, b, c];
            m.sort((e1, e2) => e1.length - e2.length);
            console.log(m);
            fs.readFile("5.txt", (err, data) => {
                console.log("" + data);
                fs.readFile("2.txt", (err, data) => {
                    console.log("" + data);
                });
            });
        });
    });
});
*/

/*
const fs = require("fs");
let s = "";
fs.readFile("4.txt", (err, data) => {
s += data;
fs.readFile("3.txt", (err, data) => {
s += " " + data;
fs.readFile("1.txt", (err, data) => {
s += " " + data;
let m = s.split(" ");
m.sort((e1, e2) => e1.length - e2.length);
console.log(m);
fs.readFile("5.txt", (err, data) => {
console.log("" + data);
fs.readFile("2.txt", (err, data) => {
console.log("" + data);
});
});
});
});
});
*/







/*
Ats: 

[ 'pirmas', 'trecias', 'ketvirtas' ]
penktas
antras
*/


/*
const fs = require("fs");
let s = "";
fs.readFile("4.txt", (err, data) => {
    s += data;
    // let a = ("" + data);
    fs.readFile("3.txt", (err, data) => {
        s += " " + data;
        // let b = ("" + data);
        fs.readFile("1.txt", (err, data) => {
            s += " " + data;
            console.log(s);
            let m = s.split(" ");
            // let c = ("" + data);
            //  let m = [a, b, c];
            m.sort((e1, e2) => e1.length - e2.length);
            console.log(m);
            fs.readFile("5.txt", (err, data) => {
                console.log("" + data);
                fs.readFile("2.txt", (err, data) => {
                    console.log("" + data);
                });
            });
        });
    });});
*/








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