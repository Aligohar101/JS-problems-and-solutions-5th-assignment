var secret_number=7;
var guess=prompt("Enter your guess: ");
var check=parseInt(guess);
if(check===7){
    alert("Bingo! Correct answer");
}
else if(check===8){
    alert("close enough!");
}
else{
    alert("try again");
}
