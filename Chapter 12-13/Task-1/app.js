var data=prompt("Enter the data:");
var data_l=data.toLowerCase();
var data_u=data.toUpperCase();
var data_i=parseInt(data)
if(data===data_l){
    alert("You enter lowercase string");
}
else if (data===data_u){
    alert("You enter Uppercase string");
}
else {
    alert("Nothing");
}
