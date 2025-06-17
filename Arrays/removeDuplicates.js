// ❗ Issue:
// This only works if array is sorted and all values are strictly increasing.

// But your logic fails for duplicate zero or if equal elements appear consecutively.

// You should check for arr[i] !== arr[x] instead of arr[i] > arr[x].



function removingDuplicates(arr) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[x]) {   // strictly greater check
            x++;
            arr[x] = arr[i];     // overwrite at x with the new unique element
        }
    }
    return x + 1;   // since x is index, length is x + 1
}
// 


function removingDuplicates(nums) {
    let x = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[x]) {
            x++;
            nums[x] = nums[i];
        }
    }
    return x + 1;
}

let res = removingDuplicates([0, 1, 1, 2, 2, 3, 3, 4, 5, 5, 6]);
console.log(res); // Output: 7

// To see the updated array
