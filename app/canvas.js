PixelStudio.canvas = {
	
	screen : {
		width : 0,
		height: 0
	},

	nb_pixel  : {
		width : 0,
		height: 0
	},

	backgroundColor : null,

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

		this.backgroundColor = new Color('white', [255,255,255]);

		let $c = $('<canvas></canvas>');
		$c
		.attr({
			'width' : this.screen.width,
			'height': this.screen.height
		})
		.on('click', this.on_click)
		.appendTo('#'+divId);

		this.$canvas = $c;

		this.context = $c[0].getContext('2d');


	},

	screenToCanvas : function(e){
		
		let offset = this.$canvas.offset();
		let cx = e.clientX - offset.left;
		let cy = e.clientY - offset.top;

		let px = parseInt(cx / this.pixel_dimension +1);
		let py = parseInt(cy / this.pixel_dimension +1);

		return {x : px, y : py};
	},

	on_click : function(e){

		let ps       = PixelStudio,
			position = ps.canvas.screenToCanvas(e),
			tool     = ps.palette_tools.getSelected(),
			color    = ps.palette_color.getSelected();
			tool.use(position.x, position.y);
	},

	draw : function(x, y, color) {

		let bigX = (x-1) * this.pixel_dimension,
			bigY = (y-1) * this.pixel_dimension;

		this.context.fillStyle = color.getString();
		this.context.fillRect(bigX, bigY, this.pixel_dimension, this.pixel_dimension);
	}
}