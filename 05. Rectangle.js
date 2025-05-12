function rectangle(length, height){
    let result =[]
    result.push(perimeter(length, height))
    result.push(area(length, height))

    return result
}

const perimeter = (a,b)=> 2*(a+b)
const area = (a,b)=> a*b

console.log(rectangle(10, 29))
console.log(rectangle(49, 90))