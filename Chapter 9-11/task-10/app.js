var num=prompt("Enter number:");
var check=parseInt(num);
if(check>40){
    alert("Too Hot!");
}
else if(check>30){
    alert("The weather today is normal");
}
else if(check>20){
    alert("Today weather is cool");
}
else if(check>10){
    alert("Tofday weather is so cool");
}
else{
    alert("nothing");
}