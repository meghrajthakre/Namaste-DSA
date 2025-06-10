// find the negatives number of an array if the number is find count if not found return 0;

function findNegative(arr) {
    let count=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++
        }
    }
    return count

}

let arr = [1, 2, 3, -48, 54, -4, -5, -554, 66]
let result = findNegative(arr);
console.log(result)