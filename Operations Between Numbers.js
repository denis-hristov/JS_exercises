function writeThis(a, b, symbol) {
    let sum = 0;

    if (symbol == "+") {
        sum = a + b;
        let n = (sum % 2 == 0) ? "even" : "odd";
        console.log(`${a} ${symbol} ${b} = ${sum} - ${n}`);
    } 
    else if (symbol == "-") {
        sum = a - b;
        let n = (sum % 2 == 0) ? "even" : "odd";
        console.log(`${a} ${symbol} ${b} = ${sum} - ${n}`);
    } 
    else if (symbol == "*") {
        sum = a * b;
        let n = (sum % 2 == 0) ? "even" : "odd";
        console.log(`${a} ${symbol} ${b} = ${sum} - ${n}`);
    } 
    else if (symbol == "/") {
        if (b == 0) {
            console.log(`Cannot divide ${a} by zero`);
            return;
        }
        sum = a / b;
        console.log(`${a} ${symbol} ${b} = ${sum.toFixed(2)}`);
    } 
    else if (symbol == "%") {
        if (b == 0) {
            console.log(`Cannot divide ${a} by zero`);
            return;
        }
        sum = a % b;
        console.log(`${a} ${symbol} ${b} = ${sum}`);
    }
}

writeThis(10, 0, "/");
