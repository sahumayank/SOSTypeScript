//Example of Creating Bitwise Operators
//
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
//
var a:number = 2;   
var b:number = 3;
 
var result; 
 
result = (a & b);     
console.log("(a & b) => ",result);
 
result = (a | b);          
console.log("(a | b) => ",result);  
 
result = (a ^ b);  
console.log("(a ^ b) => ",result);
 
result = (~b); 
console.log("(~b) => ",result);
 
result = (a << b); 
console.log("(a << b) => ",result); 
 
result = (a >> b); 
console.log("(a >> b) => ",result);