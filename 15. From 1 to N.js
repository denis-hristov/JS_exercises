function numbers(num){
    let arr=[]
    for(let i=0;i<num;i++){
        if(i%3!==0 && i%7!==0){
            arr.push(i)
        }
    }
    return arr
}

console.log(numbers(30))