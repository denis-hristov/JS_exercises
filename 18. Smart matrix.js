function matrix(num){
    // let arr=[]
    // for(let r=0;r<num;r++){
    //     let row=[]
    //     for(let c=0;c<num;c++){
    //         row.push(0)
    //     }
    //     arr.push(row)
    // }
    let arr = Array.from({length:num},()=>Array(num).fill(0))

    let digit = 1
    let top = 0;
    let bottom = num - 1;
    let left = 0;
    let right = num - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            arr[top][i] = digit++;
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            arr[i][right] = digit++;
        }
        right--;

        for (let i = right; i >= left; i--) {
            arr[bottom][i] = digit++;
        }
        bottom--;

        for (let i = bottom; i >= top; i--) {
            arr[i][left] = digit++;
        }
        left++;
    }
    return arr
}

console.log(matrix(5))