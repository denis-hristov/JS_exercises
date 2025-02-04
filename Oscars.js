function writeThis(n) {
    let name = n[0]
    let points = Number(n[1]);
    let number = Number(n[2]);

    for (let i = 3; i < n.length; i+=2) {
        let name1 = n[i]
        let morePoints = Number(n[i+1]);
        points += (name1.length*morePoints/2);
        if (points >= 1250.5) {
            console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`);
            return;
        }
    }
    console.log(`Sorry, ${name} you need ${(1250.5-points).toFixed(1)} more!`)
}

writeThis(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])
    