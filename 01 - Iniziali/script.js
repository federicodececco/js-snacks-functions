/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];



// Dichiara la funzione qui.

/** 
* Extracts the initial of each string contained in a given array
* @param{object} array - the array that needs ectraction
* @returns{object} -  the array of initials
**/
const estractArrayInitials = (array) => {
    let resArray = []
    for (let i = 0; i < names.length; i++) {
        resArray[i] = array[i][0]
    }
    return resArray

}


// Invoca la funzione qui e stampa il risultato in console

console.log(estractArrayInitials(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]