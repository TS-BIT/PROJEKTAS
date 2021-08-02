/*
sukurti 2 JSON failus, kuriuose butu string'u masyvai
perskaityti abu failus, suparsinti, apjungti i viena masyva
surusiuoti masyva pagal string'o ilgi
atspausdinti masyva
*/
/*
import * as fs from "fs/promises";
let duomenys = "";
try {
duomenys += await fs.readFile("a.txt");
// duomenys += await fs.readFile("b.txt");
duomenys += await fs.readFile("c.txt");
} catch (err) {
console.log("Klaida skaitant is failo:", err);
}
console.log(duomenys);
console.log("pabaiga");

let tekstas = "{\"savybe\": 15}";
console.log(tekstas);
try {
    let o = JSON.parse(tekstas);
    console.log(o);
    console.log(o.savybe + 3);
} catch (err) {
    console.log("Tai ne JSON'as");
}
console.log("pabaiga");

*/


/*
const fs = require("fs/promises");

let s = "";
fs.readFile("4.txt")
.then(data => {
    s += data;
    return fs.readFile("3.txt");
})
.then(data => {
    s += " " +  data;
    return fs.readFile("1.txt");
})
.then(data => {
    s += " " + data;
    let m = s.split(" ");
    m.sort((e1, e2) => e1.length - e2.length);
    console.log(m);
    return fs.readFile("5.txt");
})
.then((data) => {
    console.log("" + data);
    return fs.readFile("2.txt");
})
.then(data => {
    console.log("" + data);
})
.catch(err => {
    console.log("Ivyko klaida", err);
});
*/

/*
import * as fs from "fs/promises";
let duomenys = "";
try {
duomenys += await fs.readFile("a.txt");
// duomenys += await fs.readFile("b.txt");
duomenys += await fs.readFile("c.txt");
} catch (err) {
console.log("Klaida skaitant is failo:", err);
}
console.log(duomenys);
console.log("pabaiga");
*/
/*
console.log("pradzia");

import * as fs from "fs/promises";

let s1 = "";
let s2 = "";
try {
s1 += await fs.readFile("failas1.json");
s2 += await fs.readFile("failas2.json");
} catch (err) {
console.log("Klaida skaitant is failo:", err);
}
console.log(s1, s2);

try {
    let m1 = JSON.parse(s1);
    let m2 = JSON.parse(s2);
    console.log(m1, m2);
    let m = m1.concat(m2);
    console.log(m);
    m.sort((e1, e2) => e1.length - e2.length);
    console.log(m);
} catch (err) {
    console.log("Tai ne JSON'as");
}
   
console.log("pabaiga");
*/
/*
Ats:
pradzia

[ "pirmadienis", "antradienis", "treciadienis", "ketvirtadienis", "penktadienis" ]

 [ "sestadienis", "sekmadienis", "gimtadienis", "vardadienis", "sventadienis" ]
[
  'pirmadienis',
  'antradienis',
  'treciadienis',
  'ketvirtadienis',
  'penktadienis'
] [
  'sestadienis',
  'sekmadienis',
  'gimtadienis',
  'vardadienis',
  'sventadienis'
]
[
  'pirmadienis',
  'antradienis',
  'treciadienis',
  'ketvirtadienis',
  'penktadienis',
  'sestadienis',
  'sekmadienis',
  'gimtadienis',
  'vardadienis',
  'sventadienis'
]
[
  'pirmadienis',
  'antradienis',
  'sestadienis',
  'sekmadienis',
  'gimtadienis',
  'vardadienis',
  'treciadienis',
  'penktadienis',
  'sventadienis',
  'ketvirtadienis'
]

pabaiga
*/
