function missingNumber(arr) {
    let n = arr.length;
    let totalSum = n * (n + 1) / 2;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    return  totalSum - sum;
}

console.log(missingNumber([1, 2, 3, 5, 6]));
