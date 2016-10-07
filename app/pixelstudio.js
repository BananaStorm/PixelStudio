var PixelStudio = {

	init : function(){

		let colors = [
			new Color('blanc', [255, 255, 255]),
			new Color('rouge', [255, 0, 0]),
			new Color('vert',  [0, 255, 0]),
			new Color('bleu',  [0, 0, 255]),
			new Color('noir',  [0, 0, 0])
		];

		this.palette.initColors(colors);
	}
};