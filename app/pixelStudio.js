var pixelStudio = {
	init: function(){

		let colors = [
			new Color('blanc',[255,255,255]),
			new Color('cyan',[0,255,255]),
			new Color('violet',[255,0,255]),
			new Color('jaune',[255,255,0]),
			new Color('bleu',[0,0,255]),
			new Color('vert',[0,255,0]),
			new Color('rouge',[255,0,0]),
			new Color('noir',[0,0,0]),
		];

		this.paletteColor.initColor(colors);


		function gomme(){
			console.log('gomme')
		}
		let tools = [
			new Tool('pinceau', 'images/pinceau.jpg',function(){
				console.log('pinceau')
			}),
			new Tool('gomme', 'images/gomme.png',gomme),
		];
		
		this.paletteTool.initTool(tools);
		this.canvas.init(1000,600,20, '#zoneDessin');
		console.log('Pret au décollage');
	},
}

