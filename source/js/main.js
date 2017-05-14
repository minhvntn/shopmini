jQuery(function($){
    $(document).ready(function() {
        console.log($('body'));
        $('.autoplay').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    });
});