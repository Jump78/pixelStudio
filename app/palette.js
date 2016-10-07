pixelStudio.palette = {

	colors: [],

	colorSelected: null,

	initColor: function (colors) {
		this.colors = colors;

		var $clone = $('#paletteColor li').detach();
		
		for (var i = colors.length-1; i >= 0; i--) {
			let $c = $clone.clone();
			let color = this.colors[i];
			color.id = i;
			$c.css('background-color',colors[i].to_string());
			$c.attr('title',colors[i].name);
			$c.prependTo('#paletteColor');
		}
		
		this.selectColor(colors[0]);

		$('#paletteColor li').eq(colors[colors.length-1]).addClass('selected');
		
		$('#paletteColor').on('click','li',function(e){
			var index = $(this).index();
			pixelStudio.palette.selectColor(pixelStudio.palette.colors[index])
		})
	
	},

	selectColor(color){
		this.colorSelected = color;
		$('#paletteColor li').removeClass('selected');
		$('#paletteColor li').eq(color.id).addClass('selected');

	}
}
