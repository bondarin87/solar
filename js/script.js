'use strict';
let arr1 = [1,2,3];
let arr2 = [1,2,3,4,5,6,7,8,9];
let difer = arr2.length - arr1.length;

for (let i=0;i<difer; i++) {
    arr2.pop();
}
console.log(arr2)