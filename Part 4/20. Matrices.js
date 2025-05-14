function matrix1(num){
    let arr = Array.from({length:num},()=>Array(num).fill(0))
    
    let digit = 1
    for(let r=0;r<num;r++){
        for(let c=0;c<num;c++){
            arr[c][r]=digit++
        }
    }

    return arr
}

function matrix2(num){
    let arr = Array.from({length:num},()=>Array(num).fill(0))
    
    let digit = 1
    let odd = true
    for(let r=0;r<num;r++){
        if(odd){
            for(let c=0;c<num;c++){
                arr[c][r]=digit++
            }
            odd=false
        }
        else{
            for(let c=num-1;c>=0;c--){
                arr[c][r]=digit++
            }
            odd=true
        }
    }

    return arr
}

function matrix3(num){
    let arr = Array.from({length:num},()=>Array(num).fill(0))
    
    let digit =1
    for (let diag = 0; diag < 2 * num - 1; diag++) {
        let rowStart = diag < num ? num - diag - 1 : 0;
        let colStart = diag < num ? 0 : diag - num + 1;

        while (rowStart < num && colStart < num) {
            arr[rowStart][colStart] = digit++;
            rowStart++;
            colStart++;
        }
    }
    return arr
}

function matrix4(num){
    let arr = Array.from({length:num},()=>Array(num).fill(0))

    let digit = 1
    let top = 0;
    let bottom = num - 1;
    let left = 0;
    let right = num - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            arr[i][top] = digit++;
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            arr[right][i] = digit++;
        }
        right--;

        for (let i = right; i >= left; i--) {
            arr[i][bottom] = digit++;
        }
        bottom--;

        for (let i = bottom; i >= top; i--) {
            arr[left][i] = digit++;
        }
        left++;
    }

    return arr
}

console.log(matrix1(4))
console.log(matrix2(4))
console.log(matrix3(4))
console.log(matrix4(4))
