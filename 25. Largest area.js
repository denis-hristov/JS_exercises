function largestArea(arr) {
    const counter = {}

    for (let row of arr)
        for (let n of row)
            if (counter[n]) counter[n]++
            else counter[n] = 1

    let max=0
    for (let key in counter)
        if(counter[key]>max) max=counter[key]

    return max
}

const arr = [
    [1, 3, 4, 2, 4],
    [3, 3, 4, 2, 3],
    [1, 2, 3, 3, 3]
]

console.log(largestArea(arr))
