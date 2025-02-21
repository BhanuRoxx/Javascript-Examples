smallnum =(num1,num2,num3) =>{
  if(num1<=num2&&num1<=num3)
    return `${num1} is the smallest number`
  else if(num2<=num3 &&num2<=num1)
    return `${num2} is the smallest number`
  else{
     return `${num3} is the smallest number`
  }
}

console.log(smallnum(232,52,-1));
console.log(smallnum(56,52,5.9));
console.log(smallnum(89,76,89));
console.log(smallnum(23,23,23));
console.log(smallnum(-96,-98,-92));
console.log(smallnum(2,-2,-1));
 
//another method 
console.log(Math.min(1,12,0));
console.log(Math.min(599,5.99,59.9));
console.log(Math.min(36,-12,58));
console.log(Math.min(87,-2,63));
console.log(Math.min(96,-182,54));
console.log(Math.min(64,112,-998));