function customStart() {
	//define your javascript here
	//jquery is available - except index.js
	//you can load extra scripts with $.getScript http://api.jquery.com/jQuery.getScript/
	var headerSelectBody = $('#heading-selection'),
		headerButtonBody = $('.button-header');
	headerButtonBody.on('click', function () {
		if(headerSelectBody.val() == '-1' || headerSelectBody.val() == 'dummy')
			headerSelectBody.val('0');
		else
			headerSelectBody.val('-1');
		headerSelectBody.trigger('change');
	});
	/*headerSelectBody.on('change', function () {
		if($(this).val() == '-1' || $(this).val() == 'dummy')
			headerButtonBody.addClass('active');
		else
			headerButtonBody.removeClass('active');
	});*/
	$('.button-fontsize').on('click', function () {
		$('#font-size').find('select').val($(this).data('id')).trigger('change');
	});
	$('.button-fontfamily').on('click', function () {
		$('#font-family').find('select').val($(this).data('id')).trigger('change');
	});
	$('.button-color').on('click', function () {
		$('#font-color').find('select').val($(this).data('id')).trigger('change');
	});
    $('.acl-write.font-color-icon.ep_font_color').css('display', 'none');
    $('#font-color').css('display', 'none');
    $('#headings').css('display', 'none');
    $('.separator.acl-write').css('display', 'none');
    $('.separator').css('display', 'none');


}