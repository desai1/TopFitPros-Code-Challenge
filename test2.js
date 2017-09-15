/**
 * Test 2
 * Choose one of the following
 */

/**
 * Fix the function so that it returns [4,[1],[2],[3],[4]];
 */

var count = 4;
function foo() {
  var table = [count];
  while (count-- > 0) {
    table.push([]);
  }
  for (var count = 1; count < table.length; count++) {
    table[count].push(count);
  }
  return table;
}

// console.log(foo());

////////
// OR //
////////

/*
 * The desired result is a countdown from 5 to 0 using console log messages. 
 * Explain why the code only logs -1, then fix the code so it works as expected.
 */

function countdown (num) {
  for (var i = 0; i <= num; i += 1) {
    setTimeout(function () {
      console.log(num - i);
    }, i * 1000);
  }
}

// countdown(5);