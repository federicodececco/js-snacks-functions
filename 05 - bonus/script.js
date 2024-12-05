/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

/**
 * Takes a string and returns a string that is the union of that input and a greetings message epending on the hour of the day
 *@param{string} str - string to be concatenated
 *@returns{string} - concatenated string
**/

// Dichiara la funzione qui.
const greetingsVaried = (str) => {
    let d = new Date()
    let h = d.getHours()
    if (h < 13) return `Buongiorno ${str}`
    else if (h<17) return `Buon pomeriggio ${str}`
    else return `Buonasera ${str}`

}

// Invoca la funzione qui e stampa il risultato in console

console.log(greetingsVaried(name))

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.