$(document).ready(function () {
    $(".overview-edu").mouseover(function () {
        $(this).css("background-color", "#66CC99");
        $('.fa-graduation-cap').css("color", "white");
        resetDesc();
        eduDesc();
        
        });
    $(".overview-edu").mouseout(function () {
        $(this).css("background-color", "transparent");
        resetColor();
        });
    
    $(".overview-code").mouseover(function () {
        $(this).css("background-color", "#66CC99");
        $('.fa-code').css("color", "white");
        resetDesc();
        codeDesc();
        
        });
     $(".overview-code").mouseout(function () {
        $(this).css("background-color", "transparent");
         resetColor();
        
        });
    $(".overview-int").mouseover(function () {
        $(this).css("background-color", "#66CC99");
        $('.fa-heart').css("color", "white");
        resetDesc();
        intDesc();
        
        });
     $(".overview-int").mouseout(function () {
        $(this).css("background-color", "transparent");
         resetColor();
        });
});

function resetDesc (){
    $('.profile-desc-body').children("p").remove();
    $('.profile-desc-head').children("p").remove();
}
function resetColor(){
    $('.overview-fa').css("color", "#66CC99");
}

function eduDesc (){
    $('<p>Education</p>').appendTo('.profile-desc-head').hide().fadeIn();
    $('<p>Currently a 3rd year accounting and finance student at the University of Waterloo</p>').appendTo('.profile-desc-body').hide().fadeIn();
    $('<p><a href="https://uwaterloo.ca/school-of-accounting-and-finance/future-undergraduates" target="_blank">School of Accounting and Finance</a></p>').appendTo('.profile-desc-body').hide().fadeIn();
}
function codeDesc (){
    $('<p>How my coding journey began..</p>').appendTo('.profile-desc-head').hide().fadeIn();
    $('<p>I was first exposed to the world of code in highschool</p>').appendTo('.profile-desc-body').hide().fadeIn();
    $('<p>My journey was short lived</p>').appendTo('.profile-desc-body').hide().fadeIn();
    $('<p>But the UW environment has reinspired me</p>').appendTo('.profile-desc-body').hide().fadeIn();
}

function intDesc (){
    $('<p>Current Interests</p>').appendTo('.profile-desc-head').hide().fadeIn();
    $('<p>IT Solutions</p>').appendTo('.profile-desc-body').hide().fadeIn();
    $('<p>Wealth Management</p>').appendTo('.profile-desc-body').hide().fadeIn();
    $('<p>Mobile App Development</p>').appendTo('.profile-desc-body').hide().fadeIn();
}