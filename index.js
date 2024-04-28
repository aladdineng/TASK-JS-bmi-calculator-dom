function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻


let calculateWeit = (weight /( (height/100)**2));
alert(calculateWeit)

if(calculateWeit > 18.5) {
  alert.log("Underweight")
} else if (calculateWeit >= 18.5 || calculateWeit <= 24.9){

  alert.log("Healthy Weight")
}else if (calculateWeit >= 25.0 || calculateWeit <= 29.9){

  alert.log("Overweight")
}

else if (calculateWeit > 30){

  alert.log("Above Obesity")
}
}





