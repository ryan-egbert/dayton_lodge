$(document).ready(function () {
    $(".menu-item").on('mouseover', function () {
        $(this).css('background-color', '#4e86e7');//.css('color', 'black');
    });
    $(".menu-item").on('mouseout', function () {
        $(this).css('background-color', 'inherit');//.css('color', 'white');
    });
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
      
        $('#header-image').css({
          opacity: function() {
            var elementHeight = $(this).height();
            return (elementHeight - scrollTop) / elementHeight + 0.5;
          }
        });
    });
});