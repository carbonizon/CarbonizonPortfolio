$(document).ready(function(){
//jQuery code which toggles mobile nav bar on click of a
$(function() {
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
        });
    });
//Calling bxslider
$('.bxslider').bxSlider();

})
