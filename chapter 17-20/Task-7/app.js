var items=['cake','applepie','cookie','chips','patties'];
var data=prompt("Welcome to abc bakkery what do you want to order:")
var check=data.toLowerCase();
for(var i=0; i<=items.length; i++){
    if(check==items[i]){
        alert("Item "+check+" is available at "+i+" index");
        break;
    }
    else{
        alert("Sorry, Item not found ");
        break;
    }
}
