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
		$('#map2').hide();
		$('#directions').hide();
	});

	$('#map1').click(function(e) {

		var x = e.clientX;
		var y = e.clientY;
		if (x >= 173 && x <= 210 && y >= 183 && y <= 245) {
			$('#map1').hide();
			$('#map2').show();
			$('#info1').hide();
			$('#info2').show();
			$('#directions').show();
		}
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
		var color = $('#paymentAddCar .selected').attr('id');
		console.log(color);
		//var color = 'blue';
		//add the new car
		$('#carChoices ul').append('<li><img src="img/car_' + color + '.png" width="50px"></img> ' + license + '</li>');

		$('#paymentAddCar li').removeClass('selected');
		$('#licenseNumber').val('');
		$('.page').hide();
		$('#payment').show();
		$('#pageTitle').html('Parking Options');

		$('.subMenu .menuOptions li').click(function() {
			var menuItem = $(this);
			menuItem.parent().parent().children().children().removeClass('selected');
			menuItem.addClass('selected');
		});
	});

	$('#addPaymentButton').click(function() {
		var carNum = $('#cardNumber').val();

		$('#paymentChoices ul').append('<li><img src="img/visa.jpg" width="50px"></img> ' + carNum + '</li>');

		$('#cardNumber').val('');
		$('#CV2').val('');
		$('#month').val('');
		$('#year').val('');

		$('.page').hide();
		$('#payment').show();
		$('#pageTitle').html('Parking Options');

		$('.subMenu .menuOptions li').click(function() {
			var menuItem = $(this);
			menuItem.parent().parent().children().children().removeClass('selected');
			menuItem.addClass('selected');
		});
	});

	$('#parkNow').click(function() {
		$('.page').hide();
		$('#parked').show();
		$('#pageTitle').html('Parked');
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
		$('#pageTitle').html('Done Parking');
	});

	$('#doneFinding').click(function() {
		$('.page').hide();
		$('#doneParking').show();
		$('#pageTitle').html('Done Parking');
	});

	$('#backToParked').click(function() {
		$('.page').hide();
		$('#parked').show();
		$('#pageTitle').html('Parked');
	});

	$('#Ok').click(function() {
		$('.page').hide();
		$('#findParking').show();
		$('#pageTitle').html('Find Parking');
		$('#info2').hide();
		$('#map2').hide();
		$('#directions').hide();

	});
});