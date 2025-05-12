function numOrString(n){
    let digit = n
    switch(typeof(n)){
        case "string":
            digit+="*"
            break
        default:
            digit++
    }
    return digit
}

console.log(numOrString(3))
console.log(numOrString(3.89))
console.log(numOrString("3"))