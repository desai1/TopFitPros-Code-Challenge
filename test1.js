/**
 * Test 1
 * This is the first coding challenge. Below are two arrays. 
 * The second array is identical to the first except for one number.
 * Find the missing number and log it in the console
 *
 * You may use any development tools or package manager you like. 
 * Lodash is included as a bower.json dependency in case you would like to use it.
 */

(function(){       // Use IIFE to solve problem of Global Variables

    'use strict';   // always use this statement at first line of Script

    var arr = [1,2,5,7,4,8,12,15,17,37];
var secondArr = [1,17,5,12,4,7,15,2,37];

        /*How to solve this problem
    First do the sorting of array and then loop through array and store value if index will be -1*/

function findMissingNumber (first, second) {

    var m;   // To store Missing Value

    var sorted = first.sort(function (a, b) {
        return a-b;
    });            // Sort first Array

    var sorted1 = second.sort(function (a, b) {
        return a-b;
    });          // sort second array

    for (var i in sorted) {
        if (sorted1.indexOf(sorted[i]) < 0) {
            m = sorted[i];
            break;
        }
    }
    console.log("Number missing in second array is", m);  //Log final Result
}
findMissingNumber(arr, secondArr);
})();