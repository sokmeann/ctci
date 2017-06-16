/***** PROBLEM 1 - isUnique */

  /*
  * APPROACH:
    * Use an object to track the characters.
    * If any of the characters has more than 1 instance, return false.
  */

  function isUnique_Obj(str){
    let charCheck = {};
    // Count by character
    str.split('').forEach(char => {
      if(charCheck.hasOwnProperty(char)) charCheck[char]++;
      else charCheck[char] = 1;
    })
    // Check if any character is not unique
    for(let key in charCheck){
      if(charCheck[key] > 1) return false;
    }
    return true;
  }

  /*
  * APPROACH:
    * Loop through the string and compare each char with the remaining char.
    * If current char and remaining char is equal, return false.
  */

  function isUnique(str){
    for(let i = 0; i < str.length; i++){
      for(let j = 1 + i; j < str.length; j++){
        if(str[i] === str[j]) return false;
      }
    }
    return true;
  }


/***** PROBLEM 2 - Check Permutation */

  /*
  * APPROACH:
    * Permutations have the same length, same character composition, if sorted, should be equal.
  */

  function checkPerm(str1, str2){
    if(str1.length !== str2.length) return false;
    else {
      const str1_sorted = str1.split('').sort().join('');
      const str2_sorted = str2.split('').sort().join('');
      return str1_sorted === str2_sorted;
    }
  }


/***** PROBLEM 3 - URLify **/

  /*
  * APPROACH:
    * Trim the string.
    * Loop through the string, and add each character to a result string.
    * If a space, add '%20'.
  */

  function urlify(str){
    let result = '';
    str.trim().split('').forEach(char => {
      char === ' ' ? result += '%20' : result += char
    })
    return result
  }


/***** PROBLEM 4 - Palindrome Permutation */

  /*
  * APPROACH:
    * If true, the string will have a 0 or 1 char that is single, others are in even number.
    * Space and case ignored.
  */

  function palindromePermutation(str){
    let charObj = {}, singleChar = false
    // Count by character, excluding space
    str.toLowerCase().split('').forEach(char => {
      if(char !== ' ' && charObj.hasOwnProperty(char)) charObj[char]++
      else if(char !== ' ') charObj[char] = 1
    })
    // Check that only a max of 1 char that is single, rest should be even
    for(let character in charObj){
      if(charObj[character] === 1){
        if(singleChar) return false
        else singleChar = true
      }else if(charObj[character] %2 !== 0){
        return false
      }
    }
    return true
  }


/***** PROBLEM 5 - One Away */

  /*
    * APPROACH:
    * if the two strings are ===, return true
    * if the two strings length ===, check if only 1 char different, return true
    * if the two strings length +/- 1, and all char of the shorter string is contained in the other, return true
    * All other cases will be false.
  */

  function oneAway(str1, str2){
    // assuming that no special casing (lowercase)
    if(str1 === str2) return true
    else if(str1.length === str2.length){
      // case 1 letter got replaced?
      let differentChar = false
      for(let i = 0; i < str1.length; i++){
        if(!differentChar){
          if(str1[i] !== str2[i]) differentChar = true
        }else{
          if(str1[i] !== str2[i]) return false
        }
      }
      return true
    }
    else if(Math.abs(str1.length - str2.length) === 1){
      // case addition or deletion
      let shorterStr = str1.length < str2.length ? str1 : str2, otherStr = str1.length < str2.length ? str2 : str1
      // check that all the characters in the shorterStr are included in otherStr
      for(let i = 0; i < shorterStr.length; i++){
        if(shorterStr[i] !== otherStr[i]){
          if(shorterStr[i] !== otherStr[i+1]) return false
        }
      }
      return true
    }
    else return false
  }


/***** PROBLEM 6 - String Compression */

  /*
  * APPROACH:
    * Loop through the string.
    * Have a variable that tracks the current character being counted.
    * Have a counter.
    * Compress to a new result string.
    * Compare the length of the result str and original str.
  */

  function strCompression(str){
    let currentChar = undefined, counter = 0, result = ''
    str.split('').forEach(char => {
      // If currentChar has been initialized, count chars
      if(currentChar !== undefined){
        if(currentChar === char) counter++
        else{
          result += currentChar + counter
          currentChar = char
          counter = 1
        }
      }else{
        // Initialize currentChar
        currentChar = char
        counter = 1
      }
    })
    // add what's in memory for currentChar and counter, upon loop exit
    result += currentChar + counter
    return result.length < str.length ? result : str
  }
