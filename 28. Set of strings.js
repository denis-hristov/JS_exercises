function setOfStrings(set, k){
    let result =[]
    const arr=Array.from(set)

    function backtrack(str=0, path = []) {
        if (path.length === k) {
          result.push([...path])
          return
        }
    
        for (let i = str; i < arr.length; i++) {
            path.push(arr[i])
            backtrack(i+1,path)
            path.pop()
        }
    }

    backtrack()
    return result
}

const fruits = new Set(["apple", "banana", "orange", "apple", "banana"]);
console.log(setOfStrings(fruits, 2))