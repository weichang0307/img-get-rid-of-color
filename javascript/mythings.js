


























/*
//example
class example{
	constructor(aa){
		let element={
			position:{x:0,y:0},
			rotation:0,
			scale:{x:1,y:1},
			through:1,
			visible:true,
			style:0,
		}
		this.styles=[]
		this.group=[]
		//this.styles.push({method:'drawer',array:[]})
		//this.styles.push({method:'img',img:document.getElementById(''),middle:{x:,y:},path:[]})

		Object.assign(element,aa)
		Object.assign(this,element)
	}
	draw(){
		if(this.visible){
			if(this.styles[style].method==='img'){
				ctx.translate(this.position.x,this.position.y)
				ctx.rotate(this.rotation)
				ctx.scale(this.scale.x,this.scale.y)
				ctx.globalAlpha=this.through
				ctx.drawImage(this.styles[style].img,-this.styles[style].middle.x,-this.styles[style].middle.y)
				ctx.globalAlpha=1.0
			}else{
				ctx.save()
					ctx.translate(this.position.x,this.position.y)
					ctx.rotate(this.rotation)
					ctx.scale(this.scale.x,this.scale.y)
					drawer(this.styles[style].array,this.through)
				ctx.restore()
			}
			
		}
	}
	ispointinpath(x,y){
		if(this.styles[style].method==='img'){
			ctx.save()
			ctx.translate(this.position.x,this.position.y)
			ctx.rotate(this.rotation)
			ctx.scale(this.scale.x,this.scale.y)
			ctx.beginPath()
			for(let i=0;i<this.styles[style].path.length;i++){
				if(i===0){
					ctx.moveTo(this.styles[style].path[i])
				}else{
					ctx.lineTo(this.styles[style].path[i])
				}
			}
			ctx.close()
			ctx.restore()
			return ctx.isPointInPath(x,y)
		}else{
			ctx.save()
			ctx.translate(this.position.x,this.position.y)
			ctx.rotate(this.rotation)
			ctx.scale(this.scale.x,this.scale.y)
			return ispointinarraypath(x,y,this.array)
		}
		
	}
}
*/