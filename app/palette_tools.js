PixelStudio.palette_tools = {
	/**
	 * [initColors description]
	 * @param  {array} colors tableau contenant des instances de Color
	 */
	
	tools : [],
	selectedTool : null,

	init : function(tools){
		
		this.tools = tools;
		let $template = $('#tools li').detach();

		for (let t = 0; t < tools.length; t++) {
			
			let tool = tools[t]
			tool.index = t;

			$template
			.clone()
			.html("<i title='" + tool.name + "' class='fa "+ tool.icon_file +"'></i>")
			.appendTo('#tools')

		}

		let self = this;

		$('#tools').on('click', 'li', function(){

			index   = $(this).index(),
			tool   = self.tools[index];

			self.selectTool(tool);

		});

		this.selectTool(this.tools[0]);
	},

	selectTool : function(tool) {
		
		this.selectedTool = tool;
		
		$('#tools li')
		.removeClass('selected')
		.eq(tool.index)
		.addClass('selected')

	}
}