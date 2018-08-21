'use strict';

const myArray = [1, 2, 3, 4, 5];


function lowNumber(arr) {

    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}


function highNumber(arr) {

    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


console.log(lowNumber(myArray));

console.log(highNumber(myArray));