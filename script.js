var temp;
var unit;

temp = prompt("Enter a temperature in Fahrenheit");
unit = prompt("Do you want to convert to Fahrenheit or Celsius");

function convertTemp(temp, unit){
unit = unit.toUpperCase();
	if(unit === "C"){
		temp = ((temp - 32)*5)/9;
		alert("Your temperature in Celsius is " + temp + " " + unit);
	}
	else if(unit === "F"){
		temp = ((temp * 9)/5)+32;
		alert("Your temperature in Fahrenheit is " + temp + " " + unit);
	}
}
convertTemp(32, "c");


if(temp > 90){
	console.log("Go Swimming");
}
else if(temp < 90 && temp >=70){
	console.log("Wear shorts");
}
else if(temp < 70 && temp >=55){
	console.log("Wear pants");
}
else if(temp < 55 && temp >=40){
	console.log("Wear Jacket");
}else{
	console.log("Wear Winter clothes");
}






for(var num = 1; num <= 100; num++){
	if(num%3 === 0 && num%5 === 0){
		console.log("fizzbuzz");
	}
	else if(num%3 === 0){
		console.log("fizz");
	}
	else if(num%5 === 0){
		console.log("buzz");
	}
	else{
		console.log(num);
		
	}
	
}

	
	


