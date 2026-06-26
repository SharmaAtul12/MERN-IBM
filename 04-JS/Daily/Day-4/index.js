//! Topic 1 : DOM (Document Object Model) Manipulation

// function changeText() {
//   // Selecting the first h1 element in the document
//   let ele = document.getElementsByTagName("h1");
//   // Changing the text content of the selected h1 element
//   ele[0].innerText = "Hello India";

//   // Selecting the paragraph element with the id "para"
//   let para = document.getElementById("para");
//   // Changing the text content of the selected paragraph element
//   para.innerText = "This is a new paragraph text.";

//   // Selecting the Elements with the class name "box"
//   let boxes = document.getElementsByClassName("box");
//   boxes[0].innerText = "I am the Box 1";
//   boxes[1].innerText = "I am the Box 2"
//   boxes[2].innerText = "I am the Box 3"
//   boxes[2].style.marginBottom = "10px";

// }

//Q1.  make a card , on clicking on it the bg image add

function addImage() {
  let card = document.getElementById("card");
  card.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/270/900/47/lake-mountain-sky-reflection-desktop-wallpapers-high-resolution-1920%C3%971080-wallpaper-preview.jpg')"
}

// Q2. Change the direction of Boxes 

function changeDirection() {
  let ele = document.getElementsByClassName("container")
  if(ele[0].style.flexDirection === "row") {
    ele[0].style.flexDirection = "column"
  } else {
    ele[0].style.flexDirection = "row"
  }
}

//Q3. 

// First Logic : Bydefault now returns the time in 24 hours format, we need to convert it into 12 hours format.

/*
function startClock() {
  let ele = document.getElementById("clock");
  let now = new Date();

  let h = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let time = h + ":" + m + ":" + s;

  setTimeout(startClock, 1000);

  ele.innerText = time;
}

startClock();
*/

// Second Logic : 

function startClock() {
  let ele = document.getElementById("clock");
  let now = new Date();

  let hour = now.getHours() % 12;
  if(hour === 0) {
    hour = 12;
  }

  let h = hour;
  let m = now.getMinutes();
  let s = now.getSeconds();
  let time = h + ":" + m + ":" + s;


  if(ele.innerText !== "STOP") {
    setTimeout(startClock, 1000);
  }

  ele.innerText = time;
}



function stopClock() {
  let ele = document.getElementById("clock");
  ele.innerText = "STOP"
  
}