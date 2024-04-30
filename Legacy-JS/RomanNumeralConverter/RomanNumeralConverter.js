function convertToRoman(num) {
    //Object that maps Roman numerals to their Arabic numeral equivalents
    const romanNumerals = {
          M: 1000,
          CM: 900,
          D: 500,
          CD: 400,
          C: 100,
          XC: 90,
          L: 50,
          XL: 40,
          X: 10,
          IX: 9,
          V: 5,
          IV: 4,
          I: 1
      };
  
      //Variable to store the result in Roman numerals
      let result = '';
  
      //Iterates over each key-value pair of the object
      for (let key in romanNumerals) {
          //As long as the Arabic number is greater than or equal to the corresponding value in Roman numerals
          while (num >= romanNumerals[key]) {
              //Adds the Roman numeral to the result string
              result += key;
              //Subtract the corresponding value from the Arabic number
              num -= romanNumerals[key];
          }
      }
  
      //Returns the result in Roman numerals
      return result;
  
  }
  
  //Testing
  console.log(convertToRoman(2));
  console.log(convertToRoman(5));
  console.log(convertToRoman(9));
  console.log(convertToRoman(12));
  console.log(convertToRoman(29));
  console.log(convertToRoman(36));
  console.log(convertToRoman(45));
  console.log(convertToRoman(83));
  console.log(convertToRoman(99));
  console.log(convertToRoman(501));
  console.log(convertToRoman(891));
  console.log(convertToRoman(1006));
  console.log(convertToRoman(2014));
  console.log(convertToRoman(2024));
  console.log(convertToRoman(3999));