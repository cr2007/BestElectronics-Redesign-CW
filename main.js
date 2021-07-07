/*accordion*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activeb");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 

// Product Card Functionality in 'products.html'



var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide");


btn[0].onclick = function () {
  slide.style.transform = "translateX(0px)";
  //For Loop to remove the 'active' class from the respective 'btn' Class
  for (i = 0; i < 14; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
}
btn[1].onclick = function () {
  slide.style.transform = "translateX(-320px)";
  //For Loop to remove the 'active' class from the respective 'btn' Class
  for (i = 0; i < 14; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
}
btn[2].onclick = function () {
  slide.style.transform = "translateX(-640px)";
  //For Loop to remove the 'active' class from the respective 'btn' Class
  for (i = 0; i < 14; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
}
btn[3].onclick = function () {
  slide.style.transform = "translateX(-960px)";
  //For Loop to remove the 'active' class from the respective 'btn' Class
  for (i = 0; i < 14; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
}
btn[4].onclick = function () {
  slide.style.transform = "translateX(-1280px)";
  //For Loop to remove the 'active' class from the respective 'btn' Class
  for (i = 0; i < 14; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
}
btn[5].onclick = function () {
  slide.style.transform = "translateX(-1600px)";
  //For Loop to remove the 'active' class from the respective 'btn' Class
  for (i = 0; i < 14; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
}
btn[6].onclick = function () {
  slide.style.transform = "translateX(-1920px)";
  //For Loop to remove the 'active' class from the respective 'btn' Class
  for (i = 0; i < 14; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
}
btn[7].onclick = function () {
  slide.style.transform = "translateX(-2240px)";
  //For Loop to remove the 'active' class from the respective 'btn' Class
  for (i = 0; i < 14; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
}
btn[8].onclick = function () {
  slide.style.transform = "translateX(-2560px)";
  //For Loop to remove the 'active' class from the respective 'btn' Class
  for (i = 0; i < 14; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
}
btn[9].onclick = function () {
  slide.style.transform = "translateX(-2880px)";
  //For Loop to remove the 'active' class from the respective 'btn' Class
  for (i = 0; i < 14; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
}
btn[10].onclick = function () {
  slide.style.transform = "translateX(-3200px)";
  //For Loop to remove the 'active' class from the respective 'btn' Class
  for (i = 0; i < 14; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
}
btn[11].onclick = function () {
  slide.style.transform = "translateX(-3520px)";
  //For Loop to remove the 'active' class from the respective 'btn' Class
  for (i = 0; i < 14; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
}
btn[12].onclick = function () {
  slide.style.transform = "translateX(-3840px)";
  //For Loop to remove the 'active' class from the respective 'btn' Class
  for (i = 0; i < 14; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
}
btn[13].onclick = function () {
  slide.style.transform = "translateX(-4160px)";
  //For Loop to remove the 'active' class from the respective 'btn' Class
  for (i = 0; i < 14; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
}

/* --------------------------------------------------------------- */