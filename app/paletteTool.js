pixelStudio.paletteTool = {
	tools: [],

	toolSelected: null,

	initTool: function(tools){
		this.tools = tools;

		let $clone = $('#paletteTool li').detach()

		for (var i = tools.length - 1; i >= 0; i--) {
			let $c = $clone.clone();
			let tool = this.tools[i];
			tool.id = i;

			$c.css('background-image','url('+tool.icone+')')
			$c.attr('title',tool.name);
			$c.prependTo('#paletteTool');
		}

		this.selectTool(tools[0]);

		$('paletteTool li').eq(tools[0]).addClass('selected');

		$('#paletteTool').on('click','li',function(e){
			var index = $(this).index();
			pixelStudio.paletteTool.selectTool(pixelStudio.paletteTool.tools[index])
		})
	},

	selectTool(tool){
		this.toolSelected = tool;
		$('#paletteTool li').removeClass('selected');
		$('#paletteTool li').eq(tool.id).addClass('selected');
	},

	getSelected(){
		return this.toolSelected;
	},
}