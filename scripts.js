var genderText;
var bodyTypeText;
var paralyzeText;
var moralText;
var fightingText;
var throwText;

function calculate() {
	var total = 0;

	var age = myForm.age.value;
	var height = myForm.heightFeet.value * 12 + myForm.heightInches.value;
	var weight = myForm.weight.value;
	var miles = myForm.miles.value;
	
	var genderMultiplier = 1;
	var bodyTypeMultiplier = 1;
	var fightingMultiplier = 1;
	
	if (age < 20) {
		total += 10
	} else if (age <= 30) {
		total += 12
	} else if (age <= 40) {
		total += 8
	} else {
		total += 6;
	}
	
	if (height <= 60) {
		total += 4;
	} else if (height <= 68) {
		total += 9;
	} else if (height <= 74) {
		total += 13
	} else if (height <= 80) {
		total += 17;
	} else {
		total += 20;
	}
	
	total += (weight / 30);
	
	if (genderText == "male") {
		total = total * 1.3;
	} else if (genderText == "female") {
		//nothing
	} else {
		total = total * .8;
	}
	
	if (bodyTypeText == "BaleFighter") {
		total = total - 12;
	} else if (bodyTypeText == "Depp") {
		total = total - 2;
	} else if (bodyTypeText == "Hanks") {
		total = total + 1;
	} else if (bodyTypeText == "BaleBatman") {
		total = total + 6;
	} else if (bodyTypeText == "Pitt") {
		total = total + 8;
	} else {
	
	}
	
	if (moralText == "yes") {
		total = total * 0.9;
	} else {
	 total = total * 1.1;
	}
	
	if (fightingText == "no") {
		total = total - 6;
	} else {
		total = total + 4;
	}
	
	if (throwText == "0") {
		total +=2;
	} else if (throwText == "6") {
		total +=4;
	} else if (throwText == "11") {
		total +=6;
	} else if (throwText == "16") {
		total +=8;
	} else if (throwText == "21") {
		total +=10;
	}
	
	if (fightingText == "yes") {
		total = total * 1.1
	} 
	
	total = total + miles * (1.5);
	
	document.getElementById("count").innerHTML = (Math.round(total) + " kindergardeners");
}

function setGenderText(x) {
	genderText = x;
}

function setBodyTypeText(x) {
	bodyTypeText = x;
}

function setParalyzeText(x) {
	paralyzeText = x;
}

function setMoralText(x) {
	moralText = x;
}

function setFightingText(x) {
	fightingText = x;
}

function setThrowText(x) {
	throwText = x;
}