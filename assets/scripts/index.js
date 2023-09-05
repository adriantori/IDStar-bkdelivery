$(document).ready(function () {
    //cart data
    $('#displayCartData').mouseenter(function () {
        $('#cartData').show();
    });
    $('#displayCartData').mouseleave(function () {
        $('#cartData').hide();
    });
    $('#cartData').mouseenter(function () {
        $('#cartData').show();
    });
    $('#cartData').mouseleave(function () {
        $('#cartData').hide();
    });

    //hamburger mobile
    $(".cross").hide();
    $(".menu").hide();
    $(".hamburger").click(function () {
        $(".menu").animate({
            height: "toggle",
            opacity: "toggle"
        }, "normal");
        $(".hamburger").hide();
        $(".cross").show();
    });

    $(".cross").click(function () {
        $(".menu").animate({
            height: "toggle",
            opacity: "toggle"
        }, "normal");
        $(".cross").hide();
        $(".hamburger").show();
    });

    //carousel
    $(".owl-carousel").owlCarousel({
        dots: true,
        items: 1,
        dotsEach: true,
        loop: true,
        autoplay: true,
        nav: true,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });

});