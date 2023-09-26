/*
    Resources used:
    https://stackoverflow.com/questions/2304052/check-if-a-number-has-a-decimal-place-is-a-whole-number

    https://www.geeksforgeeks.org/binary-search/
    ^ took a look at this one to figure out why my code wasn't working before I realised the tests were broken

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    ^ to sort the array for the tests
*/


function binarySearch(list, element) {
    let leftSide = 0;
    let rightSide = list.length - 1;

    while(leftSide <= rightSide) {
        let mid = (leftSide + rightSide) / 2;  // division produces a decimal 
        if (mid % 1 != 0) {
            mid = mid - 0.5;
        }

        if (element == list[mid]) {
            //console.log("equals");
            return 0;
        }
        else if (element > list[mid]) {
            //console.log("greater than");
            leftSide = mid + 1;
        }
        else {
            //console.log("less than");
            rightSide = mid - 1;
        }
    }
    return -1;
}

// for some reason my original idea was to do this recursively -
// it wasn't working but i will probably come back to it and fix it 
// to see how it compares to the iterative version - i'm curious how
// much longer it would take / if the complexity would be at all different,
// since they are both working on a sorted list

/*
function recursiveBinarySearch(list, element) {
    if (list.length > 1) {
        let mid = (list.length - 1) / 2;
        if (mid % 1 != 0) {
            mid = mid - 0.5;
        }
    
        if (element == list[mid]) {
            return 0;
        } 
        else if (element > list[mid]) {
            return recursiveBinarySearch(list.slice(mid + 1, list.length - 1), element);
        }
        else {
            return recursiveBinarySearch(list.slice(0, mid - 1), element);
        }
    } 
    else {
        if (element == list[0]) return 0;
        return -1;
    }
}*/