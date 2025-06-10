// find the Largest number in an array ;

function largestNumber(arr) {

    let largest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest
}

let arr =[1,2,3,4,56,9,7,5,5]
let res = largestNumber(arr);
console.log(res)