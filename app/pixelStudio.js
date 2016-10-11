var pixelStudio = {
	init: function(){

		this.canvas.init(1100,window.innerHeight-50,80,new Color('grey',[155,155,155])
		,'#zoneDessin');
		
		let colors = [
			new Color('noir',[0,0,0]),
			new Color('cyan',[0,255,255]),
			new Color('violet',[255,0,255]),
			new Color('jaune',[255,255,0]),
			new Color('bleu',[0,0,255]),
			new Color('vert',[0,255,0]),
			new Color('rouge',[255,0,0]),
			new Color('blanc',[255,255,255]),
		];

		this.paletteColor.initColor(colors);


		let tools = [
			new Pencil(this.canvas),
			new Eraser(this.canvas),
		];
		this.paletteTool.initTool(tools);
		console.log('Pret au décollage');
	},
}

