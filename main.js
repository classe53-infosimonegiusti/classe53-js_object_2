/* semplificazione */
let name = "pippo";
let age = 30;
let email = "info@simonegiusti.it";

const sistassiEs6 = {
    name,
    age,
    email
};

console.log(sistassiEs6);



/* destructuring */
const testDestructuring = {
    'topolino': 'topolina',
    'paperino':  'paperina'
}
const {topolino, paperino} = testDestructuring;
console.log(topolino);
console.log(paperino);



/* spread */
const testSpread = {...testDestructuring, 'paperone': 'denaro'};
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






