$(document).ready(function(){
//WAYPOINTS
$(".fancybox-thumb").fancybox({
    prevEffect	: 'none',
    nextEffect	: 'none',
    helpers	: {
        title	: {
            type: 'outside'
        },
        thumbs	: {
            width	: 50,
            height	: 50
        }
    }
});

$('.me').hide();
$('.waypoint1').waypoint(function() {
  $('.me').fadeIn('slow')
}, { offset: '100%' });

$('.mac').hide();
$('.waypoint2').waypoint(function() {
  $('.mac').fadeIn('slow')
}, { offset: '100%' });

$('.site1').hide();
$('.site2').hide();
$('.site3').hide();
$('.site4').hide();
$('.site5').hide();
$('.site6').hide();
$('.waypoint3').waypoint(function() {
    $('.site1').fadeIn('slow')
    $('.site2').delay(300).fadeIn('slow')
    $('.site3').delay(600).fadeIn('slow')
    $('.site4').delay(900).fadeIn('slow')
    $('.site5').delay(1200).fadeIn('slow')
    $('.site6').delay(1500).fadeIn('slow')
}, { offset: '100%' });

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


//navigation scroll to
    $('#home').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
    });
    $("#about").click(function() {
        $('html,body').animate({
            scrollTop: $(".about").offset().top},600);
    });
    $("#services").click(function() {
        $('html,body').animate({
            scrollTop: $(".services").offset().top},600);
    });
    $("#contact").click(function() {
        $('html,body').animate({
            scrollTop: $(".contact").offset().top},800);
    });
    
    
})
//CONTACT FORM - CUSTOM VALIDATION - MANDRILL
function formSubmit() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    if (name.length > 1) {
        $('#name').removeClass('error')
        if (email.length > 1) {
            $('#email').removeClass('error')
            if (message.length > 1) {
                $('#message').removeClass('error')
                var formData = {
                    "key": "1-mhUdqJ5OFL3LXYxqyeFA",
                    "message": {
                        "text": message,
                        "subject": "Portfolio Contact",
                        "from_email": email,
                        "from_name": name,
                        "to": [
                            {
                            "email": "carbonizon@gmail.com",
                            "name": "Chris Kanze",
                            "type": "to"
                            }
                        ]
                    }
                };
    
                $.ajax({
                    url : "https://mandrillapp.com/api/1.0/messages/send.json",
                    type: "POST",
                    data : formData,
                    success: function(data, textStatus, jqXHR){
                        $('#name').val('')
                        $('#email').val('')
                        $('#message').val('')
                        $('#name').removeClass('error')
                        $('#email').removeClass('error')
                        $('#message').removeClass('error')
                        $('.dropline').replaceWith('<p class="lead success dropline">Line Dropped!</p>')
                    },
                    error: function (jqXHR, textStatus, errorThrown){
                        $('#email').addClass('error')
                        $('#email').focus()
                    }
                });
            }
            else {
                $('#message').addClass('error')
                $('#message').focus()
            }
            
        }
        else {
                $('#email').addClass('error')
                $('#email').focus()
        }
    }
    else {
                $('#name').addClass('error')
                $('#name').focus()
    }
    
    
}