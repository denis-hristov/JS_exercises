function calculateDamage(yourType, opponentType, attack, defense){
    let effectiveness = effect(yourType,opponentType);

    if(effectiveness=="Super effective")
        attack*=2
    else if(effectiveness=="Not very effective")
        attack*=0.5

    let damage = 50 * (attack/defense)

    let answer = "Wrong data!"
    if(damage<0)
        answer="Opponent type won!"
    else answer = "Your type won!"
    
    return answer
}

function effect(yourType, opponentType){
    let effectiveness = ""
    switch(yourType){
        case "fire":
            if(opponentType=="grass")
                effectiveness = "Super effective";
            else if (opponentType=="water")
                effectiveness = "Not very effective";
            else if (opponentType=="electric")
                effectiveness = "Neutral";
            break;

        case "water":
            if(opponentType=="fire" || opponentType=="electric")
                effectiveness = "Super effective";
            else if (opponentType=="grass")
                effectiveness = "Not very effective";
            break;

        case "grass":
            if(opponentType=="water")
                effectiveness = "Super effective";
            else if (opponentType=="electric")
                effectiveness = "Not very effective";
            else if (opponentType=="fire")
                effectiveness = "Neutral";
            break;

        case "electric":
            if(opponentType=="water")
                effectiveness = "Super effective";
            else if (opponentType=="fire"||opponentType=="grass")
                effectiveness = "Neutral";
            break;
    }
    return effectiveness
}

console.log(calculateDamage("fire", "electric", 250, 300))