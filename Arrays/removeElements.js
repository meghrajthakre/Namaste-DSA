function removeElements(arr,val){

    let x= 0;
    for (let i = 0; i < arr.length; i++) {
        
        if(arr[i] !== val){
            arr[x] = arr[i];
            x++
        }
        
    }
    return x

}

let res = removeElements([1,2,3,6,4,5,4,6],5);
console.log(res);
