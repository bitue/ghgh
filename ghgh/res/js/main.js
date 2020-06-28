
//mixitup funtion

var mixer = mixitup(".grid-portfoluio");

//scrollify
//$(function() {
//          $.scrollify({
//            section : ".scroll",
//            setHeights: false,
//             scrollSpeed: 1000
//          });
//        });


$(document).ready(function(){
   $(".menu-hum").css("display","none");
    $(".menu ion-icon").click(function(){
        $(".menu-hum").slideDown();
    });
     $(".cross-btn ion-icon  ").click(function(){
        $(".menu-hum").slideUp();
    });
    $(".me ,.menu-hum").click(function(){
         $(".menu-hum").slideUp();
    });
    
    
});

$(function(){
    $(".me").click(function(){
        $("html,body").animate({
         scrollTop:  $($.attr(this,"href")).offset().top 
        },1000);
        return false;
    });
});