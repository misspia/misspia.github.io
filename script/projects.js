$(document).ready(function(){
	$("a").tooltip();   
});


function stop(){
    $('.sun').css('animation-play-state', 'paused');
    $('.c1').css('animation-play-state', 'paused');
    $('.c2').css('animation-play-state', 'paused');
    $('.c3').css('animation-play-state', 'paused');
  }
  function resume(){
    $('.sun').css('animation-play-state', 'running');
    $('.c1').css('animation-play-state', 'running');
    $('.c2').css('animation-play-state', 'running');
    $('.c3').css('animation-play-state', 'running');    
  }


/////////////////////////////CKN OR MAN //////////////////////////////////
function chickensuit() {
  $('.person-arms').css('opacity', '0');
   $('.chicken-outfit').css('opacity','1');
   $('.sir-outfit').css('opacity','0');
   
}
function sirsuit(){
     $('.person-arms').css('opacity', '1');
    $('.sir-outfit').css('opacity','1');
    $('.chicken-outfit').css('opacity','0');
}