## 💻 Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


Code Explanation:
return String.fromCharCode(((code - 65 + 13) % 26) + 65);

- String.fromCharCode(...): This converts the resulting ASCII code back to the corresponding character in the ASCII table.
- code - 65: This calculates the offset of the current character relative to the letter 'A' in the ASCII table. For example, if the character is 'A', the result will be 0; if it is 'B', the result will be 1; and so on.
- + 13: This adds 13 to the calculated displacement. Remember that in the ROT13 cipher, each character is shifted by 13 positions.
- %26: This ensures that the calculated offset remains within the uppercase letter range (26 letters in the alphabet). If the calculated displacement is greater than 26, it will be reduced to the remainder of division by 26.
- +65: This adjusts the resulting offset back to the range of ASCII values ​​corresponding to uppercase letters ('A' is 65 in the ASCII table). This is necessary to get the correct ASCII code of the decoded character.