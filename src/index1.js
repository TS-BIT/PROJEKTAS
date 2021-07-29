/*
import * as fs from "fs/promises";

fs.readFile("./a.txt")
.then(tekstas => {
    console.log("" + tekstas);
})
.catch
*/

import * as fs from "fs/promises";
try {
let tekstas = await fs.readFile("./a.txt");
console.log("" + tekstas);
} catch (err) {
console.log("klaida", err);
}


    // promisas gali buti 3 busenose: pending - laukimo busena iki resolve arba reject busenu, resolve - patvirtinta, reject - atmestas 
    // viskas vyksta vieno evento ribose
    // promisai rimta prielipa prie JS kaip ir setTimeout

    /*
    async function suma (a, b) {
        return a + b;
    }
    let rez = await suma(1, 2) + await suma(4, 5);
    console.log(rez + 4);
    console.log("labas");
    */
    
    async function suma (a, b) {
        return a + b;
        }
        let rez = await suma(1, 2) + await suma(4, 5);
        console.log(rez + 4);
        console.log("labas");
       
    // tas pats rezultatas tik su then
        /*
        suma(1, 2)
        .then(v1 => {
        return new Promise((resolve) => {
        suma(4, 5)
        .then(v2 => {
        resolve (v1 + v2);
        });
        });
        })
        .then(val => {
        rez = val;
        console.log(rez + 4);
        console.log("labas");
        });
        */

        
    /*    
    let reiksmePromisas = suma(1, 2);

    reiksmesPromisas.then(reiksme => {
        rez = reiksme + 4;
        console.log(rez);
    }

    console.log(rez + 4);
    */

    //async f- j modifikatorius await yra komanda iskviesti f-j ir islukstenti rezultata.  tai kas iki promiso viskas pakliuvo i f-j then

    /*
    async function suma (a, b) {
        if (a < 0 || b < 0) {
            throw "äs sudedu tik teigiamus skaicius";
        }
        return a + b;
        }
        let rez = await suma(1, 2) + await suma(4, 5);
        console.log(rez + 4);
        console.log("labas");
    */

    let duomenys = "";
    try {
        duomenys += await fs.readFile("a.txt");
        // duomenys += await fs.readFile("b.txt");
        duomenys += await fs.readFile("c.txt");
        
    } catch (err) {
        console.log("Klaida skaitant is failo:",err);





    }


    }

// kiekvienas await sukaido musu programa i thenús  

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
sukurti 2 JSON failus, kuriuose butu string'u masyvai
perskaityti abu failus, suparsinti, apjungti i viena masyva
surusiuoti masyva pagal string'o ilgi
atspausdinti masyva
*/






