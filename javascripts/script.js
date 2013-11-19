var c,g,sprite,frame,closeBt,content;
var man = {
  count: 0,
  x: 10,
  y: 10
};

var init = function() {
  fra = document.querySelector('#frame');
  clo = document.querySelector('#closeBt');
  cont = document.querySelector('#content');
  c = document.querySelector('#c');
  g = c.getContext('2d');
  sprite = document.querySelector('#sprite');
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  loop();
};

window.onload = function(e) {
    init();    
};

var timer = 0;
var delay = 15;


var draw = function() {
  g.clearRect(0, 0, c.width, c.height);
  g.drawImage(sprite, 400 * man.count, 0, 400, 400, man.x, man.y, 400, 400);
  timer++;
  if(delay<0){
    delay=1;
  }
  if(timer%delay ==0){
    man.count+=1;
  }
  if(man.count > 24) {
    man.count = 0;
  }
};

window.onmousemove = function(e) {
  man.x = e.pageX-200;
  man.y = e.pageY-200;
};

var loop = function() {
  draw();
  requestAnimationFrame(loop);
};

window.onkeydown = function(e) {
  var step = 2;
  switch(e.keyCode) {
    case 38: // top
      delay -= step;
      break;
    case 40: // down
      delay += step;
      break;
  }
};

window.onmousedown = function(e) {
  delay = 0;
/*  if(fra.style.display = "block"){
    fra.style.display = "block";
    cont.style.display = "block";
    cont.innerHTML = '<iframe src="http://keepfiringsoul.egloos.com/2774883" id="case1"></iframe>';
  }*/
   switch(man.count) {
    case 0: 
      /*cont.innerHTML = '<iframe src="" id=""></iframe>';*/
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 1: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 2: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 3: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;            
    case 4: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 5: 
      /*cont.innerHTML = '<iframe src="" id=""></iframe>';*/
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 6: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 7: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 8: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;            
    case 9: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;      
    case 10: 
      /*cont.innerHTML = '<iframe src="" id=""></iframe>';*/
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 11: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 12: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 13: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;            
    case 14: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 15: 
      /*cont.innerHTML = '<iframe src="" id=""></iframe>';*/
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 16: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 17: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 18: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;            
    case 19: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 20: 
      /*cont.innerHTML = '<iframe src="" id=""></iframe>';*/
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 21: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 22: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 23: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;            
  }
};