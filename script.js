//Script to check if a string is a Palindrome!

let cleanString = function (string) {
    //Normalizamos string, quitamos acentos, quitamos caracteres que no sean letras, pasamos string a minúsculas.
    let cleanString = string.normalize("NFD").replace(/[\u0300-\u036f]/g, '').replace(/([^\w]+|\s+)/g, '').toLowerCase();
    return cleanString;
}

let reverseString = function (string) {
    //Cogemos el string original, lo convertimos en array, le damos la vuelta, y unimos de nuevo.
    let stringToReverse = cleanString(string).split('').reverse().join('');
    return stringToReverse;
}

function isPalindrome(string) {
    //Comprobamos si la frase es un palíndromo o no
    if (cleanString(string) === reverseString(string)) {
        console.log('Is a palindrome!')
    } else {
        console.log('No way! Not a palindrome...')
    }
}

isPalindrome('Dábale arroz a la zorra el abad');
isPalindrome('No subas, abusón');
isPalindrome('Isaac no ronca así');
isPalindrome('Sergio no ronca así');
