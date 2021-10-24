 //richiedo di inserire una parola
 const parola = prompt( ' Inserisci una parola ');  // richiedo tramite un prompt di inserire una
 const value = palindroma (parola); // do un nome alla funzione
 console.log(value);  

function palindroma (str)  {  

  //converto la stringa in un array per dividere le singole lettere
const arrValue = parola.split (''); //   
  

//uso reverse per ribaltare le singole lettere
const reveArrVal = arrValue.reverse();   
  

//uso join per raggruppare i valori dell'arrey in stringa 
const revString = reveArrVal.join('');  
  
if (parola == revString) //  //se la condizioone della parola è uguale a revstring
{  
alert('Hai inserito una parola palindroma '); // stampo hai inserito un palidroma    
}  
else {  
alert (' Non è una parola palindroma' ); // stampo non hai inserito un palidroma      
}  
}  

    