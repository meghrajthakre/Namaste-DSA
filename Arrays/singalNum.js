function singleNumb(arr) {
    let hash = {};
    for (let i = 0; i < arr.length; i++) {
        if (!hash[arr[i]]) {
            hash[arr[i]] = 1
        }
        else {
            hash[arr[i]] = 2;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]] == 1) {
            return arr[i]
        }
    }
}

let res = singleNumb([1, 1, 2, 3, 3, 4, 4, 5, 5, 6, 6])
console.log(res)