// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    if(str=='')return str;
    let arr = str.split(/[-_]/);
    arr = arr.map((val, index) => {
      if(index == 0) {
        return val
      } else{
        return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase()
      }
    })
    return arr.join('')
  }
  // https://www.codewars.com/kata/reviews/517ac19d203167a17e000003/groups/673351a698e3524020678d4d