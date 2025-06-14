// write a function that return the number of digits in a number 


function count(n) {
    if (n == 0) return 1
    n = Math.abs(n)
    let count = 0;

    while (n > 0) {
        n = Math.trunc(n / 10);
        count++
    }
    return count
}

let res = count(-5255);
console.log(res)
