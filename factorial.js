//Find factorial of number in javascript.
factorial=(num)=>{
  if(num===0)
    return 1
if(num===1)
  return 1
 else{
  return num*factorial(num-1)
 }
}
 
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(5))
console.log(factorial(3))
console.log(factorial(9))