function writeThis(n) {
    let number = Number(n[0]);
    let salary = Number(n[1]);

    for (let i = 2; i < n.length; i++) {
        let media = n[i];
        if (media === "Facebook") 
            salary -= 150;
        else if (media === "Instagram") 
            salary -= 100;
        else if (media === "Reddit") 
            salary -= 50;
        if (salary <= 0) {
            console.log("You have lost your salary.");
            return;
        }
    }
    console.log(salary);
}

writeThis([10, 750, "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
