window.addEventListener('DOMContentLoaded', () => {
  console.log(`You are connecting to ${window.nuiHandoverData.serverAddress}`);

 
  document.querySelector('#namePlaceholder > span').innerText = window.nuiHandoverData.name;
});

function btn1(){
    var x = document.getElementById("rules");
    var s = document.getElementById("main");
    var a = document.getElementById("kbds");
    var b = document.getElementById("sup");
    var c = document.getElementById("crd");
    if (x.style.display === "none") {
      x.style.display = "block";
      s.style.display = "none";
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
    } 
}

function btn2(){
  var x = document.getElementById("rules");
  var s = document.getElementById("main");
  var a = document.getElementById("kbds");
  var b = document.getElementById("sup");
  var c = document.getElementById("crd");
  if (x.style.display === "block") {
    x.style.display = "none";
    s.style.display = "block";
  } 
  if (a.style.display === "block") {
    a.style.display = "none";
    s.style.display = "block";
  } 
  if (b.style.display === "block") {
    b.style.display = "none";
    s.style.display = "block";
  } 
  if (c.style.display === "block") {
    c.style.display = "none";
    s.style.display = "block";
  } 
}

function btn3(){
  var x = document.getElementById("rules");
  var s = document.getElementById("main");
  var a = document.getElementById("kbds");
  var b = document.getElementById("sup");
  var c = document.getElementById("crd");
  if (a.style.display === "none") {
    a.style.display = "block";
    s.style.display = "none";
    x.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
  } 
}

function btn4(){
  var x = document.getElementById("rules");
  var s = document.getElementById("main");
  var a = document.getElementById("kbds");
  var b = document.getElementById("sup");
  var c = document.getElementById("crd");
  if (b.style.display === "none") {
    b.style.display = "block";
    s.style.display = "none";
    x.style.display = "none";
    a.style.display = "none";
    c.style.display = "none";
  } 
}

function btn5(){
  var x = document.getElementById("rules");
  var s = document.getElementById("main");
  var a = document.getElementById("kbds");
  var b = document.getElementById("sup");
  var c = document.getElementById("crd");
  if (c.style.display === "none") {
    c.style.display = "block";
    s.style.display = "none";
    x.style.display = "none";
    b.style.display = "none";
    a.style.display = "none";
  } 
}











