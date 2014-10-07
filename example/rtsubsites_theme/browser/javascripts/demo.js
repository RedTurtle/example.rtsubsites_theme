/**
 * Demo code for example.redturtlesubsites_theme
 */

(function($) {
	$(document).ready(function() {
		var demo = $("<div><h2>Welcome To The demo</h2></div>").hide();
		$("#portal-globalnav").append(demo);
		demo.show('slow');
	});	
})(jQuery);
