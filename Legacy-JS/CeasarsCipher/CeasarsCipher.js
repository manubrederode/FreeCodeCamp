function rot13(str) {
    //Callback function to replace each character with its decoded version
    function decodeChar(char) {
        //Gets the ASCII code of the character
        const code = char.charCodeAt(0);

        //Checks if the character is within the range of uppercase letters
        if (code >= 65 && code <= 90) {
            //Decodes the character by shifting 13 positions and ensuring it remains within the range of capital letters
            return String.fromCharCode(((code - 65 + 13) % 26) + 65);
        } else {
            //Returns the original character if it is not an uppercase letter
            return char;
        }
    }

    //Applies the callback function to each character in the string and returns the resulting string
    return str.split('').map(decodeChar).join('');
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));