task5
var value=prompt("Enter the number: ");
var intvalue=parseInt(value);

if(intvalue===null){
    for(var x=0; x<=10; x++){
        document.write("5"+"x"+x+"="+5*x+"</br>");
    }
}
else{
    for(var i=0; i<=10; i++){
        document.write(intvalue+"x"+i+"="+intvalue*i+"</br>");
    }
}