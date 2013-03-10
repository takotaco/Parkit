$(document).ready(function() {
	$('.page').hide();
	$('#homepage').show();

	$('#go').click(function() {
		$('.page').hide();
		$('#findParking').show();
		$('#header').show();
		$('#pageTitle').html("Find Parking");
		$('#info2').hide();
	});
});