function writeThis(paperRolls, fabricRolls, glueLiters, discountPercent) {
    let paperPrice = 5.80;
    let fabricPrice = 7.20;
    let gluePrice = 1.20;
    
    let totalCost = (paperRolls * paperPrice) + (fabricRolls * fabricPrice) + (glueLiters * gluePrice);
    let discountAmount = (totalCost * discountPercent) / 100;
    let finalCost = totalCost - discountAmount;
    
    console.log(finalCost.toFixed(3));
}
writeThis(2, 3, 2.5, 25);
