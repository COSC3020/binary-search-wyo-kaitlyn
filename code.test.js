const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

function compareNumbers(a, b) {
    return a - b;
}

const testSearch =
    jsc.forall("array nat", function(arr) {
        if(arr.length > 0) {
            arr.sort(compareNumbers);
            return binarySearch(arr, arr[0]) === 0;
        } else {
            return binarySearch(arr, "foo") === -1;
        }
    });

// test for the failed recursive version
    /*
const recursiveSearch =
    jsc.forall("array nat", function(arr) {
        if(arr.length > 0) {
            arr.sort(compareNumbers);
            return recursiveBinarySearch(arr, arr[0]) === 0;
        } else {
            return recursiveBinarySearch(arr, "foo") === -1;
        }
    });*/

jsc.assert(testSearch);
//jsc.assert(recursiveSearch);