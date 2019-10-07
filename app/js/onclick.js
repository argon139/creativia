$.fn.onclick_motion = function() {

		// Controllers
		function modalController(target, ident, selector_click) {
			console.log(this);
			if (ident == 'close') {
				$(target).removeClass('active');
				$(selector_click).attr('data-motion-name', 'open');
			} else {
				$(target).addClass('active');
				$(selector_click).attr('data-motion-name', 'close');
			}
		}
	
		// Actions
		$('[data-click]').click(function() {
			var target = $(this).attr('data-click');
			var ident = $(this).attr('data-motion-name');
			var selector_click = this;
			modalController(target, ident, selector_click);
		});
	
}