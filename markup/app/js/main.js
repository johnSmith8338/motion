$(document).ready(function () {
    anchorLinks();
});

// Navigation anchor links
function anchorLinks() {
    $(".nav-list a").on("click", function (e) {
        var anchor = $(this);
        $(".nav-list li").removeClass('active');
        anchor.parent().addClass('active');
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
    });
}

// Hidden menu on click
$( document ).ready(function() {

$( ".cross" ).hide();
$( ".hidden-menu" ).click(function() {
$( ".nav-holder" ).slideToggle( "slow", function() {
$( ".hidden-menu" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".nav-holder" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hidden-menu" ).show();
});
});

});

// Portfolio slider
$(".portfolio-list").slick({
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<div class="portfolio-prev-arrow"><div class="chevron-left"></div></div>',
    nextArrow: '<div class="portfolio-next-arrow"><div class="chevron-right"></div></div>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// tweets slider
$(".tweets-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    draggable: false,
    prevArrow: '<div class="tweets-prev-arrow"><div class="chevron-left"></div></div>',
    nextArrow: '<div class="tweets-next-arrow"><div class="chevron-right"></div></div>'
});
