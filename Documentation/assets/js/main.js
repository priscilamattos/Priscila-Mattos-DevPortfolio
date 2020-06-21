$("#burger_btn").on("click", function(){
    $("#leftSide").toggleClass("left");
    $("#rightSide").toggleClass("fullContent");
});

$("#burger_btn_mob").on("click", function(){
    $("#leftSide").toggleClass("leftMob");
});

$(document).ready(function(){
    $('a[href*="#"]').on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
    return false;
    });
});

