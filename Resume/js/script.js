	$(document).ready(function(){
		$('#jsbasic').click(function(){
			$('#jsbasic').animate({height:'30em', width: '45em'});
			$('.certs #cjsb').show();
		});

		$('#jsf').click(function(){
			$('#jsf').animate({height:'30em', width: '45em'});
			$('.certs #cjsf').show();
		});

		$('#git').click(function(){
			$('#git').animate({height:'30em', width: '45em'});
			$('.certs #cgit').show();
		});

		$('#aws').click(function(){
			$('#aws').animate({height:'30em', width: '45em'});
			$('.certs #caws').show();
		});

		$('#port').click(function(){
			$('#port').animate({height:'30em', width: '45em'});
			$('.certs #cport').show();
		});
	});

$(document).ready(function(){
$('#cjsb').click(function(e) {
        $("#jsbasic").animate({height:'10em', width: '14em'});
        $('.certs #cjsb').hide();
});

$('#cjsf').click(function(e) {
        $("#jsf").animate({height:'10em', width: '14em'});
        $('.certs #cjsf').hide();
});

$('#cgit').click(function(e) {
        $("#git").animate({height:'10em', width: '14em'});
        $('.certs #cgit').hide();
});

$('#caws').click(function(e) {
        $("#aws").animate({height:'10em', width: '14em'});
        $('.certs #caws').hide();
});

$('#cport').click(function(e) {
        $("#port").animate({height:'10em', width: '14em'});
        $('.certs #cport').hide();
});


$( "#more" ).click(function() {
  $( "#readmore" ).toggle( "slow", function() {
  });
});

$("#classes").click(function(){
	$(".courses").toggle("slow", function(){

	});
});

});




