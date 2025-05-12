function fibunacci(num){
    let arr=[]
    for(let i=0;i<num;i++){
        if(i===0)
            arr.push(i)
        else if(i===1)
            arr.push(i)
        else
            arr.push(arr[arr.length-1]+arr[arr.length-2])
    }
    return arr
}

console.log(fibunacci(12))