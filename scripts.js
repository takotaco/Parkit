$(document).ready(function() {
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

	$('#gps #backToFindParking').click(function () {
		$('.page').hide();
		$('#findParking').show();
		$('#pageTitle').html('Find Parking');
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
	});

	$('#gps #park').click(function() {
		$('.page').hide();
		$('#payment').show();
		$('#pageTitle').html('Parking Options');
		$('#links').hide();
	});

	$('#payment #cancelParking').click(function () {
		$('.page').hide();
		$('#findParking').show();
		$('#pageTitle').html('Find Parking');
	});

	$('.subMenu .menuOptions li').click(function() {
		var menuItem = $(this);
		menuItem.parent().parent().children().children().removeClass('selected');
		menuItem.addClass('selected');
	});

	$('#addCar').click(function() {
		$('.page').hide();
		$('#paymentAddCar').show();
		$('#pageTitle').html('Add Car');

	});

	$('#addPayment').click(function() {
		$('.page').hide();
		$('#paymentAddPayment').show();
		$('#pageTitle').html('Add Payment Option');
	});

	$('#editNotifications').click(function() {
		$('.page').hide();
		$('#paymentEditNotifications').show();
		$('#pageTitle').html('Edit Notifications');
	});

	$('#cancelAddCar').click(function() {
		$('#paymentAddCar li').removeClass('selected');
		$('#licenseNumber').val('');
		$('.page').hide();
		$('#payment').show();
		$('#pageTitle').html('Parking Options');
	});

	$('#cancelAddPayment').click(function () {
		$('.page').hide();
		$('#payment').show();
		$('#pageTitle').html('Parking Options');
	});

	$('#cancelEditNotifications').click(function() {
		$('.page').hide();
		$('#payment').show();
		$('#pageTitle').html('Parking Options');
	});

	$('#addCarButton').click(function() {
		var license = $('#licenseNumber').val();
		//choose the selected color
		//var color = $('#paymentAddCar li')
		var color = 'blue';
		//add the new car
		$('#carChoices ul').append('<li><img src="img/car_' + color + '.png" width="50px"></img> ' + license + '</li>');

		$('#paymentAddCar li').removeClass('selected');
		$('#licenseNumber').val('');
		$('.page').hide();
		$('#payment').show();
		$('#pageTitle').html('Parking Options');
	});

	$('#parkNow').click(function() {
		$('.page').hide();
		$('#parked').show();
		$('#pageTitle').html('Something???');
	});

	$('#findCarButton').click(function () {
		$('.page').hide();
		$('#findCar').show();
		$('#pageTitle').html('Route to Car');
	});

	$('#findCar .knurl').click(function () {
		$('.page').hide();
		$('#findCarText').show();
		$('#pageTitle').html('Route to Car');
	});

	$('#findCarText .knurl').click(function () {
		$('.page').hide();
		$('#findCar').show();
		$('#pageTitle').html('Route to Car');
	});

	$('#doneParkingButton').click(function() {
		$('.page').hide();
		$('#doneParking').show();
		$('#pageTitle').html('Thanks come again');
	});

	$('#doneFinding').click(function() {
		$('.page').hide();
		$('#doneParking').show();
		$('#pageTitle').html('Thanks come again');
	});

	$('#backToParked').click(function() {
		$('.page').hide();
		$('#parked').show();
		$('#pageTitle').html('Something???');
	});

});