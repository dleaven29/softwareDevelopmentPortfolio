//The code below is for the page overlay with the two black arrows moving in a circular direction
$(window).on("load", function(){
    //The code directly below fades out the icon image
    $(".loader .inner").fadeOut(1500, function(){
    //The code directly below will fade out the background color after the icon image
        $(".loader").fadeOut(2000);
    });
})
//The end of the page overlay section
/**The superslides code will run once the document is ready.
 Then the code will focus on the image slider at top of webpage **/
$(document).ready(function(){
    $('#slides').superslides({
        animation:'fade',
        play:5000,
        pagination:false
    });

    var typed=new Typed(".typed",{
        strings:["Master of Science Information Technology","Software Engineer", "Web Developer"],
        typeSpeed: 70,
        loop: true,
        startDelay:1000,
        showCursor:false
    });
//The code below is for the navigational bar section
$("#navigation li a").click(function(e){
    e.preventDefault();
    var targetElement=$(this).attr("href");
    var targetPosition=$(targetElement).offset().top;
    $("html, body").animate({scrollTop: targetPosition}, 1500);
});

const nav=$("#navigation");
const navTop=nav.offset().top;

$(window).on("scroll", stickyNavigation);
function stickyNavigation(){
    var body=$("body");
    if($(window).scrollTop() >= navTop){
        body.css("padding-top", nav.outerHeight() +"px");
        body.addClass("fixedNav");

    }else{
        body.css("padding-top",0);
        body.removeClass("fixedNav");
    }
}
 
});
