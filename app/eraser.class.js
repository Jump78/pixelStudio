class Eraser extends Tool{
	constructor(canvas){
		super('eraser', 'images/gomme.png');
		this.canvas = canvas;
		this.bgColor = pixelStudio.canvas.getBg();
	}

	on_mousedown(e){
		let position = this.canvas.screenToCanvas(e);

		this.canvas.draw(position.x,position.y,this.canvas.getBg());
	}


}