'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(str1){
  let stringArray = str1.split(" ");
  let jadenArray = [];
  let jadenString = "";
  let newString = "";
  for (let i=0; i<stringArray.length; i++) {
    newString = stringArray[i][0].toUpperCase();
  
    for (let j=1; j<stringArray[i].length; j++) {
      newString += stringArray[i][j];
      

    }
    jadenArray.push(newString);
    
  }  
  for (let k=0; k<jadenArray.length; k++) {
    jadenString += jadenArray[k] + " ";
  }

return jadenString;
  
};



//* Begin of tests
const assert = require('assert')
jadenCase("je veux aprendre a coder plus rapidement")

// End of tests */
