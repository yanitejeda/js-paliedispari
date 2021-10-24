


const numberChoice = prompt('inserisci un numero da 1 a 5'); //chiedo all'utente un numero da 1 a 5
const numberRandom = Math.floor(Math.random() * 6); // creo un numero ramdom da 0 a 5

function sommaNumeri (num1,num2 ){//creo una funzione che faccia la somma di due numeri
    num1 = parseInt(num1);
    num2 = parseInt(num2);




    if(isNaN(num1) || isNaN(num2)){
        return NaN;
    }
    const risultato = num1 + num2
    return risultato;
}

let somma = sommaNumeri(numberChoice,numberRandom); //sommo i numeri dati dall'utente e quello ramdom

console.log(numberRandom)
console.log(somma);


if (somma % 2 === 0 ){//se la somma dei numeri è multiplo di due
    alert ('il numero è pari')
} else {
    alert ('il numero è dispari')
}
 