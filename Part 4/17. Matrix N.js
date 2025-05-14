function matrix(num){
    let arr=[]
    for(let r=0;r<num;r++){
        let row=[]
        for(let c=0;c<num;c++){
            row.push(r+1+c)
        }
        arr.push(row)
    }
    return arr
}

console.log(matrix(5))