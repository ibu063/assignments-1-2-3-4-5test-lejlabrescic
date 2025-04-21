// ************ TASK DESCRIPTION ************

// Create a function sayHi(name, language) that returns a greeting message like:
// "Hi NAME!" (English), "Hola NAME!" (Spanish), or "Salut NAME!" (French).
// Then, write a curried function hiIn(lang) that fixes the language and returns another function waiting for the name.

/*
* const inFrench = hiIn("French");
* console.log(inFrench("Nina")); // "Salut Nina!"
*/

function sayHi(name, language) {
    if (language === "English") {
      return `Hi ${name}!`;
    } else if (language === "Spanish") {
      return `Hola ${name}!`;
    } else if (language === "French") {
      return `Salut ${name}!`;
    } else {
      return `Hi ${name}!`; 
    }
  }
function hiIn(language) {
    return function(name) {
      return sayHi(name, language);
    };
  }



























// Below this comment any modification is prohibited. 
module.exports = { sayHi, hiIn };
