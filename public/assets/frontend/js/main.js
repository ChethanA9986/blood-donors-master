;(function($){

    $(document).ready(function(){
        /*
        =============================
            Recent Donor
        =============================
        */
        var recentDonors = $('.recently-donated-donors-carousel');
        recentDonors.owlCarousel({
            margin:30,
            loop: true,
            autoplay: true,
            autoplayTimeout: 9000,
            smartSpeed: 2000,
            responsive:{
                  // breakpoint from 0 up
                0 : {
                    items:1
                },
                // breakpoint from 480 up
                480 : {
                    items: 2
                },
                // breakpoint from 768 up
                768 : {
                    items: 2
                },
                1024:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        });
         /*
        =============================
            Committee Carousel
        =============================
        */
        var recentDonors = $('.our-dedicated-team-carousel');
        recentDonors.owlCarousel({
            margin:30,
            loop: true,
            autoplay: true,
            autoplayTimeout: 9000,
            smartSpeed: 2000,
            responsive:{
                  // breakpoint from 0 up
                0 : {
                    items:1
                },
                // breakpoint from 480 up
                480 : {
                    items: 2
                },
                // breakpoint from 768 up
                768 : {
                    items: 2
                },
                1024:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        });
         /*
        =============================
            Testimonial Carousel
        =============================
        */
        var recentDonors = $('.testimonial-carousel');
        recentDonors.owlCarousel({
            margin:30,
            loop: true,
            autoplay: true,
            autoplayTimeout: 9000,
            smartSpeed: 2000,
            responsive:{
                  // breakpoint from 0 up
                0 : {
                    items:1
                },
                // breakpoint from 480 up
                480 : {
                    items: 1
                },
                // breakpoint from 768 up
                768 : {
                    items: 1
                },
                1024:{
                    items: 2
                },
                1200:{
                    items: 2
                }
            }
        });
        /*
        =============================
            Jquery Counterup
        =============================
        */

        $('.count-num').rCounter ();

        if($('.nice-select').length > 0){
            $('.nice-select').niceSelect();
        }
    });


   

})(jQuery);