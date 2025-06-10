// find the min number in an array ;

function minArray(arr) {

    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= min) {
            min = arr[i];
        }
    }
    return min
}

let arr = [8, 52, 3, 4, 56, 9, 7, 5, 5]
let res = minArray(arr);
console.log(res)