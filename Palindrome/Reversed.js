// reverse the number constrain (2**31 , 2**31 -'1);

function reversed(x) {
    let xCopy = x;
    let rev = 0;
    let n = Math.abs(x);
    while (n > 0) {
        let rem = n % 10;
        rev = (10 * rev) + rem;
        n = Math.floor(n / 10);
    }
    // Constrain 
    let limit = Math.pow(2, 31)
    if(rev < -limit || rev> limit) return 0
    
    return (xCopy < 0) ? -rev : rev
}
console.log(reversed(123232656))