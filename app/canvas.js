PixelStudio.canvas = {
	
	screen : {
		width  :0,
		height :0
	},

	nb_pixel  : {
		width : 0,
		height: 0
	},

	pixel_dimension : 0,

	
	/**
	 * Préparation de la zone de dessin
	 * @param  {string} divId          Nom de la div dans laquelle sera placée le canvas
	 * @param  {number} width          Largeur exacte du canvas en pixel écran
	 * @param  {number} height         Hauteur maximum du canvas en pixel écran
	 * @param  {number} nb_pixel_width Nombre de pixels en largeur
	 * @return {[type]}                [description]
	 */
	
	init : function(divId, width, height, nb_pixel_width){
		
		this.pixel_dimension = parseInt(width / nb_pixel_width);
		this.nb_pixel.height = parseInt(height / this.pixel_dimension);

		this.screen.width    = this.pixel_dimension * nb_pixel_width;
		this.screen.height   = this.pixel_dimension * this.nb_pixel.height;
		this.nb_pixel.width  = nb_pixel_width;

		let $c = $('<canvas></canvas>');
		$c.attr( 'width',  this.screen.width  )
		  .attr( 'height', this.screen.height )
		  .appendTo('#'+divId);

		this.$canvas = $c;

		this.context = $c[0].getContext('2d');
		this.context.fillRect(255, 255, 255, 255);

	}
}