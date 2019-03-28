function checkType(){

var side1 = document.getElementById('first_side').value;
var side2 = document.getElementById('second_side').value;
var side3 = document.getElementById('third_side').value;

if (side1===side2  &&  side2===side3){
  respond("equilateral triangle")
}

else if (side1===side2  &&  side1!==side3 || side1===side3  &&  side1!==side2 || side2===side3  &&  side2!==side1){
respond("isosceles triangle")
}

else if(side1!==side2 && side2!==side3 && side1!==side3){
  respond("scalene triangle")
}
else if(side1>=side2+side3||side2>=side1+side3||side3>=side1+side3){
respond("NOT a triangle")
}
}

function respond(message) {
  output.innerHTML=(message)
}
