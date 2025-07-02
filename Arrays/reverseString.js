var reverseString = function (s) {
    let len = s.length;
    let halflen =Math.floor( len / 2);

    for (let i = 0; i < halflen; i++) {
        let temp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp

    }
    return s
};


let res = reverseString(['d','f','f','dfe','k']);
console.log(res);

// optimize code 

var reverseString = function (s) {
    for (let i = 0; i < s.length / 2; i++) {
        [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
    }
    return s;
};


// using while loop;

function reverseInPlace(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        // Swap elements
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }

    return arr; // optional, original array hi modify ho jata hai
}

let arr = ['a', 'b', 'c', 'w', 'e' ,'f'];
reverseInPlace(arr);
console.log(arr); // ['e', 'w', 'c', 'b', 'a']


