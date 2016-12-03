$(document).ready(function(){
///////////////////////////SMOOTH SCROLL///////////////////

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

///////////////////////////SCROLL ANIMATIONS///////////////////
  $('#hero').onScreen({
    container:window,
    direction: 'vertical',
    doIn: function(){
       $(".menu-item").removeClass("active");
       $(".menu-1").addClass("active");
    },
    tolerance:200
  });
  $('#concept').onScreen({
     container: window,
     direction: 'vertical',
     doIn: function() {
       $(".menu-item").removeClass("active");
       $(".menu-2").addClass("active");

       var $conceptTitle = $('#concept .heading'),
           $phone = $('.phone-container'),
           $conceptLI = $('#concept li'),
           tlconcept = new TimelineLite({delay:1});
      tlconcept.to($conceptTitle, 1, {opacity:1, y:5})
               .to($phone, 1, {opacity:1, y:-10}, '-=0.1' )
               .staggerTo($conceptLI, 2, {opacity:1, x:-1}, 0.2, '-=0.5' );
     },
     tolerance: 200
  });
  $('#team').onScreen({
     container: window,
     direction: 'vertical',
     doIn: function() {
       $(".menu-item").removeClass("active");
       $(".menu-3").addClass("active"); 

       var $profile = $('.team-members ul'),
          $teamTitle = $('#team .heading'),
          tlteam = new TimelineMax({delay:0.1});

          tlteam
                .to($teamTitle, 1, {autoAlpha:1, y:-10, ease:Back.easeOut.config(1.7)})
                .staggerTo($profile, 0.5, {opacity:1, y:-10, ease:Back.easeOut.config(1.7)}, 0.2, '+=0.3');     
     },
     tolerance: 200
  });
  $('#contact').onScreen({
     container: window,
     direction: 'vertical',
     doIn: function() {
       $(".menu-item").removeClass("active");
       $(".menu-4").addClass("active");

       var $contactTitle = $('#contact .heading'),
           $email = $('#contact li:nth-child(2)'),
           tlcontact = new TimelineLite({delay:1});

           tlcontact
                    .to($contactTitle, 1, {autoAlpha:1, y:15, ease:Back.easeOut.config(1.7)})
                    .to($email, 1, {opacity:1, y:10}, "-=0.4");
     },
     tolerance: 200
  });


var $top = $('.top'),
    $bot = $('.bot'),
    $strike = $('.slash'),
    $ninja = $('.container-ninja'),
    $badge = $('.google-badge'),
    tlSlash = new TimelineMax({delay:1});
// {paused:true}

tlSlash.to($strike, 0.1, {opacity:1, x:'800em',y:'-90em', scale:2} )
      .to($strike, 0.05, {opacity:0, display: 'none'})
      .to('.container-title-ver', 0.01, {x:'5.2em'}, '-=0.06')
      .to($top, 0.5, {x: '-15em', ease: Power2.easeOut}, '+=0.5')
      .to($ninja, 0.4, {opacity:1, x:'25em', ease: Power2.easeOut}, '+=0.5')
      .to($ninja,0.2, {x:'60em', y:'-180em', rotation:270, ease: Power2.easeOut } )
      .to($ninja,0.2, {x:'130em', y:'0em', rotation:360, ease: Power2.easeOut } )
      .to($ninja,0.3, {x:'190em', y:'-250em', rotation:500 } )
      .to($ninja,0.25, {x:'250em', y:'-150em', rotation:720, ease: Power2.easeOut } )
      .to($ninja,0.25, {x:'330em', y:'-220em', ease: Power2.easeOut} )
      .to($ninja,0.25, {x:'400em', y:'-150em', ease: Power2.easeOut} )
      .to($ninja,0.15, {x:'470em', y:'-200em', ease: Power2.easeOut})
      .to($ninja,0.5, {x:'530em', y:'0em', ease: Power2.easeOut} )
      .to($badge, 0.5, {opacity:1, y:'-50em'});




}); /////END/////