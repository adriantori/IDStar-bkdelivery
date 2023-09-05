$(document).ready(function () {
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

    $(".cross").hide();
    $(".menu").hide();
    $(".hamburger").click(function () {
        $(".menu").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".hamburger").hide();
        $(".cross").show();
    });

    $(".cross").click(function () {
        $(".menu").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".cross").hide();
        $(".hamburger").show();
    });
});