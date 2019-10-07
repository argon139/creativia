$.fn.parse = function(){

    $('[data-parse]').mouseenter(function() {
        var target = $(this).attr('data-parse');
        $(target).addClass('active');
    });
    
    $('[data-parse]').mouseleave(function() {
        var target = $(this).attr('data-parse');
        $(target).removeClass('active');
        });
        
}
