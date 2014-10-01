"use strict";

var initialize = function() {

	var greeting_div = document.getElementById("greeting");
	greeting_div.innerHTML = "Hello Planet earth!";

	var initItems = function () {
		var list_items = document.querySelectorAll("li");

    for (var i = 0; i < list_items.length; i++) {
      list_items[i].style.backgroundColor = "yellow";
      list_items[i].addEventListener("click", function() {
        console.log("Clicked! a list item:" + this.innerHTML);
        this.classList.add("selected");
        switch(this.innerHTML){
          case "Honey":
            document.querySelector("img").setAttribute("src","./images/honey.jpeg")
            break;
          case "Beer":
            document.querySelector("img").setAttribute("src","./images/beer.jpeg")
            break;
          case "Wine":
            document.querySelector("img").setAttribute("src","./images/wine.jpeg")
            break;
          case "Water":
            document.querySelector("img").setAttribute("src","./images/water.jpeg")
            break;
          case "Milk":
            document.querySelector("img").setAttribute("src","./images/milk.jpeg")
            break;        
          default:
            console.log("what?");  
        };
      });
    };
  };

  initItems();

  // document.querySelector("img").onclick = function() { console.log("Clicked!");};
  document.querySelector("img").addEventListener("click", function() {
    console.log("Clicked! via event listener");
  })

  document.querySelector("#reset").addEventListener("click", function() {
    var list_items = document.querySelectorAll("li");
   for (var i = 0; i < list_items.length; i++) {
      list_items[i].className = "";
      document.querySelector("img").setAttribute("src","./images/panic.jpeg")
   }
  })

  console.log("init done");
};

window.onload=initialize;


