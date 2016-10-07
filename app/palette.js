PixelStudio.palette = {
	/**
	 * [initColors description]
	 * @param  {array} colors tableau contenant des instances de Color
	 */
	initColors : function(colors){
		
		let htmlElements = []

		for (let c = 0; c < colors.length; c++) {

			let color = colors[c];
			let clone = $('#color').clone();
			$(clone).css("background-color", color.getString())
			htmlElements.push(clone);
		}

		$('#colors').empty();

		for (let i = 0; i < htmlElements.length; i++) {
			let element = htmlElements[i];
			$('#colors').append(element);
		}
	}
}