function digitEqual(str){
    let itIs = false

    let digit = thirdFromBack(str)

    if(digitIs7(digit)) itIs=true

    return itIs
}

const digitIs7 = digit => digit==='7'

function thirdFromBack(str){
    return str[str.length-3]
}

console.log(digitEqual("nnn7nn"))
console.log(digitEqual("nnn7nniii"))
console.log(digitEqual("7vv"))
console.log(digitEqual("nnnnnnnnn8nn"))
console.log(digitEqual("7"))