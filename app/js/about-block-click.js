$.fn.motion = function(options) {

	// Vars
	var params = $.extend({
		speed: 300, 
		timingFunction: 'ease'
	}, options);

	$selector = this;
	// Controllers
	function modalController(target, ident) {
		if (ident == 'close') {
			var h = $(target).find('.block-text').css('height');
			$(target).removeClass('active');
            $(target).find('div').removeClass('active');
			$(target).find('.block-control').attr('data-motion-name', 'active');
			$('#b1').css('margin-top', h);
			$('#about-blocks-text').css('margin-bottom', '17px');
		} else {
			$('#b1').css('margin-top', '0');
			$('#about-blocks-text').css('margin-bottom', '0');
			$selector.removeClass('active');
            $selector.find('div').removeClass('active');
            $selector.find('.block-control').attr('data-motion-name', 'active');
			$(target).addClass('active');
            $(target).find('div').addClass('active');
            $(target).find('.block-control').attr('data-motion-name', 'close');
        }
	}

	// Init
	$selector.find('.about-block').css('transition', 'all ' + params.speed + 'ms ' + params.timingFunction);

	// Actions
	$('[data-motion]').click(function() {
        var target = $(this).attr('data-motion');
        var ident = $(this).attr('data-motion-name');
		modalController(target, ident);
	});

}