function allPears(num){
    let arr=[]
    const nums = []
    for (let i = num; i >= 1; i--)
        nums.push(i)

    function permute(arr1, path = []) {
    if (arr1.length === 0) {
      arr.push(path)
      return
    }

    for (let i = 0; i < arr1.length; i++) {
        const newArr1 = arr1.slice(0, i).concat(arr1.slice(i + 1))
        permute(newArr1, path.concat(arr1[i]))
      }
}
    permute(nums)

    return arr
}



console.log(allPears(3))