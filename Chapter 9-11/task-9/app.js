var num=prompt("Enter number:");
var check=parseInt(num);
if(check%2==0){
    alert("Number is even");
}
if(check%3==0 || check%check==0){
    alert("Number is odd");
}