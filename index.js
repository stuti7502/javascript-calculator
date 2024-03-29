
let x=0;
var display1 = document.getElementById('display');
var buttons = document.querySelectorAll("button");
var previous = document.getElementById('previous');
var memory = document.getElementById('memory');
var mode = "DEG";

buttons.forEach((item) => {
	
	item.addEventListener('click', (e) => {
		val = e.target.value;
		var expression = display1.value;
		if(e.target.value == '='){
// log function
			const func = expression.split(" ");
			var a = func[0];
			var b = func[3];
			if(func[1]==="log"){
				var c = Math.log(a);
				var d = Math.log(b);
				if(c===0 && d===0){
					display1.value = 0;
				}
				else{
					previous.value = display1.value;
					display1.value = c / d;
				}
//root function
			}else if(func[1]==="root"){
					previous.value = display1.value;
					display1.value = Math.pow(a, 1/b);
			}
			else{
				previous.value = display1.value;
				val = eval(display1.value);
				display1.value = val;
			}
				
				
			
		}
		else if(e.target.value == 'deg'){
			display1.value = "";
		}
		else if(e.target.value == 'rad'){
			display1.value = "";
		}
//clear
		else if(e.target.value == 'C'){
			val = "";
			document.getElementById('previous').value = "";
			display1.value = val;
		}
		else if(display1.value==="0"){
			display1.value = val;
		}
//operator should not repeat
		else{
			let lastChar = display1.value.charAt(display1.value.length - 1);
			let op = ["+", "-", "*", "/", "%", "."];
			if(op.includes(val) && op.includes(lastChar)){
				display1.value += "";
			}
			else{
				display1.value += val;
			}
		}	
	}
)}
); 


function myFunction3() {
	document.getElementById("drop3").classList.toggle("show");
	}
	
	//Close the dropdown if the user clicks outside of it
	window.onclick = function(event) {
	if (!event.target.matches('.btn3')) {
		var dropdowns = document.getElementsByClassName("drop-content3");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
			openDropdown.classList.remove('show');
		}
		}
	}
	
}
//function for trigonometry dropdown
function myFunction1() {
    document.getElementById("drop1").classList.toggle("show");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
    if (!event.target.matches('.btn1')) {
        var dropdowns = document.getElementsByClassName("drop-content1");
        var j;
        for (j = 0; j < dropdowns.length; j++) {
        var openDropdown = dropdowns[j];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
}
//function for dropdown of functions
function myFunction2() {
	document.getElementById("drop2").classList.toggle("show");
	}
	
	// Close the dropdown if the user clicks outside of it
	window.onclick = function(event) {
	if (!event.target.matches('.btn2')) {
		var dropdowns = document.getElementsByClassName("drop-content2");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
			openDropdown.classList.remove('show');
		}
		}
	}
}


//change the button from deg to rad
function degtorad(){
	var click = document.getElementById("deg");
	var click1 = document.getElementById("rad");
    if(click1.style.display ==="none") {
       click1.style.display ="block";
	   click.style.display ="none";
	   mode = "RAD";
    } else {
       click.style.display ="block";
	   click1.style.display ="none";
	   mode = "DEG";
    } 
}

// on clicking 2nd
function change(){
	const col1 = document.getElementsByClassName("option1");
	const col2 = document.getElementsByClassName("option2");
	if(col2[0].style.display === "inline-block"){
		for(let i=0;i<6;i++){
			col1[i].style.display = "inline-block";
		}
		for(let i=0;i<6;i++){
			col2[i].style.display = "none";
		}
	}else{
		for(let i=0;i<6;i++){
			col2[i].style.display = "inline-block";
		}
		for(let i=0;i<6;i++){
			col1[i].style.display = "none";
		}
	}};

//on clicking second inside of trigo
function inverse(){
	var trigon1 = document.getElementsByClassName('trigo1');
	var trigon2 = document.getElementsByClassName('trigo2');
	var trigon3 = document.getElementsByClassName('trigo3');
	if(trigon2[0].style.display==="none" && trigon1[0].style.display==="inline"){
		for(let i=0;i<6;i++){
			trigon2[i].style.display = "inline";
		}
		for(let i=0;i<6;i++){
			trigon1[i].style.display = "none";
		}
		for(let i=0;i<6;i++){
			trigon3[i].style.display = "none";
		}
	}
	else{
		for(let i=0;i<6;i++){
			trigon1[i].style.display = "inline";
		}
		for(let i=0;i<6;i++){
			trigon2[i].style.display = "none";
		}
		for(let i=0;i<6;i++){
			trigon3[i].style.display = "none";
		}
	}
};
//on clicking hyp inside of trigo
function hyp(){
	var trigon1 = document.getElementsByClassName('trigo1');
	var trigon2 = document.getElementsByClassName('trigo2');
	var trigon3 = document.getElementsByClassName('trigo3');
	if(trigon3[0].style.display==="none" && trigon1[0].style.display==="inline"){
		for(let i=0;i<6;i++){
			trigon3[i].style.display = "inline";
		}
		for(let i=0;i<6;i++){
			trigon1[i].style.display = "none";
		}
		for(let i=0;i<6;i++){
			trigon2[i].style.display = "none";
		}
	}
	else{
		for(let i=0;i<6;i++){
			trigon1[i].style.display = "inline";
		}
		for(let i=0;i<6;i++){
			trigon3[i].style.display = "none";
		}
		for(let i=0;i<6;i++){
			trigon2[i].style.display = "none";
		}
	}
};

//find factorial 
function fact(){
	previous.value = "fact("+display1.value+")";
	if (display1.value < 0) {
		display1.value = "Error!";
	}
	
	else if (display1.value === 0) {
		display1.value = "1";
	}
	
	else {
		let fact = 1;
		for (i = 1; i <= display1.value; i++) {
			fact *= i;
		}
		display1.value = fact;
	}
}
//number is plus then convert it to minus and vice versa
function plusminus(){
	display1.value = -(display1.value)
}
//square of a number
function square(){
	previous.value = "square("+display1.value+")";
	display1.value = display1.value ** 2;
}
//cube of a number
function cube(){
	previous.value = "cube("+display1.value+")";
	display1.value = display1.value ** 3;
}
//ten to the power any number
function tenpowerx(){
	previous.value = "10 ^"+display1.value;
	display1.value = 10**display1.value;
}
//two to the power any number
function twopowerx(){
	previous.value = "2 ^"+display1.value;
	display1.value = 2**display1.value;
}
//remove one character at a time
function backspace(){
	display1.value = display1.value.substr(0, display1.value.length - 1);
}
//ln function
function ln(){
	previous.value = "ln("+display1.value+")";
	display1.value = Math.log(display1.value);
}
//log function
function log(){
	previous.value = "log("+display1.value+")";
	display1.value = Math.log10(display1.value);
}
//square root of a number
function sqroot(){
	previous.value = "squareroot("+display1.value+")";
	display1.value = Math.sqrt(display1.value);
}
//cube root of a number
function cbroot(){
	previous.value = "cuberoot("+display1.value+")";
	display1.value = Math.cbrt(display1.value);
}
//one divide by x 
function onebyx(){
	previous.value = "1/"+display1.value;
	display1.value = 1/display1.value;
}
//convert any number to positive
function abs(){
	previous.value = "abs("+display1.value+")";
	display1.value = Math.abs(display1.value);
}
//next nearest integer
function floor(){
	previous.value = "floor("+display1.value+")";
	display1.value = Math.floor(display1.value);
}
//previous nearest integer
function ceil(){
	previous.value = "ceil("+display1.value+")";
	display1.value = Math.ceil(display1.value);
}
//sin function
function sin(){
	if(mode =="RAD"){
		previous.value = "sin("+display1.value+")";
		display1.value = Math.sin(display1.value);
	}
	else{
	previous.value = "sin("+display1.value+")";
	display1.value = Math.sin(display1.value * (Math.PI/180));
	}
}
//cos function
function cos(){
	if(mode =="RAD"){
		previous.value = "cos("+display1.value+")";
		display1.value = Math.cos(display1.value);
	}
	else{
	previous.value = "cos("+display1.value+")";
	display1.value = Math.cos(display1.value * (Math.PI/180));
	}
}
//tan function
function tan(){
	if(mode =="RAD"){
		previous.value = "tan("+display1.value+")";
		display1.value = Math.tan(display1.value);
	}
	else{
	previous.value = "tan("+display1.value+")";
	display1.value = Math.tan(display1.value * (Math.PI/180));
	}
}
//sec function
function sec(){
	if(mode =="RAD"){
	previous.value = "sec("+display1.value+")";
    display1.value = 1/Math.cos(display1.value);
	}else{
		previous.value = "sec("+display1.value+")";
	display1.value = 1/Math.cos(display1.value * (Math.PI/180));
	}
}
//cosec function
function cosec(){
	if(mode =="RAD"){
		previous.value = "cosec("+display1.value+")";
		display1.value = 1/Math.sin(display1.value);
		}else{
			previous.value = "cosec("+display1.value+")";
		display1.value = 1/Math.sin(display1.value * (Math.PI/180));
		}
}
//cot function
function cot(){
	if(mode =="RAD"){
		previous.value = "cot("+display1.value+")";
		display1.value = 1/Math.tan(display1.value);
		}else{
			previous.value = "cot("+display1.value+")";
		display1.value = 1/Math.tan(display1.value * (Math.PI/180));
		}
}
//sinh function
function sinh(){
	previous.value = "sinh("+display1.value+")";
    display1.value = Math.sinh(display1.value);
}
//cosh function
function cosh(){
	previous.value = "cosh("+display1.value+")";
    display1.value = Math.cosh(display1.value);
}
//tanh function
function tanh(){
	previous.value = "tanh("+display1.value+")";
    display1.value = Math.tanh(display1.value);
}
//sech function
function sech(){
	previous.value = "sech("+display1.value+")";
    display1.value = 1/Math.sinh(display1.value);
}
//cosech function
function cosech(){
	previous.value = "cosech("+display1.value+")";
    display1.value = 1/Math.cosech(display1.value);
}
//coth function
function coth(){
	previous.value = "coth("+display1.value+")";
    display1.value = 1/Math.tanh(display1.value);
}
//sinh function
function sinin(){
	previous.value = "sin-1("+display1.value+")";
    if(display1.value > -1 && display1.value < 1) {
    display1.value = Math.asin(display1.value);
    }
    else{
        display1.value = "Invalid input";
    }
}
//cos inverse function
function cosin(){
	previous.value = "cos-1("+display1.value+")";
    if(display1.value > -1 && display1.value < 1) {
        display1.value = Math.acos(display1.value);
        }
        else{
            display1.value = "Invalid input";
        }
}
//tan inverse function
function tanin(){
	previous.value = "tan-1("+display1.value+")";
    if(display1.value > -1 && display1.value < 1) {
        display1.value = Math.atan(display1.value);
        }
        else{
            display1.value = "Invalid input";
        }
}
//sec inverse function
function secin(){
		previous.value = "sec-1("+display1.value+")";
        display1.value = Math.acos(1/display1.value);
}
//cosec inverse function
function cosecin(){
		previous.value = "cosec-1("+display1.value+")";
        display1.value = Math.asin(1/display1.value);
    
}
//cot inverse function
function cotin(){
		previous.value = "cot-1("+display1.value+")";
        display1.value = Math.atan(1/display1.value);
       
}
//M+ function adding number memory
function mplus(){
	x += eval(display1.value);
	memory.value = x;
	console.log(x);
	var mc_element = document.getElementById("mc");
    mc_element.classList.add("fontWt");
    mc_element.classList.remove("btnDark");
    var mr_element = document.getElementById("mr");
    mr_element.classList.add("fontWt");
    mr_element.classList.remove("btnDark");
}
//M- function removing number from memory
function mminus(){
	x -= eval(display1.value);
	memory.value = x;
	console.log(x);
	var mc_element = document.getElementById("mc");
    mc_element.classList.add("fontWt");
    mc_element.classList.remove("btnDark");
    var mr_element = document.getElementById("mr");
    mr_element.classList.add("fontWt");
    mr_element.classList.remove("btnDark");
}
//store in memory
function ms(){
	try{
		x = eval(display1.value);
		console.log(display1.value);
		memory.value = x;
	}
	catch(error){
		display1.value = "error";
	}
	var mc_element = document.getElementById("mc");
    mc_element.classList.add("fontWt");
    mc_element.classList.remove("btnDark");
    var mr_element = document.getElementById("mr");
    mr_element.classList.add("fontWt");
    mr_element.classList.remove("btnDark");
}
//clear from memory
function mc(){
	console.clear();
	memory.value = "";
	x=0;
	var mc_element = document.getElementById("mc");
    mc_element.classList.remove("fontWt");
    mc_element.classList.add("btnDark");
    var mr_element = document.getElementById("mr");
    mr_element.classList.remove("fontWt");
    mr_element.classList.add("btnDark");
}
//show record of memory
function mr(){
	display1.value = x;
}

function fe(){
	display1.value = parseFloat(display1.value).toExponential();
}
//exp function
function exp(){
	var expression = display1.value;
	const eval1 = expression.split(".");
	if(eval1.length === 2){
		display1.value += "e+0"
	}
	else{
	display1.value += ".e+0"
	}
}
//dms function
function ConvertDDToDMS()
{
	previous.value = "dms("+display1.value+")";
	var degree =  Math.floor(display1.value);
    var minutes = ((display1.value - Math.floor(display1.value)) * 60.0); 
    var seconds = (minutes - Math.floor(minutes)) * 60.0;
	display1.value = degree + ":" + Math.floor(minutes) + ":" + seconds.toFixed(2);
}
function deg(){
	previous.value = "degrees("+display1.value+")";
	var pi = Math.PI;
   display1.value = display1.value * (180/pi);
}
//random number form 0-1
function rand(){
	display1.value = Math.random(display1.value);
}
