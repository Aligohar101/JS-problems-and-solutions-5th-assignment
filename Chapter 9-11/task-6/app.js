var marks1=prompt("Enter the obtained number in first subject");
var marks2=prompt("Enter the obtained number in second subject");
var marks3=prompt("Enter the obtained number in third subject");
var total=300;
var t_o_m=parseInt(marks1)+parseInt(marks2)+parseInt(marks3);
var perc=(t_o_m*100)/total;
document.write("<h1>Marks Sheet </h1>" +"</br>"+"</br>");
document.write("Total Marks: "+total+"</br>");
document.write("Marks Obtained: "+t_o_m+"</br>");
document.write("Percentage: "+perc+"%"+"</br>");
if(perc>=80){
    document.write("Grade=A-one"+"</br>"+"Remarks:Excellent");
}
else if(perc>=70){
    document.write("Grade=A"+"</br>"+"Remarks:Good");
} 
else if(perc>=60){
    document.write("Grade=B"+"</br>"+"Remarks:you need to improve");
} 
else{
    document.write("Grade=F"+"</br>"+"Remarks:Sorry");
}