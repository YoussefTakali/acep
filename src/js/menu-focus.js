var items = document.getElementsByClassName("menu-items");
var sub = document.getElementsByClassName("sublist")[0];
var header = document.getElementsByClassName("content-header")[0];
var cur = 0;
var bef = 1;

document.addEventListener('click', function(we){
	for(var i=0; i<items.length; i++){
		/*Для выявления среди элементов с одинаковыми классами конкретно того, по которому произошёл клик, нужно для каждого
		такого элемента задать уникальный атрибут*/
		
		if(we.target.getAttribute("href")==items[i].getAttribute("href")){ 
			if(i!=0){
				sub.style.borderRadius = "7px";
			}

			console.log("Выбрано: " + items[i].innerHTML);	
			items[i].style.backgroundColor = "#031652";
			items[i].style.color = "#f6f6f4";
			cur = i;
			if(prev!=cur){
				console.log("prev= " + prev);
				items[bef].style.backgroundColor = "transparent";
				items[bef].style.color = "#2c2c2c";
				bef = cur;
			}	
		}
	}
})

items[0].addEventListener('click', function(){
	
	if(window.getComputedStyle(sub).display == "none"){
		sub.style.display = "flex";
		sub.style.borderTopLeftRadius = "0px";
	}

	else if(window.getComputedStyle(sub).display == "flex"){
		sub.style.display = "none";
		console.log(typeof(document.documentElement.clientWidth));
	}
})

