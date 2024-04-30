function telephoneCheck(str) {
    //Regular expression to validate US phone numbers
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    //Tests whether the string matches the regular expression
    return regex.test(str);
    
  }

  //Testing
  console.log(telephoneCheck("800-692-7753"));
  console.log(telephoneCheck("8oo-six427676;laskdjf"));
  console.log(telephoneCheck("555-555-5555"));
  console.log(telephoneCheck("1 555-555-5555"));
  console.log(telephoneCheck("(555) 555-5555"));
  console.log(telephoneCheck("5555555555"));
  console.log(telephoneCheck("555-5555"));
  console.log(telephoneCheck("1 555 555 5555"));
  console.log(telephoneCheck("1 555)555-5555"));
  console.log(telephoneCheck("1 456 789 4444"));
  console.log(telephoneCheck("0 (757) 622-7382"));