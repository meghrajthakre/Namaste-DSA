// best time to buy and sell stock ;

function buyAndSell(arr) {
    let min = arr[0];
    let max = 0;

    for (let i = 1; i < arr.length; i++){
        if (arr[i]-min > max) {
            max = arr[i]-min
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return max 
}

let res = buyAndSell([7, 4, 2, 1, 5]);
console.log(res)