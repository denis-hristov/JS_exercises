function writeThis(deposit,deadline,annualInterest) {
    deadline=deadline/100;
    let price = deposit + deadline * ((deposit*annualInterest)/12);
    console.log(price);
}
writeThis(200, 3, 5.7);