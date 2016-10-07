pixelStudio.palette = {
	initColor: function (colors) {

		var clone = $('#paletteColor li:first').detach();
		
		for (var i = 0; i < colors.length; i++) {
			$(clone).css('background-color',colors[i].to_string());
			$(clone).prependTo('#paletteColor');
			clone = $('#paletteColor li:first').clone();
		}

	}
}