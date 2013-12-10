var scene, screen, closeBt, t_box, mouseOption;
var	item_Num = 27;
var	pf = [];
var	rd = [];
var	rd_x = [];
var	rd_y = [];
var	rd_z = [];
	
var block = {
	width: 100,
	height: 150,
};

var rand = function(min, max) {
	return min + Math.random() * (max - min);	
	};

var randi = function(min, max) {
	return Math.floor(rand(min, max));
};


var init = function() {
    scene = document.querySelector('#scene');
	screen = document.querySelector('#screen');
	closeBt = document.querySelector('#closeBt');
	dp_box = document.querySelector('#dp_box');
	t_box = document.querySelector('#t_box');
		
	closeBt.onclick = function(){
			screen.style['display'] = 'none';
			closeBt.style['display'] = 'none';
			dp_box.style['display'] = 'none';
			t_box.style['display'] = 'none';
			screen.style['opacity'] = '0';
			closeBt.style['opacity'] = '0';
			dp_box.style['opacity'] = '0';
			t_box.style['opacity'] = '0';
			dp_box.removeChild(dp_box.firstChild);
		};
	
	var contentsFill = function(d) {
		switch(d){
			case pf[0] :	
				dp_box.innerHTML = "<img src=\"./images/0.png\">";
				t_box.innerHTML = "KMUVCD <br> Typograhpy3 <br> Archetype Project2 <hr><br>ILLUSION-TOUCH <br> A1 <br> Inkjet print, Silkscreen with thermochromic color <br><br> Exhibited in Seoul Subway station";
				break;
			case pf[1] :	
				dp_box.innerHTML = "<img src=\"./images/1.png\">";
				t_box.innerHTML = "KMUVCD <br> Typograhpy3 <br> Archetype Project2 <hr><br> LABOR ROSE <br> A1 <br> Inkjet print <br><br> Exhibited in Seoul Subway station";
				break;
			case pf[2] :	
				dp_box.innerHTML = "<img src=\"./images/2.png\">";
				t_box.innerHTML = "KMUVCD <br> Graphic Design2 <br> Designer Research <hr><br> SGIURA KOHEI <br> A1 <br> Inkjet print";
				break;
			case pf[3] :	
				dp_box.innerHTML = "<img src=\"./images/3.png\">";
				t_box.innerHTML = "KMUVCD <br> Graphic Design4 <br> Rhetorical Space <hr><br> LET THERE BE LIGHT <br> Window-Masking <br><br> Installation using sun light from 3pm to 6pm";
				break;
			case pf[4] :	
				dp_box.innerHTML = "<img src=\"./images/4.png\">";
				t_box.innerHTML = "KMUVCD <br> Typograhpy3 <br> Memorial and ancestor <hr><br> YI_SANG <br> A1 <br> Inkjet print <br><br> Exhibited in CalArts Thursday gallery party";
				break;
			case pf[5] :	
				dp_box.innerHTML = "<img src=\"./images/5.png\">";
				t_box.innerHTML = "KMUVCD <br> Typograhpy3 <br> Archetype Project <hr><br> ARCHETYPE DOOR <br> 180*255 <br> hand-binding(aryl, screw bolt) <br><br> Documentation of Archetype project process.";
				break;
			case pf[6] :	
				dp_box.innerHTML = "<img src=\"./images/6.png\">";
				t_box.innerHTML = "2011 <br> Flee Market Project <br> Stationary design <hr><br> LITTLE PRINCE LETTER <br> CD case, Label sticker, OHP film <br> Inkjet print";
				break;
			case pf[7] :
				dp_box.innerHTML = 
				"<video width=\"720\" height=\"404\" autoplay controls><source src=\"./videos/v_4.mp4\" type=\"video/mp4\"></video>";
				t_box.innerHTML = "KMUVCD <br> Motion Graphics1 <br> Experimental Video <hr><br> WATER <br> 5'55\" 1280*720 <br> SANYO XACTI VPC-CA9 waterproof camera test";
				break;
			case pf[8] :	
				dp_box.innerHTML = "<img src=\"./images/8.png\">";
				t_box.innerHTML = "KMUVCD <br> Graphic Design4 <br> Tri, Sqr, Cir_Tasting and forming <hr><br> 4-SAINT-100-MINUITES-DEBATE <br> A1 <br> Inkjet print";
				break;
			case pf[9] :	
				dp_box.innerHTML = "<img src=\"./images/9.png\">";
				t_box.innerHTML = "KMUVCD <br> Graphic Design2 <br> Symbolization <hr><br> CONSTELLATION ARTWORK <br> A0 <br> Inkjet print";
				break;
			case pf[10] :	
				dp_box.innerHTML = "<img src=\"./images/10.png\">";
				t_box.innerHTML = "KMUVCD <br> Design and Text <br> 3 books infographic <hr><br> SYSTEM ATTRIBUTION ANALYSIS BY 3 BOOKS <br> A1 <br> Inkjet print";
				break;
			case pf[11] :	
				dp_box.innerHTML = "<img src=\"./images/11.png\">";
				t_box.innerHTML = "KMUVCD <br> Graphic Design2 <br> Designer Research <hr><br> WHO DRAWS BETTER? <br> A1 <br> Inkjet print";
				break;
			case pf[12] :	
				dp_box.innerHTML = "<img src=\"./images/12.png\">";
				t_box.innerHTML = "KMUVCD <br> Typograhpy3 <br> Archetype Project <hr><br> ARCHETYPE DOOR <br> 180*255 <br> hand-binding(aryl, screw bolt) <br><br> Documentation of Archetype project process ";
				break;
			case pf[13] :
				dp_box.innerHTML = 
				"<video width=\"720\" height=\"480\" autoplay controls><source src=\"./videos/v_3.mp4\" type=\"video/mp4\"></video>";
				t_box.innerHTML = "KMUVCD <br> Graduation Work <br> Installation video <hr><br> MY STORY <br> 13'49\" 1280*720 ";
				break;
			case pf[14] :
				dp_box.innerHTML = 
				"<video width=\"720\" height=\"404\" autoplay controls><source src=\"./videos/v_2.mp4\" type=\"video/mp4\"></video>";
				t_box.innerHTML = "KMUVCD <br> Motion Graphics1 <br> Self-portrait <hr><br> CLOCK <br> 6'14\" 850*480 ";
				break;
			case pf[15] :	
				dp_box.innerHTML = "<img src=\"./images/15.png\">";
				t_box.innerHTML = "2011 <br> Flee Market Project <br> Stationary design <hr><br> DIARY, MEMO <br> Used paper <br> Inkjet print, hand-binding";
				break;
			case pf[16] :	
				dp_box.innerHTML = "<img src=\"./images/16.png\">";
				t_box.innerHTML = "2011 <br> Vacation Project <br> Gasolin studio poster <hr><br> GASOLIN POSTER <br> A0 <br> Inkjet print";
				break;
			case pf[17] :	
				dp_box.innerHTML = "<img src=\"./images/17.png\">";
				t_box.innerHTML = "2011 <br> Vacation Project <br> Graffiti <hr><br> DESIGN YOUR SOUL <br> Wall artwork";
				break;
			case pf[18] :	
				dp_box.innerHTML = "<img src=\"./images/18.png\">";
				t_box.innerHTML = "2013 <br> Laramie Project <br> Poster design <hr><br> LARAMIE PROJECT <br> A3 <br> Inkjet print";
				break;
			case pf[19] :	
				dp_box.innerHTML = "<img src=\"./images/19.png\">";
				t_box.innerHTML = "KMUVCD <br> Graphic Design3 <br> Poster on Poster <hr><br> POSTER ON POSTER <br> A1 <br> Inkjet print, Image-projection, Live-projection on poster <br><br> Infinite circular mechanism";
				break;
			case pf[20] :
				dp_box.innerHTML = 
				"<video width=\"720\" height=\"480\" autoplay controls><source src=\"./videos/v_1.mp4\" type=\"video/mp4\"></video>";
				t_box.innerHTML = "KMUVCD <br> Motion Graphics2 <br> Self-portrait <hr><br> DEAD TREE, LIVE TREE <br> 6'46\" 720*480 ";
				break;
			case pf[21] :	
				dp_box.innerHTML = "<img src=\"./images/21.png\">";
				t_box.innerHTML = "KMUVCD <br> Graphic Design2 <br> Symbolization <hr><br> PUSS IN BOOTS <br> A0 <br> Inkjet print";
				break;
			case pf[22] :	
				dp_box.innerHTML = "<img src=\"./images/22.png\">";
				t_box.innerHTML = "2012 <br> Gathering Project <br> Tain menu poster design <hr><br> TAIN MENU <br> 525*680 <br> Inkjet print";
				break;
			case pf[23] :	
				dp_box.innerHTML = "<img src=\"./images/23.png\">";
				t_box.innerHTML = "KMUVCD <br> Graphic Design4 <br> Tri, Sqr, Cir_Tasting and forming <hr><br> 4-SAINT-100-MINUITES-DEBATE <br> A1 <br> Inkjet print";
				break;
			case pf[24] :	
				dp_box.innerHTML = "<img src=\"./images/24.png\">";
				t_box.innerHTML = "2011 <br> Vacation Project <br> Christmas party poster <hr><br> CHRISTMAS IN GASOLIN <br> A3 <br> Inkjet print";
				break;	
			case pf[25] :	
				dp_box.innerHTML = "<img src=\"./images/25.png\">";
				t_box.innerHTML = "2011 <br> Vacation Project <br> Proletariat Design Workshop <hr><br> FLYER FOR MUSICIAN <br> A4 <br> Inkjet print";
				break;
			case pf[26] :	
				dp_box.innerHTML = "<img src=\"./images/26.png\">";
				t_box.innerHTML = "2011 <br> Flee Market Project <br> Stationary design <hr><br> HAND BOOK <br> Folded A4 <br> Inkjet print, hand-binding";
				break;	
			}
		screen.style['display'] = 'block';
	};
		
	//add_item
	for(var i=0;i<item_Num; i++){
		var randomX = randi(55,1000);
		var randomY = randi(50,400);
		var randomZ = randi(0,200);
		
		var d = document.createElement('div');
		d.id='b_'+i;
		d.className = 'block';
	    d.style['width'] = block.width+'px';
	    d.style['height'] = block.height+'px';
	    d.style['background-image']='url(./images/'+i+'.png)';     	
		d.style['-webkit-transform'] = 'translate3d('+randomX+'px,'+randomY+'px,'+randomZ+'px) rotateY(0deg)';		
    	scene.appendChild(d);
		
		pf.push(d);
		rd_x.push(randomX);
		rd_y.push(randomY);
		rd_z.push(randomZ);
		
		d.onclick= function() {
			contentsFill(this);
			screen.style['display'] = 'block';
			closeBt.style['display'] = 'block';
			dp_box.style['display'] = 'block';
			t_box.style['display'] = 'block';
			setTimeout(function(){
				screen.style['opacity'] = '0.8';
				closeBt.style['opacity'] = '1';
				dp_box.style['opacity'] = '1';
				t_box.style['opacity'] = '1';
			},50);		
			};
					
    	}
		
		//add_blur
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
		}//add_blur
		
		/*
		for(var i=0;i<item_Num; i++){
			pf[i].onmouseover = function(){ 
				pf[i].style['-webkit-transform'] = 'translate3d('+rd_x[i]+'px,'+rd_y[i]+'px,'+rd_z[i]+'px) rotateY(360deg)';
				};
			pf[i].onmouseout = function(){ 
				pf[i].style['-webkit-transform'] = 'translate3d('+rd_x[i]+'px,'+rd_y[i]+'px,'+rd_z[i]+'px) rotateY(0deg)';
				};
		}*/
		
		pf[0].onmouseover = function(){ 
			pf[0].style['-webkit-transform'] = 'translate3d('+rd_x[0]+'px,'+rd_y[0]+'px,'+rd_z[0]+'px) rotateY(360deg)';
			};
		pf[0].onmouseout = function(){ 
			pf[0].style['-webkit-transform'] = 'translate3d('+rd_x[0]+'px,'+rd_y[0]+'px,'+rd_z[0]+'px) rotateY(0deg)';
			};
		pf[1].onmouseover = function(){ 
			pf[1].style['-webkit-transform'] = 'translate3d('+rd_x[1]+'px,'+rd_y[1]+'px,'+rd_z[1]+'px) rotateY(360deg)';
			};
		pf[1].onmouseout = function(){ 
			pf[1].style['-webkit-transform'] = 'translate3d('+rd_x[1]+'px,'+rd_y[1]+'px,'+rd_z[1]+'px) rotateY(0deg)';
			};	
		pf[2].onmouseover = function(){ 
			pf[2].style['-webkit-transform'] = 'translate3d('+rd_x[2]+'px,'+rd_y[2]+'px,'+rd_z[2]+'px) rotateY(360deg)';
			};
		pf[2].onmouseout = function(){ 
			pf[2].style['-webkit-transform'] = 'translate3d('+rd_x[2]+'px,'+rd_y[2]+'px,'+rd_z[2]+'px) rotateY(0deg)';
			};
		
	
};

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





