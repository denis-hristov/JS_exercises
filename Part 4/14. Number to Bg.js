function numToBg(num){
    let strNum=num.toString()
    let words = ""
    if(num===0)words="нула"

    else if(strNum.length===1)
        words=firstNumber(num)

    else if(strNum.length===2){
        if(strNum[0]==="1" && strNum[1]==="0")
            words+="десет"
        else if(strNum[0]==="1")
            words+=oneSecondNumber(Number(strNum[1]))+"на"+"десет"
        else if(strNum[1]==="0")
            words+=secondNumber(Number(strNum[0]))
        else
            words+=secondNumber(Number(strNum[0]))+" и "
            +firstNumber(Number(strNum[1]))
    }
    else if(strNum.length===3){
        words+=thirthNumber(Number(strNum[0]))
        if(strNum[1]==="1" && strNum[2]==="0")
            words+=" и "+"десет"
        else if(strNum[1]==="1")
            words+=" и "+oneSecondNumber(Number(strNum[2]))+"на"+"десет"
        else if(strNum[2]==="0")
            words+=" и "+secondNumber(Number(strNum[1]))
        else
            words+=" "+secondNumber(Number(strNum[1]))+" и "
            +firstNumber(Number(strNum[2]))
    }
    return words
}

function thirthNumber(num){
    let word = ""
    switch(num){
        case 1:
            word="сто"
            break
        case 2:
        case 3:
            word=firstNumber(num)+"ста"
            break
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            word=firstNumber(num)+"хиляди"
            break
        default:
            word="Грешка"
        }
    return word
}

function secondNumber(num){
    let word = ""
    switch(num){
        case 1:
            word="десет"
            break
        case 2:
            word="двадесет"
            break
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            word=firstNumber(num)+"десет"
            break
        default:
            word="Грешка"                                                                                                                                                                       
    }
    return word
}

function oneSecondNumber(num){
    let word = ""
    switch(num){
        case 1:
            word="еди"
            break
        case 2:
            word="два"
            break
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            word=firstNumber(num)
            break
        default:
            word="Грешка"                                                                                                                                                                       
    }
    return word
}

function firstNumber(num){
    let word = ""
    switch(num){
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

console.log(numToBg(4))
console.log(numToBg(58))
console.log(numToBg(289))
console.log(numToBg(990))