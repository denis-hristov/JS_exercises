function writeThis(dancers, points, season, location) {
    let totalSum = 0;
    
    if (location === "Bulgaria") {
        totalSum = dancers * points;
    } else if (location === "Abroad") {
        totalSum = dancers * points;
        totalSum += totalSum * 0.50;
    }
    
    let expensesPercentage = 0;
    
    if (location === "Bulgaria") {
        expensesPercentage = season === "summer" ? 0.05 : 0.08;
    } else if (location === "Abroad") {
        expensesPercentage = season === "summer" ? 0.10 : 0.15;
    }
    
    let expenses = totalSum * expensesPercentage;
    let netSum = totalSum - expenses;
    let charityAmount = netSum * 0.75;
    let moneyPerDancer = (netSum - charityAmount) / dancers;
    
    console.log(`Charity - ${charityAmount.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);
}
writeThis(1, 89.5, "summer", "Abroad");