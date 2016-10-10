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
	init(width, height, nbPixelWidth, html){
	
		this.pixelDimension = Math.floor(width/nbPixelWidth);

		this.nbPixel.width = nbPixelWidth;
		this.nbPixel.height = Math.floor(height/this.pixelDimension);

		this.screen = {
			width: this.nbPixel.width*this.pixelDimension,
			height: this.nbPixel.height*this.pixelDimension,
		}

		var canvas = document.createElement("canvas");
		this.context = canvas.getContext("2d");
		canvas.setAttribute('width',this.screen.width);
		canvas.setAttribute('height',this.screen.height);

/*		var nbPixelTotal = (width*height)/(this.pixelDimension*this.pixelDimension)
		var colonne = 0;
		var ligne = 0;

		for (var i = 0; i < nbPixelTotal; i++) {
			
			if (i == nbPixelWidth) {
				ligne++;
				colonne = 0;
			}
			
			var x = this.pixelDimension*colonne;
			var y = this.pixelDimension*ligne;

			var pixel = new Pixel(x,y);

			this.collectionPixel.push(pixel);
			colonne++;
		}*/

		$(html).append(canvas);
		console.log('Le canvas est dans la place');
	},
	/**
	 * Dessine un pixel sur la zone de dessin
	 * @param  {[number]} x      Abscisse du pixel
	 * @param  {[number]} y      Ordonnée du pixel
	 * @param  {Color} color 	 Objet instance de Color
	 */
	draw(x ,y ,color){
		let relativeX = x* this.pixelDimension,
			relativeY = y* this.pixelDimension;

		this.context.clearRect(relativeX,relativeY,this.pixelDimension ,this.pixelDimension);
    	this.context.fillStyle = color.to_string();
    	this.context.fillRect (relativeX,relativeY,this.pixelDimension ,this.pixelDimension);
	}
}
