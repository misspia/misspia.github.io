$(document).ready(function ( ) {    
    $(".skill-btn-excel").click(
        function () {
            //AlertSave();
            resetOpacity();
            excelNeedle();
            resetDesc ();
            excelDesc();
            $('.skill-meter-label-7').css('opacity', '1');

            
        }       
    );
    $(".skill-btn-html").click(
        function () {
            resetOpacity();
            htmlNeedle();
            resetDesc ();
            htmlDesc ();
            $('.skill-meter-label-6').css('opacity', '1');
            
        }       
    );
    $(".skill-btn-js").click(
        function () {
            resetOpacity();
            jsNeedle();
            resetDesc ();
            jsDesc ();
            $('.skill-meter-label-4').css('opacity', '1');
        }       
    );  
    $(".skill-btn-sql").click(
        function () {
            resetOpacity();
            sqlNeedle();
            resetDesc ();
            sqlDesc ();
            $('.skill-meter-label-4').css('opacity', '1');
        }       
    );
    $(".skill-btn-python").click(
        function () {
            resetOpacity();
            pythonNeedle();
            resetDesc ();
            pythonDesc ();
            $('.skill-meter-label-3').css('opacity', '1');
        }       
    ); 
    $(".skill-btn-joke1").click(
        function () {
            resetOpacity();
            j1Needle();
            resetDesc ();
            j1Desc ();
            $('.skill-meter-label-1').css('opacity', '1');
        }       
    ); 
    
    
    
    
    
    });


function AlertSave() {
   alert("Alert Message OnClick");
}

function resetOpacity() {
    $('.skill-meter-label').css('opacity','0.6');
}

///////////////////////NEEDLE ROTATE///////////////////////////
function hideNeedle(){
    $(".skill-meter-needle").hide();
}

function excelNeedle(){
    $(".skill-meter-needle").animate({  borderSpacing: 170 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');}
function htmlNeedle(){
    $(".skill-meter-needle").animate({  borderSpacing: 150 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');}
function jsNeedle(){
    $(".skill-meter-needle").animate({  borderSpacing: 90 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');}
function pythonNeedle(){
    $(".skill-meter-needle").animate({  borderSpacing: 70 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');}
function sqlNeedle(){
    $(".skill-meter-needle").animate({  borderSpacing: 85 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');}
function j1Needle(){
    $(".skill-meter-needle").animate({  borderSpacing: 15 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');}

//////////////////////DESCRIPTION BOX///////////////////////
function resetDesc (){
    $('.skill-detail-box-desc').children("p").remove();
}
function excelDesc (){
        $('<p>VBA, macros, advanced logical formulas, vlookup</p>').appendTo('.skill-detail-box-desc').hide().fadeIn();
}
function htmlDesc (){
    $('<p>Bootstrap, Pure CSS, animations</p>').appendTo('.skill-detail-box-desc').hide().fadeIn();
}
function jsDesc (){
    $('<p>JQuery, JSON</p>').appendTo('.skill-detail-box-desc').hide().fadeIn();
}
function pythonDesc (){
    $('<p> </p>').appendTo('.skill-detail-box-desc').hide().fadeIn();
}
function sqlDesc (){
    $('<p>YQL</p>').appendTo('.skill-detail-box-desc').hide().fadeIn();
}
function j1Desc (){
    $('<p>No karaoke please</p>').appendTo('.skill-detail-box-desc').hide().fadeIn();
}



            

