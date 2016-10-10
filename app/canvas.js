pixelStudio.canvas = {

	screen: {
		width: 0,
		heigth: 0
	},

	nbPixel: {
		width:0,
		heigth:0,
	},

	pixelDimension: 0,

	/**
	 * Initiation du canvas
	 * @param  {[number]} width        Largeur du canvas (pixel ecran)
	 * @param  {[number]} heigth       Hauteur max du canvas (pixel ecran)
	 * @param  {[number]} nbPixelWidth Nb du pixel sur la largeur
	 * @param  {[string]} html 		   Element html ou est accroche me canvas
	 * @return {[type]}              [description]
	 */
	init(width, heigth, nbPixelWidth, html){
	
		this.pixelDimension = Math.floor(width/nbPixelWidth);

		this.nbPixel.width = nbPixelWidth;
		this.nbPixel.heigth = Math.floor(heigth/this.pixelDimension);

		this.screen = {
			width: this.nbPixel.width*this.pixelDimension,
			heigth: this.nbPixel.heigth*this.pixelDimension,
		}

		var canvas = document.createElement("canvas");
		this.context = canvas.getContext("2d");
		canvas.setAttribute('style','width:'+this.screen.width+'px; height:'+this.screen.heigth+'px');

/*		var nbPixelTotal = (width*heigth)/(this.pixelDimension*this.pixelDimension)
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
	}
}
