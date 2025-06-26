var findMaxConsecutiveOnes = function(nums) {
    let currCount = 0, maxCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currCount++;
            maxCount = Math.max(maxCount, currCount); // Shifted here
        } else {
            currCount = 0;
        }
    }

    return maxCount;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1,0,1,]));
