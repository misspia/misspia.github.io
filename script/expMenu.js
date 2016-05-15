$(document).ready(function () {
    
    clickBox();
    
  
    
    
});

function clickBox(){
 var tiles = $('.exp-box');
    tiles.click(function(){
    tiles.removeClass('activebox');
     $(this).fadeIn("slow", function(){
          $(this).addClass('activebox');
     });
 })
 };