$(document).ready(function(){
    $('#displayCartData').mouseenter(function () { 
        $('#cartData').css('display', 'block');
    });
    $('#displayCartData').mouseleave(function () { 
        $('#cartData').css('display', 'none');
    });
});