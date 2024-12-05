/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/**
 * Takes an array arr and return only the strings that begin with a given letter a
 *@param{string} a - letter to be used as filter
 *@param{object} arr - array to be filtered
 *@returns{object} - filtered array
**/
const arrayLetterFilter = (arr, a) => {
    let resArray = []
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        if (a === arr[i][0]) {
            resArray[counter] = arr[i]
            counter++
        }
    }
    return resArray
}

// Invoca la funzione qui e stampa il risultato in console

console.log(arrayLetterFilter(names, "A"))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]