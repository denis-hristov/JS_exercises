function summing(num){
    let sum = numSum(num)
    return sum
}

const numSum = arr => arr.reduce((total, value) => total + value, 0)

console.log(summing([34, 56, 6, 76, 32]))