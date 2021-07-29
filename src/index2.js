/*
import { resolve } from "path";
import { rawListeners } from "process";
import * as readline from "readline";








/*
sita f-j paskaiciuoja faktoriala F
jei paduosi neigiama skaiciu visada gausi -1 (klaida)
*/
/*
function fakt(sk) {
    if(sk < 0) {
        throw new Error ("neimanoma apskaiciuoti neigiamo skaiciaus F");    
    }
    if (sk=== 0) {
        return 1;
    }
    return sk * fakt(sk - 1);
}

let skaicius = 5

try {
    console.log(fakt(skaicius));
}
catch (err) {
    console.log("Ïdiote - blogas skaicius: " + err.msg);
}

console.log("pabaiga")

rl.close();
*/

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

