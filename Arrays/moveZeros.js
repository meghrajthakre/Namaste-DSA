
function moveZeros(arr){
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
       
        if(arr[i] !== 0){
            arr[x] = arr[i];
            x++
        }
        
    }
    for(let i = x ;i<arr.length ;i++){
        arr[i] = 0
    }
    return arr
}



let res =moveZeros([0,2,0,1,2,3,0])
console.log(res);

function moveZeros(arr) {
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      if (i !== x) {
        // Swap only if needed
        [arr[i], arr[x]] = [arr[x], arr[i]];
      }
      x++;
    }
  }

  return arr;
}

let res2 = moveZeros([0, 2, 0, 1, 2, 3, 0]);
console.log(res2);  // ➜ [2, 1, 2, 3, 0, 0, 0]

// x points to where the next non-zero should go.

// i goes through the array.

// Jab non-zero mile, to arr[x] aur arr[i] swap karo (agar alag hai).

// Isse sabhi non-zero left me aa jaate hain, aur zero peeche chale jaate hain — bina 2nd loop ke.