// find the second largest number in an array ;
function secondLargest(arr) {
    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i]
        }
        // it will check the duplicates and max 
        else if (arr[i] > secondMax && arr[i] != max) {
            secondMax = arr[i]
        }
    }

    return secondMax === -Infinity ? null : secondMax;


}
let arr = [1, 2, 3, 4, 5, 6, 6, 6, 7, 5]

let res = secondLargest(arr);
console.log(res)