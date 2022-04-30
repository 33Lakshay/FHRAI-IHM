

var hHeight = 0;
var wWidth = 0;
var mobDark = '';
var mobOffSet = 0;

$(document).ready(function () {

    hHeight = $(window).height();
    wWidth = $(window).width();

    mobDark = $('.mobDark');
    mobOffSet = mobDark.offset();
  

    mobileNav(hHeight, wWidth, mobOffSet);


    $('#popClick').on('click', function () {
        $(".mobile_nav").animate({ 'left': '-81%' }, 'fast');
    });



});




function mobileNav(height,Width,offset) {
    var mobHeight = height;
    var mobWidth = Width;
    var darkOff = offset;

    if (mobWidth < 780) {
        $('.mobile_nav').css({ 'height': mobHeight });
        $('.mobDark').css({'height': mobHeight-darkOff.top });
    }
}