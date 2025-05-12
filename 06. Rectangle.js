function fourDigitNumber(number){
    let solution = {
        digitSum: digitSum(number),
        reversed: reverseDigits(number),
        lastFirst: lastDigitFirst(number),
        switchMidle: switchMidle(number)
    }
    return solution
}

//const digitSum = num => num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0)
function digitSum(number){
    let sum = 0
    let num = number.toString().split('')
    
    num.forEach(v=>{
        sum+=Number(v)
    })
    return sum
}

const reverseDigits = num => Number(num.toString().split('').reverse().join(''))

const lastDigitFirst = num => {
    let str = num.toString()
    return Number(str[str.length-1]+str.slice(0, str.length-1))
}

function switchMidle(num){
    let str = num.toString()
    let result = str[0]
    for(let i=str.length-2;i>0;i--)
        result+=str[i]
    result+=str[str.length-1]
    return Number(result)
}

console.log(fourDigitNumber(2456))
console.log(fourDigitNumber(8563))