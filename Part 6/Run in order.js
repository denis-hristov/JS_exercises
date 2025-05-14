function runInOrder(arrF, arrN){
  let totalDelay = 0
  for(let i=0;i<arrF.length;i++){
    totalDelay+=arrN[i]
    setTimeout(()=>{arrF[i]()}, totalDelay)
  }
}

function sayHi() {
  console.log('hi');
}
function sayBye() {
  console.log('bye');
}
function sayHowdy() {
  console.log('howdy');
}

runInOrder([sayHi, sayBye, sayHowdy], [200, 100, 300]);
