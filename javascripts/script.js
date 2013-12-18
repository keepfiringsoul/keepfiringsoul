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
				"<iframe width=\"720\" height=\"404\" src=\"http://www.youtube.com/embed/XQeoontIR_s\" frameborder=\"0\" allowfullscreen></iframe>";
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
				"<iframe width=\"720\" height=\"480\" src=\"http://www.youtube.com/embed/XmXhbno4j9E\" frameborder=\"0\" allowfullscreen></iframe>";
				t_box.innerHTML = "KMUVCD <br> Motion Graphics1 <br> Self-portrait <hr><br> CLOCK <br> 6'14\" 850*480 ";
				break;
			case pf[14] :
				dp_box.innerHTML = 
				"<iframe width=\"720\" height=\"404\" src=\"http://www.youtube.com/embed/QbceB70CCZg\" frameborder=\"0\" allowfullscreen></iframe>";
				t_box.innerHTML = "KMUVCD <br> Graduation Work <br> Installation video <hr><br> MY STORY <br> 13'49\" 1280*720 ";
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
				"<iframe width=\"720\" height=\"480\" src=\"http://www.youtube.com/embed/_FTBZ4ouvLk\" frameborder=\"0\" allowfullscreen></iframe>";
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
		d.rd_x = randomX;
		d.rd_y = randomY;
		d.rd_z = randomZ;
		if(d.rd_z>0 && d.rd_z<50){
			d.style['-webkit-filter'] = 'blur(3px)';
		}
		if(d.rd_z>50 && d.rd_z<100){
			d.style['-webkit-filter'] = 'blur(1px)';
		}
		if(d.rd_z>100 && d.rd_z<150){
			d.style['-webkit-filter'] = 'blur(0.5px)';
		}
		pf.push(d);
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
		
		d.onmouseover = function(e){ 
			//var s = 'translate3d('+rd_x[i]+'px,'+rd_y[i]+'px,'+rd_z[i]+'px) rotateY(360deg)';
			var s = 'translate3d('+this.rd_x+'px,'+ this.rd_y+'px,'+ this.rd_z +'px) rotateY(360deg)';
			this.style['-webkit-transform'] = s;
			console.log(this.id);
			console.log(s);
		};
		d.onmouseout = function(e){ 
			this.style['-webkit-transform'] = 'translate3d('+this.rd_x+'px,'+ this.rd_y+'px,'+ this.rd_z +'px) rotateY(720deg)';
		};	
				
    }
		/*
		for(var i=0;i<item_Num; i++){
			
			pf[i].onmouseover = function(e){ 
				e.target.style['-webkit-transform'] = 'translate3d('+rd_x[i]+'px,'+rd_y[i]+'px,'+rd_z[i]+'px) rotateY(360deg)';
				};
			pf[i].onmouseout = function(e){ 
				e.target.style['-webkit-transform'] = 'translate3d('+rd_x[i]+'px,'+rd_y[i]+'px,'+rd_z[i]+'px) rotateY(0deg)';
				};
		}
		*/
		//미친짓 시작
		var check = false;
		if(check) {
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
		pf[3].onmouseover = function(){ 
			pf[3].style['-webkit-transform'] = 'translate3d('+rd_x[3]+'px,'+rd_y[3]+'px,'+rd_z[3]+'px) rotateY(360deg)';
			};
		pf[3].onmouseout = function(){ 
			pf[3].style['-webkit-transform'] = 'translate3d('+rd_x[3]+'px,'+rd_y[3]+'px,'+rd_z[3]+'px) rotateY(0deg)';
			};
		pf[4].onmouseover = function(){ 
			pf[4].style['-webkit-transform'] = 'translate3d('+rd_x[4]+'px,'+rd_y[4]+'px,'+rd_z[4]+'px) rotateY(360deg)';
			};
		pf[4].onmouseout = function(){ 
			pf[4].style['-webkit-transform'] = 'translate3d('+rd_x[4]+'px,'+rd_y[4]+'px,'+rd_z[4]+'px) rotateY(0deg)';
			};
		pf[5].onmouseover = function(){ 
			pf[5].style['-webkit-transform'] = 'translate3d('+rd_x[5]+'px,'+rd_y[5]+'px,'+rd_z[5]+'px) rotateY(360deg)';
			};
		pf[5].onmouseout = function(){ 
			pf[5].style['-webkit-transform'] = 'translate3d('+rd_x[5]+'px,'+rd_y[5]+'px,'+rd_z[5]+'px) rotateY(0deg)';
			};
		pf[6].onmouseover = function(){ 
			pf[6].style['-webkit-transform'] = 'translate3d('+rd_x[6]+'px,'+rd_y[6]+'px,'+rd_z[6]+'px) rotateY(360deg)';
			};
		pf[6].onmouseout = function(){ 
			pf[6].style['-webkit-transform'] = 'translate3d('+rd_x[6]+'px,'+rd_y[6]+'px,'+rd_z[6]+'px) rotateY(0deg)';
			};
		pf[7].onmouseover = function(){ 
			pf[7].style['-webkit-transform'] = 'translate3d('+rd_x[7]+'px,'+rd_y[7]+'px,'+rd_z[7]+'px) rotateY(360deg)';
			};
		pf[7].onmouseout = function(){ 
			pf[7].style['-webkit-transform'] = 'translate3d('+rd_x[7]+'px,'+rd_y[7]+'px,'+rd_z[7]+'px) rotateY(0deg)';
			};
		pf[8].onmouseover = function(){ 
			pf[8].style['-webkit-transform'] = 'translate3d('+rd_x[8]+'px,'+rd_y[8]+'px,'+rd_z[8]+'px) rotateY(360deg)';
			};
		pf[8].onmouseout = function(){ 
			pf[8].style['-webkit-transform'] = 'translate3d('+rd_x[8]+'px,'+rd_y[8]+'px,'+rd_z[8]+'px) rotateY(0deg)';
			};
		pf[9].onmouseover = function(){ 
			pf[9].style['-webkit-transform'] = 'translate3d('+rd_x[9]+'px,'+rd_y[9]+'px,'+rd_z[9]+'px) rotateY(360deg)';
			};
		pf[9].onmouseout = function(){ 
			pf[9].style['-webkit-transform'] = 'translate3d('+rd_x[9]+'px,'+rd_y[9]+'px,'+rd_z[9]+'px) rotateY(0deg)';
			};
		pf[10].onmouseover = function(){ 
			pf[10].style['-webkit-transform'] = 'translate3d('+rd_x[10]+'px,'+rd_y[10]+'px,'+rd_z[10]+'px) rotateY(360deg)';
			};
		pf[10].onmouseout = function(){ 
			pf[10].style['-webkit-transform'] = 'translate3d('+rd_x[10]+'px,'+rd_y[10]+'px,'+rd_z[10]+'px) rotateY(0deg)';
			};
		pf[11].onmouseover = function(){ 
			pf[11].style['-webkit-transform'] = 'translate3d('+rd_x[11]+'px,'+rd_y[11]+'px,'+rd_z[11]+'px) rotateY(360deg)';
			};
		pf[11].onmouseout = function(){ 
			pf[11].style['-webkit-transform'] = 'translate3d('+rd_x[11]+'px,'+rd_y[11]+'px,'+rd_z[11]+'px) rotateY(0deg)';
			};
		pf[12].onmouseover = function(){ 
			pf[12].style['-webkit-transform'] = 'translate3d('+rd_x[12]+'px,'+rd_y[12]+'px,'+rd_z[12]+'px) rotateY(360deg)';
			};
		pf[12].onmouseout = function(){ 
			pf[12].style['-webkit-transform'] = 'translate3d('+rd_x[12]+'px,'+rd_y[12]+'px,'+rd_z[12]+'px) rotateY(0deg)';
			};
		pf[13].onmouseover = function(){ 
			pf[13].style['-webkit-transform'] = 'translate3d('+rd_x[13]+'px,'+rd_y[13]+'px,'+rd_z[13]+'px) rotateY(360deg)';
			};
		pf[13].onmouseout = function(){ 
			pf[13].style['-webkit-transform'] = 'translate3d('+rd_x[13]+'px,'+rd_y[13]+'px,'+rd_z[13]+'px) rotateY(0deg)';
			};
		pf[14].onmouseover = function(){ 
			pf[14].style['-webkit-transform'] = 'translate3d('+rd_x[14]+'px,'+rd_y[14]+'px,'+rd_z[14]+'px) rotateY(360deg)';
			};
		pf[14].onmouseout = function(){ 
			pf[14].style['-webkit-transform'] = 'translate3d('+rd_x[14]+'px,'+rd_y[14]+'px,'+rd_z[14]+'px) rotateY(0deg)';
			};
		pf[15].onmouseover = function(){ 
			pf[15].style['-webkit-transform'] = 'translate3d('+rd_x[15]+'px,'+rd_y[15]+'px,'+rd_z[15]+'px) rotateY(360deg)';
			};
		pf[15].onmouseout = function(){ 
			pf[15].style['-webkit-transform'] = 'translate3d('+rd_x[15]+'px,'+rd_y[15]+'px,'+rd_z[15]+'px) rotateY(0deg)';
			};
		pf[16].onmouseover = function(){ 
			pf[16].style['-webkit-transform'] = 'translate3d('+rd_x[16]+'px,'+rd_y[16]+'px,'+rd_z[16]+'px) rotateY(360deg)';
			};
		pf[16].onmouseout = function(){ 
			pf[16].style['-webkit-transform'] = 'translate3d('+rd_x[16]+'px,'+rd_y[16]+'px,'+rd_z[16]+'px) rotateY(0deg)';
			};
		pf[17].onmouseover = function(){ 
			pf[17].style['-webkit-transform'] = 'translate3d('+rd_x[17]+'px,'+rd_y[17]+'px,'+rd_z[17]+'px) rotateY(360deg)';
			};
		pf[17].onmouseout = function(){ 
			pf[17].style['-webkit-transform'] = 'translate3d('+rd_x[17]+'px,'+rd_y[17]+'px,'+rd_z[17]+'px) rotateY(0deg)';
			};
		pf[18].onmouseover = function(){ 
			pf[18].style['-webkit-transform'] = 'translate3d('+rd_x[18]+'px,'+rd_y[18]+'px,'+rd_z[18]+'px) rotateY(360deg)';
			};
		pf[18].onmouseout = function(){ 
			pf[18].style['-webkit-transform'] = 'translate3d('+rd_x[18]+'px,'+rd_y[18]+'px,'+rd_z[18]+'px) rotateY(0deg)';
			};
		pf[19].onmouseover = function(){ 
			pf[19].style['-webkit-transform'] = 'translate3d('+rd_x[19]+'px,'+rd_y[19]+'px,'+rd_z[19]+'px) rotateY(360deg)';
			};
		pf[19].onmouseout = function(){ 
			pf[19].style['-webkit-transform'] = 'translate3d('+rd_x[19]+'px,'+rd_y[19]+'px,'+rd_z[19]+'px) rotateY(0deg)';
			};
		pf[20].onmouseover = function(){ 
			pf[20].style['-webkit-transform'] = 'translate3d('+rd_x[20]+'px,'+rd_y[20]+'px,'+rd_z[20]+'px) rotateY(360deg)';
			};
		pf[20].onmouseout = function(){ 
			pf[20].style['-webkit-transform'] = 'translate3d('+rd_x[20]+'px,'+rd_y[20]+'px,'+rd_z[20]+'px) rotateY(0deg)';
			};
		pf[21].onmouseover = function(){ 
			pf[21].style['-webkit-transform'] = 'translate3d('+rd_x[21]+'px,'+rd_y[21]+'px,'+rd_z[21]+'px) rotateY(360deg)';
			};
		pf[21].onmouseout = function(){ 
			pf[21].style['-webkit-transform'] = 'translate3d('+rd_x[21]+'px,'+rd_y[21]+'px,'+rd_z[21]+'px) rotateY(0deg)';
			};
		pf[22].onmouseover = function(){ 
			pf[22].style['-webkit-transform'] = 'translate3d('+rd_x[22]+'px,'+rd_y[22]+'px,'+rd_z[22]+'px) rotateY(360deg)';
			};
		pf[22].onmouseout = function(){ 
			pf[22].style['-webkit-transform'] = 'translate3d('+rd_x[22]+'px,'+rd_y[22]+'px,'+rd_z[22]+'px) rotateY(0deg)';
			};
		pf[23].onmouseover = function(){ 
			pf[23].style['-webkit-transform'] = 'translate3d('+rd_x[23]+'px,'+rd_y[23]+'px,'+rd_z[23]+'px) rotateY(360deg)';
			};
		pf[23].onmouseout = function(){ 
			pf[23].style['-webkit-transform'] = 'translate3d('+rd_x[23]+'px,'+rd_y[23]+'px,'+rd_z[23]+'px) rotateY(0deg)';
			};
		pf[24].onmouseover = function(){ 
			pf[24].style['-webkit-transform'] = 'translate3d('+rd_x[24]+'px,'+rd_y[24]+'px,'+rd_z[24]+'px) rotateY(360deg)';
			};
		pf[24].onmouseout = function(){ 
			pf[24].style['-webkit-transform'] = 'translate3d('+rd_x[24]+'px,'+rd_y[24]+'px,'+rd_z[24]+'px) rotateY(0deg)';
			};
		pf[25].onmouseover = function(){ 
			pf[25].style['-webkit-transform'] = 'translate3d('+rd_x[25]+'px,'+rd_y[25]+'px,'+rd_z[25]+'px) rotateY(360deg)';
			};
		pf[25].onmouseout = function(){ 
			pf[25].style['-webkit-transform'] = 'translate3d('+rd_x[25]+'px,'+rd_y[25]+'px,'+rd_z[25]+'px) rotateY(0deg)';
			};
		pf[26].onmouseover = function(){ 
			pf[26].style['-webkit-transform'] = 'translate3d('+rd_x[26]+'px,'+rd_y[26]+'px,'+rd_z[26]+'px) rotateY(360deg)';
			};
		pf[26].onmouseout = function(){ 
			pf[26].style['-webkit-transform'] = 'translate3d('+rd_x[26]+'px,'+rd_y[26]+'px,'+rd_z[26]+'px) rotateY(0deg)';
			};
		//미친짓 끝
		}
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





