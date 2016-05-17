$(document).ready(function ( ) {
  $("nav ul li a[href^='#']").on('click', function(e) {
    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 300, function(){

      // when done, add hash to url
      // (default click behaviour)
      window.location.hash = hash;
    });

  });
  function resetDesc (){
    $('.skill-detail-box-desc').html('');
  }
  $(".skill-btn-excel").click(
    function () {
      //AlertSave();
      resetOpacity();
      excelNeedle();
      resetDesc();
      excelDesc();
      $('.skill-meter-label-6').css('opacity', '1');
    }
  );
  $(".skill-btn-html").click(
    function () {
      resetOpacity();
      htmlNeedle();
      resetDesc();
      htmlDesc();
      $('.skill-meter-label-5').css('opacity', '1');
    }
  );
  $(".skill-btn-css").click(
    function () {
      resetOpacity();
      cssNeedle();
      resetDesc();
      cssDesc();
      $('.skill-meter-label-5').css('opacity', '1');
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

function resetOpacity() {
  $('.skill-meter-label').css('opacity','0.6');
}

///////////////////////NEEDLE ROTATE///////////////////////////
function hideNeedle(){
  $(".skill-meter-needle").hide();
}

function excelNeedle(){
  $(".skill-meter-needle").animate({  borderSpacing: 155 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)');
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
  },'linear');}
  function htmlNeedle(){
    $(".skill-meter-needle").animate({  borderSpacing: 110 }, {
      step: function(now,fx) {
        $(this).css('-webkit-transform','rotate('+now+'deg)');
        $(this).css('-moz-transform','rotate('+now+'deg)');
        $(this).css('transform','rotate('+now+'deg)');
      },
      duration:'slow'
    },'linear');}
    function cssNeedle(){
      $(".skill-meter-needle").animate({  borderSpacing: 135 }, {
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

              function excelDesc (){
                $('<span>VBA, macros, advanced logical formulas, vlookup</span>').appendTo('.skill-detail-box-desc').hide().fadeIn();
              }
              function htmlDesc (){
                $('<span>Bootstrap, Skeleton</span>').appendTo('.skill-detail-box-desc').hide().fadeIn();
              }
              function cssDesc (){
                $('<span>Sass. SCSS, animations</span>').appendTo('.skill-detail-box-desc').hide().fadeIn();
              }
              function jsDesc (){
                $('<span>JQuery, JSON</span>').appendTo('.skill-detail-box-desc').hide().fadeIn();
              }
              function pythonDesc (){
                $('<span>None...yet! </span>').appendTo('.skill-detail-box-desc').hide().fadeIn();
              }
              function sqlDesc (){
                $('<span>YQL</span>').appendTo('.skill-detail-box-desc').hide().fadeIn();
              }
              function j1Desc (){
                $('<span>No karaoke please</span>').appendTo('.skill-detail-box-desc').hide().fadeIn();
              }
