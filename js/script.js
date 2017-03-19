$(document).ready(function(){

$('.toggledClasses span').css({border:'1px solid rgba(204, 204, 204, 0.48)', padding:'4px', borderRadius: '6px', backgroundColor: 'rgba(204, 204, 204, 0.2)'});
toggleCourse();
projectDetails();

});



function toggleCourse(){
	$('.toggledClasses').click(function(){
		$('.toggled', this).toggle("slow", function(){});
		
	});
}	

function projectDetails(){
	$('.project-details').hover(function(){
		$(this).children('button').show();
	},function(){
		$(this).children('button').hide();
	});
}

