// Finding out the users name to greet! 

var name = prompt("Hi there! Tell me your name plase!"); //Variable 1st

if (name.length==0 || !isNaN(name)) {
	var name = prompt("Oops! Make sure to WRITE your name. And try to do that with letters");
}

document.getElementById('name').innerHTML=name;



// Discovering the developers to greet them too :))

const consoleWelcomeNote = "If you are here, most likely you are a developer. Hey! Nice to meet you."; //Variable 2nd

console.log(consoleWelcomeNote); //Something for the console


// Some arithmetics to use arithmetic operators in an easy format

const adding = 2926+19;
const substracting = 2590-617;
const multiplying = 5618 * 495;
const dividing = 1298 / 16;


document.getElementById('plus').innerHTML = "2926 + 19 = " + adding;
document.getElementById('multiply').innerHTML = "5618 * 495 = " + multiplying;
document.getElementById('minus').innerHTML = "2590 - 617 = " + substracting;
document.getElementById('divide').innerHTML = "1298 / 16 = " + dividing;
