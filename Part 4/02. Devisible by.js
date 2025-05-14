function divisibleBy(num){
    let itIs = false
    if(by5(num)) itIs=true
    else if(by7(num)) itIs=true

    return itIs
}

const by5 = num => num%5===0
const by7 = num => num%7===0

console.log(divisibleBy(10))
console.log(divisibleBy(49))
console.log(divisibleBy(35))
console.log(divisibleBy(19))