$(document).ready(function() {
	$('.addButton').html('<img src="img/plus.png" width="25px" height="25px"></img>');
	$('.page').hide();
	$('#header').hide();
	$('#homepage').show();

	$('#go').click(function() {
		$('#homepage').hide();
		$('.page').hide();
		$('#findParking').show();
		$('#header').show();
		$('#pageTitle').html('Find Parking');
		$('#info2').hide();
	});

	$('#findParking #directions').click(function() {
		$('.page').hide();
		$('#gps').show();
		$('#pageTitle').html('Directions');
	});

	$('#gps .knurl').click(function() {
		$('.page').hide();
		$('#gpsText').show();
	});

	$('#gpsText .knurl').click(function() {
		$('.page').hide();
		$('#gps').show();
	});

	$('#findParking #park').click(function() {
		$('.page').hide();
		$('#payment').show();
		$('#pageTitle').html('Parking Options');
		$('#links').hide();
	})

	$('#gps #park').click(function() {
		$('.page').hide();
		$('#payment').show();
		$('#pageTitle').html('Parking Options');
		$('#links').hide();
	})

	$('.subMenu .menuOptions li').click(function() {
		var menuItem = $(this);
		menuItem.parent().children().removeClass('selected');
		menuItem.addClass('selected');
	})
});