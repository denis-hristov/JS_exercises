function writeThis(n) {
    let days = Number(n[0]);
    let dailyKm = Number(n[1]);
    let totalKm = dailyKm;
    for (let i = 0; i < days; i++) {
        let percentIncreases = Number(n[i+2]);
        dailyKm += dailyKm * (percentIncreases / 100);
        totalKm += dailyKm;
    }
    
    let requiredKm = 1000;
    if (totalKm >= requiredKm) {
        console.log(`You've done a great job running ${Math.ceil(totalKm - requiredKm)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(requiredKm - totalKm)} more kilometers`);
    }
}
writeThis(["5",
    "30",
    "10",
    "15",
    "20",
    "5",
    "12"]);