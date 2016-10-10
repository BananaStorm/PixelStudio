PixelStudio.palette_color = {
	/**
	 * [initColors description]
	 * @param  {array} colors tableau contenant des instances de Color
	 */
	
	colors : [],
	selectedColor : null,

	init : function(colors){
		
		this.colors = colors;
		let $template = $('#colors li').detach();

		for (let c = 0; c < colors.length; c++) {
			
			let color = colors[c]
			color.index = c;

			$template
			.clone()
			.css("background-color", color.getString())
			.attr("title", color.name)
			.appendTo('#colors')

		}

		let self = this;

		$('#colors').on('click', 'li', function(){

			index   = $(this).index(),
			color   = self.colors[index];

			self.selectColor(color);

		});

		this.selectColor(this.colors[0]);
	},

	selectColor : function(color) {
		
		this.selectedColor = color;
		
		$('#colors li')
		.removeClass('selected')
		.eq(color.index)
		.addClass('selected')

	},

	getSelected : function(){
		return this.selectedColor;
	}
}