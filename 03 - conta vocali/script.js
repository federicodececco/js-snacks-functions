/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

/**
 * Takes a string and counts how many vowels are in said string
 *@param{string} str - string to be evaluated
 *@returns{number} - number of vowels
**/
const numberOfVowels = (str) => {
    let comparison = "aeiou"
    counter = 0
    for (let i = 0; i < str.length; i++) {
        for (let k = 0; k < comparison.length; k++) {
            if (comparison[k] === str[i]) {
                counter++
            }
        }
    }
    return counter
}

// Invoca la funzione qui e stampa il risultato in console

console.log(numberOfVowels(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)