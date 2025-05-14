function isFlush(cards){
    const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const suitCard = ['H', 'S', 'D', 'C']

    let arrCards = []
    do{for(let i =0;i<5;i++){
        let randomNumValueCard = Math.floor(Math.random() * 13);
        let randomNumSuitCard = Math.floor(Math.random() * 4);
        arrCards.push(`${valueCard[randomNumValueCard]}${suitCard[randomNumSuitCard]}`)
    }} while(dublicatedError(arrCards))
    
    let wonIf2 = 0
    for(let card in cards){
        for(let i in arrCards){
            if(cards[card] === arrCards[i]){
                wonIf2++
                break
            }
        }
    }

    if(wonIf2==2)
        return `You won with ${cards}!\nThe deck: ${arrCards}`
    else if(wonIf2==1)
        return `You almost won with ${cards}!\nThe deck: ${arrCards}`
    else return `You lost with ${cards}!\nThe deck: ${arrCards}`
}

function dublicatedError(arrCards){
    if(arrCards[0]!=arrCards[1]!=arrCards[2]!=arrCards[3!=arrCards[4]])
        return false
    else true
}

const cards = ["AS", "3S"]
console.log(isFlush(cards))