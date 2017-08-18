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
            $('.content').css('min-height',  '90px');

            if ($(document).height() <= $(window).height()){
                $('.content').css('min-height', $(window).height()
                    - $('footer').height() + 'px');
            }
        }

        $(window).resize(contentMinHeight)



        // /************************/
        // /*** Cookie massege  ***/
        // /**********************/
        //
        //
        // (function () {
        //     var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)massegeRead\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        //     if (cookieValue) return;
        //     $('.cookie-msg').addClass('open');
        //     $('.cookie-btn').on('click', function () {
        //         $('.cookie-msg').removeClass('open');
        //         document.cookie = "massegeRead=yes";
        //     })
        // })();




        /************************/
        /*** Search form width ***/
        /************************/




        function searchForm() {
            var  valueSearch = $('.form-control').val();
            $('.search-icon, .search-form .form-control').on('mouseenter ' , function () {
                valueSearch = $('.form-control').val();
                $('.search-form .form-control').addClass('open');
            }).on('mouseleave', function () {
                valueSearch = $('.form-control').val();
                if (!valueSearch) {
                    $('.search-icon').removeClass('open');
                    $('.search-form .form-control').removeClass('open');
                }
            }).on('keyup', function () {
                valueSearch = $('.form-control').val();
                $('.search-form .form-control').addClass('open');
                if (!valueSearch) {
                    $('.search-icon').removeClass('open');
                    $('.search-form .form-control').removeClass('open');
                }
            })
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
                infinite: false,
                prevArrow: $('.prev-arrow'),
                nextArrow: $('.next-arrow'),
                responsive: [{
                    breakpoint: 768,
                    settings: "unslick"

                }]



            }).on('beforeChange', function ( slick) {

                $('.first, .last, .middle').off();

                $(' .slick-list').removeClass('interval-middle interval-left interval-right')
                $('.ver-el').removeClass('first last middle scale-item')

            }).on('afterChange', function () {
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


                firstEll.on('mouseenter', function () {
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


        $(window).on('resize load', function () {
            var windowsWidth = (window.innerWidth);
            if (windowsWidth >= 767){
                if ($("#mob-slider").find('.slick-list').length) {
                    $('#mob-slider').slick('unslick');
                }

            }
            else{
                if (!$("#mob-slider").find('.slick-list').length){
                    $('#mob-slider').slick({
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        variableWidth: true
                    });
                }
            }
        });



        /************* Team slider **************/

        $('#team-slider').slick({
            infinite: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    variableWidth: true
                }
            }],
            slidesToShow: 3,
            prevArrow: $('.team-slider .prev-arrow'),
            nextArrow: $('.team-slider .next-arrow')
        });

        /************* Client  and partner slider **************/

        $('#clients-slider').slick({
            // variableWidth: true,
            slidesToShow: 9,
            prevArrow: $('.clients-slider .prev-arrow'),
            nextArrow: $('.clients-slider .next-arrow'),
            responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5
                }
            },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        variableWidth: true
                    }
                }]
        }).on('beforeChange', function ( slick) {
            $('.about-clients .slick-active').off();
        }).on('afterChange', function () {
            clientParentSlider();
        });

        function clientParentSlider() {
            var clientsSlider = $('.about-clients .slick-active');


            clientsSlider.last().on('mouseenter', function () {
                $('.about-clients  .slick-list').addClass('interval-right');
                $(this).next().css('opacity', '0');
                $(this).addClass('hover');
            });
            clientsSlider.on('mouseenter', function () {
                $(this).addClass('hover');
            });
            clientsSlider.on('mouseleave', function () {
                $('.about-clients  .slick-list').removeClass('interval-right');
                $(this).next().css('opacity', '1');
                $(this).removeClass('hover');
            });
            clientsSlider.first().on('mouseenter', function () {
                $('.about-clients  .slick-list').addClass('interval-left');
                $(this).prev().css('opacity', '0');
                $(this).addClass('hover');
            });
            clientsSlider.on('mouseleave', function () {
                $('.about-clients  .slick-list').removeClass('interval-left');
                $(this).prev().css('opacity', '1');
                $(this).removeClass('hover');
            })
        }
        clientParentSlider();


        $('#partner-slider').slick({
            // variableWidth: true,
            slidesToShow: 9,
            prevArrow: $('.partner-slider .prev-arrow'),
            nextArrow: $('.partner-slider .next-arrow'),
            responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5
                }
            },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        variableWidth: true
                    }
                }]

        });



        /************* Article slider **************/

        $('#article-slider').slick({

            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: false,
            prevArrow: $('.article-slider .prev-arrow'),
            nextArrow: $('.article-slider .next-arrow'),
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    variableWidth: true
                }

            }]

        });






        /****************************/
        /*** Google map position ***/
        /**************************/




        function mapPosition() {
            if (!$('#map').length) return;
            var mapPosition = ($(window).width() - ($(".map-wrap").offset().left + $(".map-wrap").outerWidth()));
            if (mapPosition <= 0) {
                $('#map').css('left', mapPosition / 2 + 50 + 'px')
            }
        }


        $(window).resize(mapPosition);





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
        });



        /*******************************/
        /*** article subscribe show ***/
        /*****************************/




        $('.subscribe-show').on('click', function () {
            $(this).toggleClass('open')
        });




        /**************************/
        /*** Social icon fixed ***/
        /************************/





        $(window).on('scroll load resize', function () {

            if ((window.innerWidth < 768) || !$('.article .social').length) return;

            var socialOffsetTop = $('.article-content').offset().top,
                socialStartMove = $(window).scrollTop() + $('.header-nav').height(),
                socialStartStop = $(window).scrollTop() + $('.article .social').outerHeight() + 60,
                socialBottomoffset = 150,
                articleOffsetTop = $('.article-slider').offset().top;

            if (socialOffsetTop <= socialStartMove + 20) {
                $('.article .social').addClass('fixed');
            }
            else {
                $('.article .social').removeClass('fixed')
            }


            if ((window.innerWidth < 1280)) {
                socialBottomoffset = 125;
            }
            if (articleOffsetTop <= socialStartStop) {
                $('.article .social').removeClass('fixed');
                $('.article .social').css('top', articleOffsetTop
                    - $('.article .social').outerHeight() - socialBottomoffset + 'px')
            }
            else {
                $('.article .social').removeAttr("style")

            }
        });


        $('.equipment-img .img').on('click', function () {
            $('#myModal').css('display','block')
        });
        $('#myModal .close').on('click', function () {
            $('#myModal').css('display','none')
        });





        /*********************************/
        /*** Equipment pop-up gallery ***/
        /*******************************/



        function equipmentGalery() {

            if (!$('#myModal').length)return;

            $('.equipment-img .img').on('click', function () {
                $('#myModal').css('display', 'block');
                $('body').addClass('open');
                $('.content , .header-nav').addClass('blur');
            });

            $('#myModal .close').on('click', function () {
                $('#myModal').css('display', 'none');
                $('body').removeClass('open');
                $('.content, .header-nav').removeClass('blur');
            });


            var slideIndex = 1,
                n = 1;
            showSlides(slideIndex);



            $('.prev-arrow').on('click', function () {
                showSlides(slideIndex += -1);
                return false
            });

            $('.next-arrow').on('click', function () {
                n = 1;
                showSlides(slideIndex += n);
                return false
            });

            $('.demo-img li').on('click', function () {
                showSlides(slideIndex = $(this).index() + 1);
            });



            function showSlides(n) {
                var i;
                var slides = $("#myModal .main-img");
                var dots = $(".demo");
                var captionText = $("#caption");


                if (n > slides.length) {
                    slideIndex = 1
                }
                if (n < 1) {
                    slideIndex = slides.length
                }
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                slides[slideIndex - 1].style.display = "block";
                dots[slideIndex - 1].className += " active";
                captionText.text(dots[slideIndex-1].getAttribute('alt'));
            }
        }

        equipmentGalery()



    })
})(jQuery);

