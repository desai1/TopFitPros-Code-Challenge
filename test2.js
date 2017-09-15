/**
 * Test 2
 * Choose one of the following
 */

/**
 * Fix the function so that it returns [4,[1],[2],[3],[4]];
 */

(function(){

  'use strict';


  var count = 4;

  function foo(c) {

  var table = [c];
  /*while (count-- > 0) {         //Remove while loop to get desirable output
      table.push([]);
  }*/

    // Here if we use count < table.length then it will go to infinite loop.

    for (var i = 1; i <= c; i++) {
    table.push([i]);
  }
  return table;
}
  console.log("Final Result is : ", foo(count));


////////
// OR //
////////

/*
 * The desired result is a countdown from 5 to 0 using console log messages. 
 * Explain why the code only logs -1, then fix the code so it works as expected.
 */


  function countdown (num) {
    // We can solve this problem in two ways
    // 1) Use i using let keyword instead of var so that it can provide block scope
    // 2) use IIFE (Immediately Invoked Function Expression) inside for loop and
    //    pass i as a reference an argument to function.
    //   so by using iife we can solve this problem by storing the value of i.

    for (var i = 0; i <= num; i += 1) {
      (function (i){
        setTimeout(function () {
          console.log(num - i);
        }, i * 1000);
      })(i);
    }
  }
  console.log("Result is :", countdown(5));
})();