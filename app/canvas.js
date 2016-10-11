pixelStudio.canvas = {

	screen: {
		width: 0,
		height: 0
	},

	nbPixel: {
		width:0,
		height:0,
	},

	pixelDimension: 0,

	/**
	 * Initiation du canvas
	 * @param  {[number]} width        Largeur du canvas (pixel ecran)
	 * @param  {[number]} height       Hauteur max du canvas (pixel ecran)
	 * @param  {[number]} nbPixelWidth Nb du pixel sur la largeur
	 * @param  {[string]} html 		   Element html ou est accroche me canvas
	 * @return {[type]}              [description]
	 */
	init(width, height, nbPixelWidth, bgColor,html){
	
		this.pixelDimension = Math.floor(width/nbPixelWidth);

		this.nbPixel.width = nbPixelWidth;
		this.nbPixel.height = Math.floor(height/this.pixelDimension);

		this.bgColor = bgColor;

		this.screen = {
			width: this.nbPixel.width*this.pixelDimension,
			height: this.nbPixel.height*this.pixelDimension,
		}

		this.$canvas = $('<canvas></canvas>');
		this.context = this.$canvas[0].getContext("2d");
		this.$canvas.attr('width',this.screen.width);
		this.$canvas.attr('height',this.screen.height);

		this.context.fillStyle = this.bgColor.to_string();
    	this.context.fillRect(0,0,this.$canvas.attr('width') ,this.$canvas.attr('height'));

		$(html).append(this.$canvas);

		this.$canvas.on('mouseup mousemove mousedown',this.on_mouse_event);
		
		console.log('Le canvas est dans la place');
	},
	/**
	 * Dessine un pixel sur la zone de dessin
	 * @param  {[number]} x      Abscisse du pixel
	 * @param  {[number]} y      Ordonnée du pixel
	 * @param  {Color} color 	 Objet instance de Color
	 */
	draw(x ,y ,color){
		let relativeX = (x-1)* this.pixelDimension,
			relativeY = (y-1)* this.pixelDimension;

    	this.context.fillStyle = color.to_string();
    	this.context.fillRect (relativeX,relativeY,this.pixelDimension ,this.pixelDimension);
	},

	on_mouse_event(e){
		let ps = pixelStudio,
			tool = ps.paletteTool.getSelected(),
			type = 'on_'+e.type;

		if (tool[type]) tool[type](e);
	},

	screenToCanvas(e){
		let offset=this.$canvas.offset();
		return {
			x: Math.floor((e.clientX-offset.left)/this.pixelDimension)+1,
			y: Math.floor((e.clientY-offset.top)/this.pixelDimension)+1
		}
	},	

	getBg(){
		return this.bgColor;
	},
}
