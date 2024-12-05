/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
/**
 * Takes a string and returns a string that is the union of that input and the word "Ciao"
 *@param{string} str - string to be concatenated
 *@returns{string} - concatenated string
**/
const greetings = (str) => {
    return `Ciao ${str}`

}

// Invoca la funzione qui e stampa il risultato in console
console.log(greetings(userName))


//Risultato atteso se si passa 'Mario': // ciao Mario
