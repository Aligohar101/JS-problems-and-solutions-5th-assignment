var num1=prompt("enter num one:");
var num2=prompt("enter num two:");
var op=prompt("enter the operation (+,-,*,/):");
var int1=parseInt(num1);
var int2=parseInt(num2);
if(op==="+"){
    alert(num1+op+num2+"="+(int1+int2));
}
else if(op==="-"){
    alert(num1+op+num2+"="+(int1-int2));
}
if(op==="*"){
    alert(num1+op+num2+"="+(int1*int2));
}
if(op==="/"){
    alert(num1+op+num2+"="+(int1/int2));
}
