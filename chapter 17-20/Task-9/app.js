var items=[24,53,78,91,12];
var num=100000000;
document.write("Array items: ")
for(i=0; i<=items.length; i++){
    document.write(items[i]+" ");
    if(items[i]<num){
        num=items[i];
    }
}
document.write("</br>"+"The smalles item is: "+num);
