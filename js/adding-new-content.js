//Samir Khoulani
$(function() {

    $("ul").before("<p class = 'notice'>Just updated</p>");

    $("li.hot").prepend("+ ");
    var $newNode = $("<li><em>gluten free</em> soy sauce </li>");
    $("li:last").after($newNode);

});
