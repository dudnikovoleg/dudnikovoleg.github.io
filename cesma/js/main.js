'use strict';


(function ($) {
    $(document).ready(function() {


        /*  Project slider
        ----------------------------------*/
        $("#image-gallery").lightSlider({
            gallery:true,
            item:1,
            vertical:true,
            controls: false,
            verticalHeight:550,
            vThumbWidth: 180,
            thumbItem:4,
            auto: true,
            pauseOnHover: true,
            enableTouch: true,

            pause: 5000,

            responsive : [

                {
                    breakpoint:1280,
                    settings: {
                        thumbItem:3
                    }
                }  ,              {
                    breakpoint:980,
                    settings: {
                        thumbItem:2.2
                    }
                },
                {
                    breakpoint:768,
                    settings: {
                        thumbItem:3,
                        vThumbWidth: 85

                    }
                },
                {
                    breakpoint:480,
                    settings: {
                        thumbItem:2.2,
                        vThumbWidth: 85

                    }
                }

            ]
        });




        $("#headerImgBg").lightSlider({
            item:1,
            pause: 5000,
            auto: true,
            controls: false,
            pager: false,
            enableTouch: true,
            slideMargin: 0,
            loop: true,
        });


        (function () {
            $('.publications .name li').eq(0).addClass('active');
            $('.publications .link').eq(0).addClass('show');

            $('.publications .name li').on('click', function () {
                $('.publications .name li').removeClass('active');
                $('.publications .link').removeClass('show');
                $(this).addClass('active')
                $('.publications .link').eq( $('.publications .name li.active').index()).addClass('show');
            })
        })();

        (function () {
            $('header .main-menu > li').on('click touchend', function () {
                $('header .main-menu > li').removeClass('active');
                    $(this).addClass('active');
                console.log('dwdw')

            })
        })();


        $('#menu-toggle').click(function(){
            $(this).toggleClass('open');
            $('body').toggleClass('menu-open')
        });


    });
})(jQuery);

