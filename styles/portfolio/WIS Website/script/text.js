(function($){
    var hero = $('#hero'),
        herologo = $('#hero p'),
        heroh1 = $('#hero h1'),
        heroh5 = $('#hero h5'),
        joinbtn = $('.join-btn'),
        navli = $('#nav li'),
        tlHero = new TimelineLite({paused:true}),
        
        dot=$('.dot'),
        loader=$('#loader'),
        tlLoader = new TimelineMax({repeat:2, onComplete: loadContent});
    // repeat:-1 --> repeats infintely
  
   
    tlHero
        .set(hero, {autoAlpha:1})
        .from(hero, 0.2, {y:-10, ease:Power1.easeOut})
        .from(herologo,1, {scale:3 ,autoAlpha:0, ease:Power1.easeOut})
        .from(heroh1,1, {y :10,autoAlpha:0, ease:Power1.easeOut}, '-=0.6')
        .from(heroh5,1, {y :5,autoAlpha:0, ease:Power1.easeOut}, '-=0.5')
        .from(joinbtn,1, {x :20,autoAlpha:0, ease:Power1.easeOut}, '-=0.5')
        .staggerFrom(navli, 0.5, {y:-10,scale:1.3 , autoAlpha:0, ease:Power1.easeOut}, 0.15);

//loader timeline    
    tlLoader
        .staggerFromTo(dot, 0.5,
                       {y: 0, autoAlpha:0},
                       {y:20, backgroundColor: '#34495e', autoAlpha:1, ease:Back.easeInOut}, 
                      0.1)
        .to(loader,0.2, {scale:0.95 ,autoAlpha:1, ease:Power0.easeNone});
    
function loadContent(){
    var tlLoaderOut = new TimelineLite({onComplete: contentIn});
    tlLoaderOut
        .set(dot, {backgroundColor: 'white'})
        .to(loader, 0.3, {scale:1, autoAlpha: 1, ease:Power0.easeNone})
    .staggerFromTo(dot, 0.5,
                       {y: 0, autoAlpha:0},
                       {y:20, autoAlpha:1, ease:Back.easeInOut}, 
                      0.1, 0
        )
    .to(loader, 0.3, {y: -150, autoAlpha:0, ease:Back.easeIn}, '+=0.3');
}
    
function contentIn(){
    tlHero.play();
}
    

    
 //scroll magic PIN
/*    var crtl = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });
    
        //create scene
        $("section").each(function(){
            new ScrollMagic.Scene({
                triggerElement:this,
            })
            .setPin(this)
            /*.addIndicators()*/
     /*       .loglevel(3)
            .addTo(crtl);
        });*/   

        //add class
        /*var wh = window.innerHeight;

            new ScrollMagic.Scene({
                offset:wh*2
            })
            .setClassToggle("section#about", "is-active")
            .addTo(crtl);*/
    
    
//STEM Stats

    var statchart1=$('#chart'),
        statsh1 =$('#stats h1'),
        statssource=$("#stats p"),
        statslegend = $('#stats ul li'),
        statsbtn = $('#stats .button'),
        col1= $('#stats #chart tbody tr td:nth-child(1)'),
        col2=$('#stats #chart tbody tr td:nth-child(2)'),
        col3=$('#stats #chart tbody tr td:nth-child(3)'),
        col4=$('#stats #chart tbody tr td:nth-child(4)'),
        tlChartHeading = new TimelineLite();
        tlStatTable= new TimelineLite();
    
    tlChartHeading
        .from(statsh1,0.9, {y:-30 ,autoAlpha:0, ease:Back.easeInOut})
        .from(statssource,0.5, {x:-20 ,autoAlpha:0, ease:Back.easeInOut})
        .staggerFrom(statslegend, 0.3, {scale:0.8 , autoAlpha:0, ease:Power1.easeOut}, 0.15)
        .staggerFrom(statsbtn, 0.2, {scale:0.8 , autoAlpha:0, ease:Power1.easeOut}, 0.15);
    tlStatTable
        
        .staggerFromTo(col1,1,
                       {y:30 ,autoAlpha:0},
                       {y:0 ,autoAlpha:1, ease:Back.easeInOut},
                      0.1,0)
        .staggerFrom([col2, col4],0.5,
                       {cycle:{
                        x: [10,-10]},
                       autoAlpha:0,
                      autoAlpha:0, ease:Power1.easeOut}, '-=0.5')
        .staggerFrom(col3, 0.2, {cycle:{
            x: [30, -30]
        } , autoAlpha:0, ease:Power1.easeOut}, 0.15);
    

var controller = $.superscrollorama({
			triggerAtCenter: false,
			playoutAnimations: true
		});
    
//Stat buttons
//salary
    var chart2 = $('#chart2');
        c2col1= $('#stats #chart2 tbody tr td:nth-child(1)'),
        c2col3=$('#stats #chart2 tbody tr td:nth-child(3)'),
        tlStatTable2= new TimelineLite({paused:true});
    
 
    tlStatTable2
        .staggerFromTo(c2col1,1,
                       {y:30 ,autoAlpha:0},
                       {y:0 ,autoAlpha:1, ease:Back.easeInOut},
                      0.1,0)
        .staggerFromTo(c2col3,1,
                       {x:30 ,autoAlpha:0},
                       {x:0 ,autoAlpha:1, ease:Back.easeInOut},
                      0.1,0);      
 
//ABOUT
    var abouth11 = $('#about .mission'),
        aboutp11 = $('#about .description'),
        abouth12= $('#about .obj'),
        aboutpanel=$('#about .panel');
    
    
    var tlAbout = new TimelineMax();
    
    tlAbout
        .from(abouth11, 1, {y:-30, autoAlpha: 0, ease:Back.easeInOut})
        .from(aboutp11, 1, {y:-30, autoAlpha: 0, ease:Back.easeInOut}, '-=0.7')
        .from(abouth12, 1, {y:-30, autoAlpha: 0, ease:Back.easeInOut}, '-=0.7')
        .staggerFrom(aboutpanel, 0.5, {y:-10, autoAlpha:0, ease:Back.easeInOut}, 0.15, '-=0.5');   
  
//TEAM
    var teamh1 = $('#team h1'),
        teamcol = $('#team .members .column'),
        teamcontact = $('#team h4'),
        tlTeam = new TimelineMax();
    
    tlTeam
        .from(teamh1, 1, {y:-30, autoAlpha: 0, ease:Back.easeInOut})
        .staggerFrom(teamcol, 0.5, {cycle: {y:[-20,20]}, autoAlpha:0, ease:Back.easeInOut}, 0.15, '-=0.5')
        .from(teamcontact, 1, {x:-30, autoAlpha: 0, ease:Back.easeInOut}, '-=0.6');  

    
//EVENTS
    var eventsh1= $('#events h1'),
        eventscol=$('#events .column'),
        tlEvents= new TimelineLite();
    
    tlEvents
        .from(eventsh1, 1, {y:-30, autoAlpha:0, ease:Back.easeInOut})
        .staggerFrom(eventscol, 0.5, {cycle: {y:[-20,20]}, autoAlpha:0, ease:Back.easeInOut}, 0.15, '-=0.5');
    
    
    
//SPONSORS
    var sponsorsh1 = $('#sponsors h1'),
        sponsorscol = $('#sponsors .logo .column'),
        tlSponsors = new TimelineMax();
    
    tlSponsors
        .from(sponsorsh1, 1, {y:-30, autoAlpha: 0, ease:Back.easeInOut})
        .staggerFrom(sponsorscol, 0.5, {cycle: {y:[-20,20]}, autoAlpha:0, ease:Back.easeInOut}, 0.15, '-=0.5');
    
    
    
controller.addTween('#stats', tlChartHeading, 0, -600, true);
controller.addTween('#stats', tlStatTable, 0, -600, true);
controller.addTween('#about', tlAbout, 0, -600, true);
controller.addTween('#team', tlTeam, 0, -600, true);
controller.addTween('#events', tlEvents, 0, -600, true);
controller.addTween('#sponsors', tlSponsors, 0, -600, true);

    
    
    
    

 $('#btnEdu').on('click', function(){
    $(this).addClass('active-btn');
     $('#btnPay').removeClass('active-btn');
      $('#chart').css('opacity', '1');
     $('#chart2').css('opacity', '0');
     tlStatTable.play();
     tlStatTable2.pause(0, true);
});  
  
 $('#btnPay').on('click', function(){
    $(this).addClass('active-btn');
     $('#btnEdu').removeClass('active-btn');
     $('#chart').css('opacity', '0');
     $('#chart2').css('opacity', '1');
     tlStatTable2.play();
     tlStatTable.pause(0, true);
});   
    
    
    
    
    
    
    
    
    
    
})(jQuery); 




















