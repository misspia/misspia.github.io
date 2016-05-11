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
