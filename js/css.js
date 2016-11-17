//Samir Khoulani
$(function() {

    var bgColor = $('li#one').css('background-color');
    $('ul').append("<p>" + bgColor + "</p>");

    $("li").each(function(){
        $(this).css({
            "background-color": "#c5a996",
            "border" : "1px solid white",
            "color" : "black",
            "font-family": "georgia",
            "text-shadow": "none"
        });

    });
});
