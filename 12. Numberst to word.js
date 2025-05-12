function numToWord(num){
    let word = ""
    switch(num){
        case 0:
            word="нула"
            break
        case 1:
            word="едно"
            break
        case 2:
            word="две"
            break
        case 3:
            word="три"
            break
        case 4:
            word="четири"
            break
        case 5:
            word="пет"
            break
        case 6:
            word="шест"
            break
        case 7:
            word="седем"
            break
        case 8:
            word="осем"
            break
        case 9:
            word="девет"
            break
        default:
            word="Грешка"                                                                                                                                                                       
    }
    return word
}

console.log(numToWord(4))
console.log(numToWord(5))
console.log(numToWord(2))
console.log(numToWord(38))