$(document).ready(function () {
    function checkScroll() {
        var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

        if ($(window).scrollTop() > startY) {
            $('.navbar').addClass("scrolled");
            $('#nav-brand').addClass("scrolled");
            $('.scroll-link').addClass("scrolled");
        } else {
            $('.navbar').removeClass("scrolled");
            $('#nav-brand').removeClass("scrolled");
            $('.scroll-link').removeClass("scrolled");
        }
    }

    if ($('.navbar').length > 0) {
        $(window).on("scroll load resize", function () {
            checkScroll();
        });
    }
});