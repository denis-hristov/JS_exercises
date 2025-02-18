function writeThis(shirtPrice, requiredSum) {
    let shortsPrice = shirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.20;
    let shoesPrice = (shirtPrice + shortsPrice) * 2;
    
    let totalCost = shirtPrice + shortsPrice + socksPrice + shoesPrice;
    let discountAmount = totalCost * 0.15;
    let finalCost = totalCost - discountAmount;
    
    if (finalCost >= requiredSum) {
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${finalCost.toFixed(2)} lv.`);
    } else {
        let neededMoney = requiredSum - finalCost;
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${neededMoney.toFixed(2)} lv. more.`);
    }
}
writeThis(25, 100);