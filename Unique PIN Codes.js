function writeThis(firstLimit, secondLimit, thirdLimit) {
    let primeNumbers = [2, 3, 5, 7];

    for (let first = 2; first <= firstLimit; first += 2) {
        for (let second of primeNumbers) {
            if (second > secondLimit) continue;

            for (let third = 2; third <= thirdLimit; third += 2) {
                console.log(`${first} ${second} ${third}`);
            }
        }
    }
}
writeThis(3, 5, 5);