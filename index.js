// function myFunction1() {
//     document.getElementById("drop1").classList.toggle("show");
//     }

//     // Close the dropdown if the user clicks outside of it
//     window.onclick = function(event) {
//     if (!event.target.matches('.btn1')) {
//         var dropdowns = document.getElementsByClassName("drop-content1");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//             openDropdown.classList.remove('show');
//         }
//         }
//     }
//     }
// 	function myFunction2() {
// 		document.getElementById("drop2").classList.toggle("show");
// 		}
	
// 		// Close the dropdown if the user clicks outside of it
// 		window.onclick = function(event) {
// 		if (!event.target.matches('.btn2')) {
// 			var dropdowns = document.getElementsByClassName("drop-content2");
// 			var i;
// 			for (i = 0; i < dropdowns.length; i++) {
// 			var openDropdown = dropdowns[i];
// 			if (openDropdown.classList.contains('show')) {
// 				openDropdown.classList.remove('show');
// 			}
// 			}
// 		}
// 		}
// var text = ""
// function display(x){
// 	text += x;
// 	document.getElementById('display').value = text;
// }
// var val = "";
var display1 = document.getElementById('display');
var buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
	
	item.addEventListener('click', (e) => {
		console.log("id",item.id);
		if(e.target.value == '='){
			document.getElementById('previous').value = display1.value;
			val = eval(display1.value);
			display1.value = val;
			
		}
		else if(e.target.value == 'C'){
			val = " ";
			document.getElementById('previous').value = " ";
			display1.value = val;
		}
		
		else{
		val = e.target.value;
		
		display1.value += val;
		}
	}
)}
); 
function myFunction1() {
    var click = document.getElementById("drop1");
    if(click.style.display ==="none") {
       click.style.display ="block";
    } else {
       click.style.display ="none";
    } 
 }
 function myFunction2() {
    var click = document.getElementById("drop2");
    if(click.style.display ==="none") {
       click.style.display ="block";
    } else {
       click.style.display ="none";
    } 
 }

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

function sin(){
	display1.value = Math.sin(display1.value);
}
function cos(){
	display1.value = Math.cos(display1.value);
}
function tan(){
	display1.value = Math.tan(display1.value);
}
function fact(){
	if (display1.value < 0) {
		display1.value = "Error!";
	}
	
	// if number is 0
	else if (display1.value === 0) {
		display1.value = "1";
	}
	
	// if number is positive
	else {
		let fact = 1;
		for (i = 1; i <= display1.value; i++) {
			fact *= i;
		}
		display1.value = fact;
	}
}
function plusminus(){
		display1.value = -(display1.value)
}
function square(){
	display1.value = display1.value ** 2;
}
function cube(){
	display1.value = display1.value ** 3;
}
function tenpowerx(){
	display1.value = 10**display1.value;
}
function twopowerx(){
	display1.value = 2**display1.value;
}
function backspace(){
	display1.value = display1.value.substr(0, display1.value.length - 1);
}
function ln(){
	display1.value = Math.log(display1.value);
}
function log(){
	display1.value = Math.log10(display1.value);
}
function sqroot(){
	display1.value = Math.sqrt(display1.value);
}
function cbroot(){
	display1.value = Math.cbrt(display1.value);
}
function onebyx(){
	display1.value = 1/display1.value;
}
function positive(){
	if(display1.value<0){
		display1.value = -(display1.value);
	}
	else{
		display1.value;
	}
}
function floor(){
	display1.value = Math.floor(display1.value);
}
function ceil(){
	display1.value = Math.ceil(display1.value);
}