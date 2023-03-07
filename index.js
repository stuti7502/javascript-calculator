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
const display = document.getElementById('display');
const buttons = document.querySelectorAll("button");
console.log(buttons);
buttons.forEach((item) => {
	item.onclick = (e) => {
		val = e.target.value;
		display.value += val;
	}
}
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
//  function change()
// {
//     var ch = document.querySelector('#second');
// 	var ch1 = document.querySelector('#secbtn');
// 	var ch2 = document.querySelector('#secbtn2');
	
//     if (ch.value=="1st" && ch1.value=="x³" && ch2.value=="∛x"){
// 		ch.value = "2nd";
// 		ch1.value = "x²";
// 		ch2.value="√x";
// 	}
//     else {
// 		ch.value = "1st";
// 		ch1.value = "x³";
// 		ch2.value = "∛x";
// 	 }
	
// }
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

