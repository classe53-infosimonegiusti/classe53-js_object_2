/* semplificazione */
let name = "pippo";
let age = 30;
let email = "info@simonegiusti.it";

const test = {
    name,
    age,
    email
};

console.log(test);



/* destructuring */
const test2 = {
    'topolino': 'topolina',
    'paperino':  'paperina'
}
const {topolino, paperino} = test2;
console.log(topolino);
console.log(paperino);

/* spread */

const testSpread = {...test2, 'prova': 'test'};
console.log(testSpread);

/* rest */
function sommatoria(...valori) {
    let somma = 0;
    for (let i=0; i<valori.length; i++) {
        somma +=valori[i];
    }
    return somma;
}

alert(sommatoria(1,2,3,4,5));






