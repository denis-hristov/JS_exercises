function writeThis(tipe, row, column){
    let cost=0.0;
    if (tipe == "Premiere"){
        cost = row*column*12;
    }
    else if (tipe == "Normal"){
        cost = row*column*7.5;
    }
    else if (tipe == "Discount"){
        cost = row*column*5;
    }
    console.log(cost.toFixed(2) + " leva");
}
writeThis("Normal", 21, 13);