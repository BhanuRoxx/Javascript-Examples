let a=10;
let b=20;
console.log(`Before swapping a=${a} and b=${b}`);
/* 
Frist Method
[a,b]=[b,a];
 console.log(`After swapping a=${a} and b=${b}`);
 */
 //Second method
 a=a+b // 10+20=30
 b=a-b //30-20=10
 a=a-b // 30-10=20
 console.log(`After swapping a=${a} and b=${b}`);
