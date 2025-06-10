// for search an Element in the array & find the index

let arr = [1, 2, 3, 4, 56, 7, 8, 965, 54, 5, 4];

let ind=''

for (let i = 0; i < arr.length; i++){
    if (arr[i] === 4) {
        ind = i
        break
    }
}
console.log(ind)