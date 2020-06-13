// task 1 to 7
// var arr=[];
// var arr2={};
// var string=['hello','world'];
// var num=[1,2,3,4,5];
// var bool=[true,false,true];
// var mixed=[1,2.2,'hello',true];
// var qualification=["SSC","HSC","BCS","BS","BCOM","MS","M.phil","PhD"];
// document.write('Qualifications:' +"</br>");
// for(var i=0; i<=qualification.length; i++){
//     document.write(i+") "+qualification[i]+"</br>");
// }

// task 8 
// var names=["Michel",'john','Tonny'];
// var scores=[320,230,480];
// var total=500;
// var percentage=[[(scores[0]/total*100)],[scores[1]/total*100],[scores[2]/total*100]];
// for(var i=0; i<=2; i++){
//     document.write("Score of "+names[i]+" is "+scores[i]+" . Percentage is = "+percentage[i]+" % "+"</br>");
// }

// task 9
// a
// var arr=["pink"];
// var data=prompt("Enter the color you want to add in start of array");
// arr.unshift(data);
// alert(arr);

// b
// var arr=["pink"];
// var data=prompt("Enter the color you want to add in end of array");
// arr.push(data);
// alert(arr);

// c
// var arr=["pink"];
// var data=prompt("Enter the color you want to add in start of array");
// var data2=prompt("Enter the other color you want to add in start of array");
// arr.unshift(data,data2);
//alert(arr);

// d
// arr.shift()
// alert("Updated array is: "+arr);
// e
// arr.pop()
// alert("Updated array is: "+arr);

// f
// var clr=['black','white','pink']
// var data_=prompt("Enter the index you want to add");
// var data_2=prompt("Enter data")
// var index=parseInt(data_);
// clr.splice(index,0,data_2);
// alert(clr);

// g
// var clr=['black','white','pink']
// var data_=prompt("Enter the index you want to delete");
// var index=parseInt(data_);
// clr.splice(0,index);
// alert(clr);

// task 10
// var points = [320, 230, 480, 120];
// document.write("Score of students: "+points+"</br>");
// var result=points.sort(function(a, b){return a-b});
// document.write("Result:"+result);

// task11
// var cities=['karachi','lahore','islamabad',"quetta",'peshawar'];
// document.write(cities+"</br>");
// var copy=cities.slice(2,4);
// document.write("copy of array is: "+copy);

// task12
// var arr=['this','is','my','cat'];
// document.write(arr+"</br>");
// var result=arr.join(seprator=" ");
// document.write("The result is: "+result);

// task 13
// var things=["keyboard","mouse","printer","monitor"];
// document.write(things+"</br>");
// for(var i=0; i<=things.length; i++){
//     document.write("Out:"+"</br>"+things[i]+"</br>");
// }

// task 14
// var things=["keyboard","mouse","printer","monitor"];
// document.write(things+"</br>");
// for(var i=things.length; i>=0; i--){
//     document.write("Out:"+"</br>"+things[i]+"</br>");
// }

// task 15
// var arr=['apple','samsung','motorola'];
// document.write("<select>"+"<option>"+arr+"</option"+"</select>"+"</br>");
