function writeThis(lenght,width,hight,procentage) {
    procentage = procentage/100;

    let sum = lenght * width * hight;
    let sumLiters = sum * 0.001;
    let usedLiters = sumLiters - sumLiters*procentage;
    console.log(usedLiters);
}
writeThis(85,75,47,17);