(function() {

	'use strict';

	var slideTotal = $('.sl-slide').length;

	$('[init="bgImg"]').each(function() {
		var $this = $(this),
			img = new Image();

		img.src = $(this).data('image');
		img.onload = function() {
			$this
				.addClass('load')
				.css('backgroundImage', 'url(' + img.src + ')');
		}
	});

	$('[action="answer"] a').on('click', function() {
		var nextSlide = $(this).parents('.sl-slide').index();
		if(++nextSlide + 1 > slideTotal) {
			nextSlide = 0;
		}

		$(this)
			.parents('ul').find('a').removeClass('selected').end().end()
			.addClass('selected');
		
		$('[action="nav"] span:eq(' + nextSlide + ')').trigger('click');
	});

	$('[action="nav"] > span').on('click', function() {
		var $this = $(this);
		
		$this.parents('nav').find('span > div').show();
		$this.find('> div').hide();
	});

	$('[action="nav"] > span[param="add"]').on('click', function() {
		
	});

})();