var text = document.getElementsByClassName("main-text");
var bLeft = document.getElementById("btn-left");
var aLeft = document.getElementById("arrow-left");
var bRight = document.getElementById("btn-right");
var aRight = document.getElementById("arrow-right");

var counter = 0;
var prev = 0;
var cur = 0;

function clickRight(){
	bLeft.setAttribute("onclick", "clickLeft()");
	bRight.removeAttribute("onclick");

	prev = counter;
	text[prev].style.transform = "scale(0)";
	
	bLeft.style.background = "#f73131";
	aLeft.style.filter = "invert(100%)";

	counter++;
	cur = counter;

	text[prev].addEventListener('transitionend', function f1(){ 
		console.log("counter= " + counter);
		text[cur].style.transform = "scale(1)";
		text[prev].removeAttribute("transitionend", f1);
	})

	text[cur].addEventListener('transitionend', function f2(){ /*Когда текущий элемент появится, кнопка разблокируется*/
		bRight.setAttribute("onclick", "clickRight()");
		if(counter == 2){
			console.log("True!");
			bRight.removeAttribute("onclick");
			bRight.style.background = "#fff";
			aRight.style.filter = "invert(0%)";
		}
		text[cur].removeAttribute("transitionend", f2);
	})
}


function clickLeft(){
	bRight.setAttribute("onclick", "clickRight()");
	bLeft.removeAttribute("onclick");

	prev = counter;
	text[prev].style.transform = "scale(0)";
	

	bRight.style.background = "#f73131";
	aRight.style.filter = "invert(100%)";

	counter--;
	cur = counter;

	text[prev].addEventListener('transitionend', function f1(){ 
		console.log("counter= " + counter);
		text[cur].style.transform = "scale(1)";
		text[prev].removeAttribute("transitionend", f1);
	})

	text[cur].addEventListener('transitionend', function f2(){ /*Когда текущий элемент появится, кнопка разблокируется*/
		bLeft.setAttribute("onclick", "clickLeft()");
		if(counter == 0){
			console.log("True!");
			bLeft.removeAttribute("onclick");
			bLeft.style.background = "#fff";
			aLeft.style.filter = "invert(0%)";
		}
		text[cur].removeAttribute("transitionend", f2);
	})
}