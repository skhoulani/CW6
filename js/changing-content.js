//Samir Khoulani
$(function() {

    //My original solution
    //$("li#two").replaceWith("<li id='two' class='hot'><em>almonds</em></li>");
    //$("li#three").replaceWith("<li id='three' class='hot'><em>honey</em></li>");

    //Correct solution below
    $("li:contains(pine)").text("almonds");

    $("li.hot").html(function() {
        return '<em>' + $(this).text() + '</em>';
    });

    $("li#one").remove();


});
