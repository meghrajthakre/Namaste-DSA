function isPalindrome(x) {
    if(x < 0) return false
    let xCopy = x
    let rev = 0;
    while (x > 0) {
        rem = x % 10;
        rev = (10 * rev) + rem;
        x = Math.floor(x / 10);
    }
  return rev == xCopy

}


// console.log(isPalindrome(0));     // true
// console.log(isPalindrome(12321));   // true
// console.log(isPalindrome(123));     // false
// console.log(isPalindrome(-121));    // false


// Instead of reversing the full number, reverse only half of it, and compare both halves.
function isPalindrome(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let reversedHalf = 0;
  while (x > reversedHalf) {
    let digit = x % 10;
    reversedHalf = reversedHalf * 10 + digit;
    x = Math.floor(x / 10);
  }

  return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}
