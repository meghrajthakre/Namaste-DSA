function missingNumber(nums) {
    let n = nums.length;
    let totalSum = n * (n + 1) / 2;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }

    return  totalSum - sum;
}

console.log(missingNumber([1, 2, 3, 5, 6]));
