// ************ TASK DESCRIPTION ************

// Write a function "sumAll" using rest parameters that takes ANY number of arguments and returns their sum.

function sumAll(...args) {
    return args.reduce((total, current) => total + current, 0);
  }
  

// TODO





















// Below this comment any modification is prohibited. 
module.exports = sumAll;