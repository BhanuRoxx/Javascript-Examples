//Find largest number among 3 numbers in javascript.
function largenum(num1,num2,num3){
  if(num1>=num2&&num1>=num3)
    return `${num1} is a Largest number`
  else if (num2>=num1&&num2>=num3)
    return `${num2} is a Largest number`

   return  `${num3} is a Largest number` 
}
console.log(largenum(32,56,1));
console.log(largenum(322,47,0));
console.log(largenum(27,76,100));
console.log(largenum(10,100,1000));
console.log(largenum(1.1,1.2,1.3));

//another method
 
console.log(Math.max(89,12,0));
console.log(Math.max(655,135,965));
console.log(Math.max(233,289,-5));
console.log(Math.max(233,122,-987));
console.log(Math.max(69,122,63));