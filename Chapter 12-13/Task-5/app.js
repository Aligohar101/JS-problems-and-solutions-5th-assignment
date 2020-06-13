var data_1=prompt("Enter password:");
var data_2=prompt("Re-Enter password for conformition:");
var pas_1=data_1.toLowerCase();
var pas_2=data_2.toLowerCase();
var pass="pakistan"
if(pas_1===pass || pas_2===pass){
    alert("The password you enter matched correct password");
}
else{
    alert("enter password again");
}
