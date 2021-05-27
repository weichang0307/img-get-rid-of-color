const canvas=document.getElementById('mycanvas');
const ctx=canvas.getContext('2d');
ww=window.innerWidth
wh=window.innerHeight
canvas.width=ww
canvas.height=0
mx=ww/2
my=wh/2
let fps=100
let img03=document.getElementById('img03')
let text01=document.getElementById('text01')
let btn01=document.getElementById('btn01')
let btn02=document.getElementById('btn02')
let btn03=document.getElementById('btn03')
let textarea01=document.getElementById('textarea01')



//全域變數
let excolor


function init(){
	//event
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

	

	window.addEventListener('keydown',keydown)
	canvas.addEventListener('click',click)
}
/*
function update(){


}
function draw(){
	requestAnimationFrame(draw)
}
setInterval(update,1000/fps)
requestAnimationFrame(draw)
*/

//event function
function keydown(e){
	keyid=e.code
	
}
function readurl(input){
	if(input.files && input.files[0]){
		let reader = new FileReader();
		console.log(1)
		reader.onload = function (e) {
			let img_=document.getElementById('img01')
			img_.src=e.target.result
			img_.style.display='none'			
			canvas.width=ww
			canvas.height=img_.height
			drawexcept(img_,0,0,'none')
			
		}
		reader.readAsDataURL(input.files[0]);
	}
}
function click(e){
	let data=ctx.getImageData(e.pageX+10,e.pageY,1,1)
	text01.value='rgb('+data.data[0]+','+data.data[1]+','+data.data[2]+')'
}


init()


















