function writeThis(shape, a, b) {
    let sum = 0;
    if(shape === "square")
        sum = a*a;
    else if (shape === "rectangle")
        sum = a*b;
    else if (shape === "circle")
        sum = Math.PI *a*a;
    else sum = a*b/2;
    console.log(sum);
}
writeThis("triangle", 4.5, 20);