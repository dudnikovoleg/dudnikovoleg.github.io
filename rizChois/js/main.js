'use strict';

(function ($) {

    $(document).ready(function () {




        /************************/
        /*** Function initial ***/
        /************************/


        init();

        function init() {
            searchForm();//Header top search form
            sliderTop();//Header top slider
            mapPosition();// Position map
            sliderBottom();//Header bottom slider
            contentMinHeight()

        }




        /***************************/
        /*** Content min height ***/
        /*************************/



        function contentMinHeight() {
            $('.content').css('min-height', 0);

            if ($(document).height() <= $(window).height()){
                $('.content').css('min-height', $(window).height()
                    - $('footer').height()   + 'px');
            }


        }





        /*******************************/
        /*** Blog mob slider resize ***/
        /*****************************/




        $(window).on(' load', function () {
            var windowsWidth = (window.innerWidth);
            if (windowsWidth >= 767)return;
            blogSlider()

            $(".tag-cloud").append($(".ss"));

        });


        $(window).resize(mapPosition, contentMinHeight);


        /************************/
        /*** Search form width ***/
        /************************/




        function searchForm() {

            $('.search-icon').hover(
                function () {
                    $('.form-control').addClass('open');
                },
                function () {
                    $('.search-icon').removeClass('open');
                    $('.form-control').removeClass('open');
                }
            );
        }




        /************************/
        /*** Slider plugin init ***/
        /************************/



        /********** Slider header top ***********/


        function sliderTop() {

            $('#slider-top').slick({
                speed: 800,
                fade: true,
                autoplay: true,
                dots: true,
                arrows: false,
                slidesToScroll: 1,
                infinite: true,
                autoplaySpeed: 3000,

                customPaging: function (i) {

                    return '<span class="custom_dots"></span>';
                }

            }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {

                $('.slider-img').removeClass('animated');
                $('.slider-img').eq(nextSlide).addClass('animated');

            });
        }


        /*********** Slider header bottom ***********/


        function sliderBottom() {


            $('#slider-bottom').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                variableWidth: true,
                prevArrow: $('.prev-arrow'),
                nextArrow: $('.next-arrow'),
                responsive: [{
                    breakpoint: 768,
                    settings: "unslick"

                }]



            }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {

                $('.first, .last, .middle').off();

                $(' .slick-list').removeClass('interval-middle interval-left interval-right')
                $('.ver-el').removeClass('first last middle scale-item')

            }).on('afterChange', function (event, slick, currentSlide, nextSlide) {
                sliderPosition();
                hoverItem();

            });


            function sliderPosition() {

                var showItem        = $('.slider-bottom_item.slick-active'),
                    firstItem       = showItem.eq(0),
                    middleItem      = showItem.eq(1),
                    lastItem        = showItem.eq(2);

                firstItem.children(".ver-el").addClass('first');
                middleItem.children(".ver-el").addClass('middle');
                lastItem.children(".ver-el").addClass('last');
            }
            sliderPosition();//Position slider

            function hoverItem() {

                var firstEll    = $('.first'),
                    middleEll   = $('.middle'),
                    lastEll     = $('.last');


                /***** First element hover event *****/


                firstEll.on(' mouseenter', function () {
                    $(this).addClass('scale-item');
                    $(' .slick-list').addClass('interval-left')
                });
                firstEll.on('mouseleave', function () {
                    $('.ver-el').removeClass('scale-item');
                    $(' .slick-list').removeClass(' interval-left')
                });


                /***** Middle element hover event *****/


                middleEll.on('mouseenter', function () {
                    $(this).addClass('scale-item');
                    $(' .slick-list').addClass('interval-middle')
                });
                middleEll.on('mouseleave', function () {
                    $('.ver-el').removeClass('scale-item');
                    $(' .slick-list').removeClass('interval-middle')
                });


                /***** Last element hover event *****/


                lastEll.on(' mouseenter', function () {
                    $(this).addClass('scale-item');
                    $(' .slick-list').addClass('interval-right')
                });

                lastEll.on('mouseleave', function () {
                    $('.ver-el').removeClass('scale-item');
                    $(' .slick-list').removeClass(' interval-right')
                });

            }


            hoverItem();//Hover effect
            sliderPosition();//Position slider

        }




        /*********** Mobile blog slider ***********/

        function blogSlider() {
            $('#mob-slider').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                variableWidth: true
            });

        }



        /************* Team slider **************/

        $('#team-slider').slick({
            slidesToShow: 3,
            prevArrow: $('.team-slider .prev-arrow'),
            nextArrow: $('.team-slider .next-arrow')
        })

        /************* Client  and partner slider **************/

        $('#clients-slider').slick({
            slidesToShow: 9,
            prevArrow: $('.clients-slider .prev-arrow'),
            nextArrow: $('.clients-slider .next-arrow')
        });

        $('#partner-slider').slick({
            slidesToShow: 9,
            prevArrow: $('.partner-slider .prev-arrow'),
            nextArrow: $('.partner-slider .next-arrow')
        });







            /****************************/
        /*** Google map position ***/
        /**************************/




        function mapPosition() {
            if (!$('#map').length) return;
            var ww = ($(window).width() - ( $(".map-wrap").offset().left + $(".map-wrap").outerWidth()))
            if (ww <= 0) {
                $('#map').css('left', ww / 2 + 50 + 'px')
            }
        }





        /***********************/
        /*** Top fixed menu ***/
        /*********************/

        (function () {
            $( window ).on('scroll load',function() {

                var header = $('header'),
                    topPoint = header.offset().top;

                if (topPoint > 100){
                    header.addClass('scroll-start')
                }
                else{
                    header.removeClass('scroll-start')
                }
            })
        })();


        $('#menu-toggle').click(function () {
            $(this).toggleClass('open');
            $('.header-nav, body').toggleClass('open');

        });




        /***********************/
        /*** Blog slice text ***/
        /*********************/


        $(".blog-content .text ").each(function () {

            var size            = 19,
                newsContent     = $(this),
                newsText        = newsContent.text(),
                newsTextValid   = newsText.replace(/\s+/g, ' '),
                newsTextLength  = newsTextValid.split(' ').length,
                newsTextArr     = newsTextValid.split(' ', size),
                newsTextStr     = newsTextArr.join(' ');

            if (newsTextLength > size) {
                $(this).text(newsTextStr + ' ...');
            }
        })


    })
})(jQuery);


