jQuery(function($){
    $(document).ready(function() {
        console.log($('body'));
        $('.autoplay').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
        if($('.form-order').length) {
            $('form-order').parsley().on('field:validated', function() {
                var ok = $('.parsley-error').length === 0;
                $('.bs-callout-info').toggleClass('hidden', !ok);
                $('.bs-callout-warning').toggleClass('hidden', ok);
              })
              .on('form:submit', function() {
                return false; // Don't submit form for this demo
              });
        }   
    });
});