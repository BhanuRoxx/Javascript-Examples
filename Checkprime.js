// This code shows the how to check prime numbers in javascript
checkprimenum=(number)=>{
 let isprime=true

 if(number===1 || number<1)
  return `${number} is not prime`
 
 else{
for(let i=2;i<=number/2;i++){    // i=2  ; 2<=number(2,4,6,8)/2 ;  ( 0,3,3,3)
    
  if(number%2==0)               //  (0,1.5,1.5,1.5)
   
  isprime=false                //(false,true,true,true)
    }
  
    if(isprime)
   return `${number} is a prime`
 
    else
  return `${number} is not prime`
  }
  }
  console.log(checkprimenum(0));
  console.log(checkprimenum(1));
  console.log(checkprimenum(2));
  console.log(checkprimenum(6));
  console.log(checkprimenum(11));
  console.log(checkprimenum(91));
  console.log(checkprimenum(97));