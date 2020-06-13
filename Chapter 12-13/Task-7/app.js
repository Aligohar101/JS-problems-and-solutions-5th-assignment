var input=prompt("Enter time in 24 hrs format");
var result=input.slice(0,2);
var check=parseInt(result);
var final=check-12;
alert("The time is: "+final);