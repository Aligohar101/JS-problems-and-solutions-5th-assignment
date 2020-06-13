var data_1=prompt("Enter the number to show its multiplication table: ");
var data_2=prompt("Enter the length of table: ");
var num=parseInt(data_1);
var len=parseInt(data_2);
for(var i=0; i<=len; i++){
    var result=num*i;
    document.write(num+"x"+i+"="+result+"</br>");
}