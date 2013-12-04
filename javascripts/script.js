var scene;
var item_Num = 33; 
var pf = [];
var rd = [];
var rd_x = [];
var rd_y = [];
var rd_z = [];
	
var block = {
	width: 100,
	height: 150,
};

var init = function() {
    scene = document.querySelector('#scene');
	add_pf();
	add_blur();
};
/*
var rotDiv = function() {
	for(var i=0;i<item_Num; i++){
		pf[i].onmouseover = function(){ 
			pf[i].style['-webkit-transform'] = 'translate3d('+rd_x[i]+'px,'+rd_y[i]+'px,'+rd_z[i]+'px) rotateY(360deg)';
		}
	}
}*/

window.onload = function() {
    init();

};

window.onmousemove = function(e) {
    var dx = window.innerWidth / 2 - e.pageX;
    var dy = window.innerHeight / 2 - e.pageY;
    if(scene) {
        scene.style['-webkit-transform'] ='rotate3d(' + dx+','+ dy + ',0,20deg)';
    }
};

var rand = function(min, max) {
	return min + Math.random() * (max - min);	
};

var randi = function(min, max) {
	return Math.floor(rand(min, max));
};

var add_pf = function(){  
    for(var i=0;i<item_Num; i++){
		var randomX = randi(50,1000);
		var randomY = randi(50,400);
		var randomZ = randi(0,200);
		var d = document.createElement('div');
		d.id='b_'+i;
		d.className = 'block';
	    d.style['width'] = block.width+'px';
	    d.style['height'] = block.height+'px';
	    d.style['background-color']='black';
	    d.style['background-image']='url(./images/'+i+'.png)';     	
		d.style['-webkit-transform'] = 'translate3d('+randomX+'px,'+randomY+'px,'+randomZ+'px) rotateY(0deg)';		
    	scene.appendChild(d);
		pf.push(d);
		rd_x.push(randomX);
		rd_y.push(randomY);
		rd_z.push(randomZ);
    	d.onmouseover = function(){ 
			d.style['-webkit-transform'] = 'translate3d('+randomX+'px,'+randomY+'px,'+randomZ+'px) rotateY(360deg)';
    		};
		d.onmouseout = function(){ 
			d.style['-webkit-transform'] = 'translate3d('+randomX+'px,'+randomY+'px,'+randomZ+'px) rotateY(0deg)';
    		};
    	}
	};




var add_blur = function(){
	for(var i=0;i<item_Num; i++){
		if(rd_z[i]>0 && rd_z[i]<50){
			pf[i].style['-webkit-filter'] = 'blur(3px)';
		}
		if(rd_z[i]>50 && rd_z[i]<100){
			pf[i].style['-webkit-filter'] = 'blur(1px)';
		}
		if(rd_z[i]>100 && rd_z[i]<150){
			pf[i].style['-webkit-filter'] = 'blur(0.5px)';
		}
	}
}





/* 이전에 작업했던거
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
  if(fra.style.display = "block"){
    fra.style.display = "block";
    cont.style.display = "block";
    cont.innerHTML = '<iframe src="http://keepfiringsoul.egloos.com/2774883" id="case1"></iframe>';
  }
   switch(man.count) {
    case 0: 
      cont.innerHTML = '<iframe src="" id=""></iframe>';
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
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 6: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 7: 
      window.open("http://keepfiringsoul.egloos.com/2794751", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 8: 
      
      window.open("http://keepfiringsoul.egloos.com/2775164", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      
      cont.innerHTML = '<img src="images/symbol.jpg" id="case1"></img>';
      break;            
    case 9: 
      window.open("http://youtu.be/XQeoontIR_s", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;      
    case 10: 
      window.open("http://keepfiringsoul.egloos.com/2775047", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 11: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 12: 
      window.open("http://keepfiringsoul.egloos.com/2775144", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 13: 
      window.open("http://keepfiringsoul.egloos.com/2775173", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;            
    case 14: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 15: 
      window.open("http://youtu.be/XQeoontIR_s", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 16: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 17: 
      window.open("http://youtu.be/XmXhbno4j9E", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 18: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;            
    case 19: 
      window.open("http://keepfiringsoul.egloos.com/2794751", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 20: 
      window.open("http://youtu.be/XmXhbno4j9E", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 21: 
      window.open("http://keepfiringsoul.egloos.com/2775144", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 22: 
      window.open("http://youtu.be/_FTBZ4ouvLk", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;
    case 23: 
      window.open("http://keepfiringsoul.egloos.com/2774883", "width=800, height=700, toolbar=no, menubar=no, resizable=yes" );
      break;            
  }
};*/

