class Pencil extends Tool{
	constructor(canvas){
		super('pencil', 'images/pinceau.jpg');
		this.canvas = canvas;
		this.erased = false;
	}

	on_mousedown(e){
		this.erased = true;
		this.use(e);
	}

	on_mousemove(e){
		if (this.erased == true) this.use(e);
	}

	on_mouseup(e){
		this.erased = false;
	}

	use(e){
		let position = this.canvas.screenToCanvas(e);
		this.canvas.draw(position.x,position.y,pixelStudio.paletteColor.getSelected());
	}
}