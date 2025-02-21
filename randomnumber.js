 //how to generate Random number by using javascript.

function number(){
  return Math.ceil (Math.random()*10);
  }
console.log(number())
for (let index=2; index<5;index++){
  console.log(number());} 