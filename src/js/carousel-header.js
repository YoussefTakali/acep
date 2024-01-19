var circles = document.getElementsByClassName("rounds");
var slItems = document.getElementsByClassName("slider-items");
var current = 0;
var previous = 1;

document.addEventListener('click', function(w){
	for(var i=0; i<circles.length; i++){
		if(w.target.getAttribute("id") == circles[i].getAttribute("id")){
			//console.log("Circle: " + i);
			current = i;
			circles[i].style.background = "#031652"; //Синий
			slItems[i].style.opacity = "1";
			if(current!=previous){
				
				circles[previous].style.background = "#f73131";
				slItems[previous].style.opacity = "0";
				previous = current;
			}
		}
	}
})