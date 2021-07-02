const canvas=document.getElementById('mycanvas');
const ctx=canvas.getContext('2d');
const canvas2=document.getElementById('canvas2');
const ctx2=canvas2.getContext('2d');
ww=window.innerWidth
wh=window.innerHeight
canvas.height=0
canvas2.height=0
mx=ww/2
my=wh/2
let fps=100
let img03=document.getElementById('img03')
let text01=document.getElementById('text01')
let btn01=document.getElementById('btn01')
let btn02=document.getElementById('btn02')
let btn03=document.getElementById('btn03')
let btn04=document.getElementById('btn04')
let textarea01=document.getElementById('textarea01')
let textarea02=document.getElementById('textarea02')
let middle=document.getElementById('middle')
let h301=document.getElementById('h301')
let path=document.getElementById('path')
let copy2=document.getElementById('copy')


//全域變數
let excolor
let mode=0
let points=[]
let pimg
let middlexy={x:0,y:0}

function init(){
	//event
	console.log('version:2.0')
	
	



	let input01=document.getElementById('input01')
	input01.onchange=function(){
	   readurl(this);  
	};

	btn01.onclick=function(){
		excolor=text01.value
		let _img=document.getElementById('img01')
		if(_img.complete&&input01.files && input01.files[0]){
			drawexcept(_img,0,0,excolor)
		}

	}
	btn02.onclick=function(){
		textarea01.value=canvas.toDataURL()
	}
	btn03.onclick=function(){
		textarea01.select()
		document.execCommand('copy');
	}
	btn04.onclick=function(){
		let fileName = "download.png";
  		var link = document.createElement("a");
  		document.body.appendChild(link);
  		link.href = canvas.toDataURL();
  		link.download = fileName;
  		link.click();
	}
	middle.onclick=function(){
		mode=1
		canvas.style.cursor='crosshair'
	}
	path.onclick=function(){
		canvas2.style.cursor='cell'
		
		textarea02.value=null
		points=[]
	
		pimg = new Image()
		pimg.onload = function(){
			canvas2.style.display='block'				
			canvas2.style.width=this.width+'px'
			canvas2.style.height=this.height+'px'
			canvas2.width=this.width
			canvas2.height=this.height
		}
		
		pimg.src=canvas.toDataURL()
		pimg.style.display='none'
		pimg.id='pathimg'
		textarea02.value='[]'
		mode=2
			
		
	}
	
	copy2.onclick=function(){
		textarea02.select()
		document.execCommand('copy');
	}

	

	window.addEventListener('keydown',keydown)
	canvas.addEventListener('click',click)
	canvas2.addEventListener('click',click2)
}

function draw(){
	ctx2.fillStyle='white'
	ctx2.fillRect(0,0,canvas2.width,canvas2.height)
	if(canvas2.height!==0&&pimg.complete){
		
		ctx2.drawImage(pimg,0,0)
		ctx2.beginPath()
		for(let i=0;i<points.length;i++){
			if(i===0){
				ctx2.moveTo(points[i].x+middlexy.x,points[i].y+middlexy.y)
			}else{
				ctx2.lineTo(points[i].x+middlexy.x,points[i].y+middlexy.y)
			}
		}
		ctx2.closePath()
		ctx2.lineWidth=2
		ctx2.strokeStyle='rgb(200,200,200)'
		ctx2.stroke()
		ctx2.beginPath()
		ctx2.moveTo(middlexy.x-8,middlexy.y)
		ctx2.lineTo(middlexy.x+8,middlexy.y)
		ctx2.moveTo(middlexy.x,middlexy.y-8)
		ctx2.lineTo(middlexy.x,middlexy.y+8)
		ctx2.lineWidth=4
		ctx2.stroke()
		for(let i=0;i<points.length;i++){
			if(i===0){
				ctx2.fillStyle='red'
				ctx2.fillRect(points[i].x-2+middlexy.x,points[i].y-2+middlexy.y,4,4)
				ctx2.fillStyle='rgb(200,0,0)'
			}else{
				ctx2.fillRect(points[i].x-2+middlexy.x,points[i].y-2+middlexy.y,4,4)
			}
		}
		
	}
	
}

setInterval(draw,100)

//event function
function keydown(e){
	keyid=e.code
	if(keyid==='Enter'){
		mode=0
		canvas2.style.cursor='default'
	}
	
}
function readurl(input){
	if(input.files && input.files[0]){
		let reader = new FileReader();
		reader.onload = function (e) {
			let img_=document.getElementById('img01')
			img_.src=e.target.result
			img_.onload=function(e){
				canvas.style.width=img_.width+'px'
				canvas.style.height=img_.height+'px'
				canvas.width=img_.width
				canvas.height=img_.height
				if(img_.width===0){
					alert('failed to get picture.plese reopen the page')
				}
				drawexcept(img_,0,0,'none') 
			}
			
			img_.style.display='none'

			

			
		}
		reader.readAsDataURL(input.files[0]);
	}
}
function click(e){
	if(mode===0){
		let img_=document.getElementById('img01')
		if(e.pageX>img_.width){
			text01.value='none'
		}else{
			let data=ctx.getImageData(e.pageX,e.pageY,1,1)
			text01.value='rgb('+data.data[0]+','+data.data[1]+','+data.data[2]+')'
		}
	}else if(mode===1){
		canvas.style.cursor='default'
		mode=0
		h301.innerHTML='x:'+e.pageX+',y:'+e.pageY
		middlexy.x=e.pageX
		middlexy.y=e.pageY
	}
	
}
function click2(e){
	if(mode===2){
		let gbcr=canvas2.getBoundingClientRect();
		let xx=Math.floor(e.clientX-gbcr.left)-middlexy.x
		let yy=Math.floor(e.clientY-gbcr.top)-middlexy.y
		let xy={x:xx,y:yy}
		points.push(xy)
		textarea02.value='['
		for(let i of points){
			textarea02.value+='{x:'+i.x+',y:'+i.y+'},'
		}
		textarea02.value+=']'
	}
}
init()


















