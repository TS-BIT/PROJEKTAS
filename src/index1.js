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