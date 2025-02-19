function writeThis(input) {
    let seaTrips = Number(input[0]);
    let mountainTrips = Number(input[1]);
    let totalProfit = 0;
    
    for (let i = 2; i < input.length; i++) {
        let packageType = input[i];

        if (packageType === "sea" && seaTrips > 0) {
            totalProfit += 680;
            seaTrips--;
        } else if (packageType === "mountain" && mountainTrips > 0) {
            totalProfit += 499;
            mountainTrips--;
        }

        if (seaTrips === 0 && mountainTrips === 0) {
            console.log("Good job! Everything is sold.");
            break;
        }
    }

    console.log(`Profit: ${totalProfit} leva.`);
}
writeThis(["2",
    "2",
    "sea",
    "mountain",
    "sea",
    "sea",
    "mountain"]);