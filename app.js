// **this is only scroll arrow up function jo bottom se uppr leke ata hai 
// **agar me 300px uppr se niche tak scroll kru toh ye arrow button show hoga 


$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            $('.fa-arrow-up').css({
                "opacity" : "1",
                "pointer-events" : "auto",
            });
        }else{
            $('.fa-arrow-up').css({
                "opacity" : "0",
                "pointer-events" : "none",
            });
        }
    });

    $('.fa-arrow-up').click(function (){
        $('html').animate(
            {scrollTop : 0}, 2500 //**i use here animation or time delay for smoothness
        )
    });

});


