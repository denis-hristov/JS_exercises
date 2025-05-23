function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
  
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)
  
    return merge(mergeSort(left), mergeSort(right))
}
  
function merge(left, right) {
    const result = []
    let i = 0, j = 0
  
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i++])
      } else {
        result.push(right[j++])
      }
    }
  
    return result.concat(left.slice(i)).concat(right.slice(j))
}
  
  console.log(mergeSort([34, 7, 23, 32, 5, 62]))
