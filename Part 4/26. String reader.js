function stringReader(str){
    const sortetCharts = str.split('').sort()
    const counter = {}

    for (let row of sortetCharts)
        for (let n of row)
            if (counter[n]) counter[n]++
            else counter[n] = 1

            const sorted = Object.entries(counter)
            .sort((a, b) => b[1] - a[1]);
          
          console.log(sorted);
}

console.log(stringReader("Create a program that reads a string from the console and prints in alphabetical order all characters in the string. Also displays the count of each character in the string."))