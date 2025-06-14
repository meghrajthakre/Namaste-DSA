for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < i; j++) {
        row = row + "* "
    }
    console.log(row)
}


// *
// **
// ***
// ****
for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row = row + j + " "
    }
    console.log(row)
}


// 1
// 1 2
// 1 2 3
// 1 2 3 4 


for (let i = 0; i < 5; i++) {
    let row = ""
    let toggle = 1;
    for (let j = 0; j < i + 1; j++) {
        row = row + toggle;
        if (toggle == 1) {
            toggle = 0;
        }
        else {
            toggle = 1
        }

    }

    console.log(row)

}

// 1
// 10
// 101
// 1010
// 10101

let toggle = 1;

for (let i = 0; i < 5; i++) {
    let row = ""
    for (let j = 0; j < i + 1; j++) {
        row = row + toggle;
        if (toggle == 1) {
            toggle = 0;
        }
        else {
            toggle = 1
        }

    }

    console.log(row)

}

// 1
// 01
// 010
// 1010
// 10101