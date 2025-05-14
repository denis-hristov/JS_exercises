const sum = num =>
    num.toString().split(' ').reduce((sum, digit) => sum + Number(digit), 0)

console.log(sum("21 3 54"))