const binaryToDecimal = num => num.toString(2)
const decimalToBinary = num => parseInt(num, 2)
const hexadecimalToDecimal = num => num.toString(16)
const decimalToHexadecimal = num => parseInt(num, 16)

console.log(binaryToDecimal(10))
console.log(decimalToBinary(10))
console.log(hexadecimalToDecimal(10))
console.log(decimalToHexadecimal(10))