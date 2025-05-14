function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
  
    const pivot = arr[arr.length - 1]
    const left = []
    const right = []
  
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)]
}
  
const numbers = [34, 7, 23, 32, 5, 62]
console.log(quickSort(numbers))
