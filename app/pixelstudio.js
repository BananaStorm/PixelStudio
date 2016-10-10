var PixelStudio = {

	init : function(){

		let colors = [
			new Color('light cyan',          [221, 255, 247]),
			new Color('pale robin egg blue', [147, 225, 216]),
			new Color('light salmon pink',   [255, 166, 158]),			
			new Color('medium ruby',         [170, 68,  101]),
			new Color('japanese violet',     [70,  34,  85])
		];

		let tools = [
			new Tool('crayon', 'fa-pencil', function(x,y){
				let color = PixelStudio.palette_color.getSelected();
				PixelStudio.canvas.draw(x, y, color);
			}),
			new Tool('gomme', 'fa-eraser', function(x,y){
				let color = PixelStudio.canvas.backgroundColor;
				PixelStudio.canvas.draw(x, y, color);
			})
		];

		this.palette_color.init(colors);
		this.palette_tools.init(tools);
		this.canvas.init('canvas', $(window).width() - 70, $(window).height(), 32);
	}
};