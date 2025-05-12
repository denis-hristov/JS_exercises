function primeNumbers(){
    let limit = 10000000
    const isPrime = new Uint8Array(limit + 1)
    let arr=[]

    isPrime.fill(1)

    isPrime[0] = 0
    isPrime[1] = 0

    for (let i = 2; i * i <= limit; i++) {
        if (isPrime[i]) {
          for (let j = i * i; j <= limit; j += i) {
            isPrime[j] = 0
          }
        }
      }
    
      for (let i = 2; i <= limit; i++) {
        if (isPrime[i]) arr.push(i)
      }

    return arr
}

console.log(primeNumbers())