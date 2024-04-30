function palindrome(str) {
    //Remove non-alphanumeric characters and transform to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    //Check if the string is equal to its inverse
    return str === str.split('').reverse().join('');
  }
  
  //testing
  console.log(palindrome("eye"));
  console.log(palindrome("racecar"));
  console.log(palindrome("RaceCar"));
  console.log(palindrome("race CAR"));
  console.log(palindrome("2A3*3a2"));
  console.log(palindrome("2A3 3a2"));
  console.log(palindrome("2_A3*3#A2"));
  console.log(palindrome("not a palindrome"));