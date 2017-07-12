'use strict';

(function ($) {



    /*** Preloader ***/
    $(window).on('load', function () {
        var sliderPreloaderItem = $('.slider-img, .photo, .header-main, container-fluid');
        sliderPreloaderItem.removeClass('preloader')
    });



    $(document).ready(function () {


        var windowsWidth = (window.innerWidth);




        init();


        function init() {

            slider();// Slider olugin init
            stickSidebar ();//Slider init
            mobMenu();//Mobile menu init
            fbForm()//Fit back form init
            responsePopup()//Response thank text pop-up
            directionsDropDown()//Drop-down menu

        }



        function minWindowSize(){
            var minWith  = 1279;

            if (windowsWidth >= minWith){

                addressPopup();//Show address pop up
                searchForm();//Search form initial
            }
        }

        $(window).ready(minWindowSize);
        $(window).resize(minWindowSize);



/**************************/
/** Sidebar fixed lib initial **/
/**************************/


        function stickSidebar () {
            if ( windowsWidth <= 1279) {

                $("#sidebar").trigger("sticky_kit:detach");

            }else {

                $("#sidebar").stick_in_parent({});
            }
        }
        $(window).ready(stickSidebar);
        $(window).resize(stickSidebar);





/**************************/
/** Slider lib initial **/
/**************************/




    function slider () {




        /**************************/
        /** Main slider lib initial **/
        /**************************/




        var aboutStatus = $('.pagingInfo'),
            mainSlider = $('#mainSlider'),

            clinicSlider    = $('#clinicSlider'),
            profileSlider   = $('#profileSlider'),
            licenseSlider   = $('#licenseSlider'),
            doctorsSlider   = $('#doctorsSlider');




        /*pagination fo each slider*/

        mainSlider.on('init reInit afterChange', function (event, slick, currentSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            aboutStatus.text(i + ' / ' + slick.slideCount);
        });
        clinicSlider.on('init reInit afterChange', function (event, slick, currentSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            aboutStatus.text(i + ' / ' + slick.slideCount);
        });
        profileSlider.on('init reInit afterChange', function (event, slick, currentSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            aboutStatus.text(i + ' / ' + slick.slideCount);
        });
        doctorsSlider.on('init reInit afterChange', function (event, slick, currentSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            aboutStatus.text(i + ' / ' + slick.slideCount);
        });



        /*Initial all the same slider*/

        $('#mainSlider, #clinicSlider, #profileSlider, #doctorsSlider').slick({
            prevArrow: $('.prev-arrow'),
            nextArrow: $('.next-arrow'),
            autoplay: true,
            infinite: true,
            swipeToSlide: true,
            adaptiveHeight: true,
            autoplaySpeed: 5000
        });

        $('.pag-arrow').on('click', function () {



            if (windowsWidth >= 768){

                $('.pag-arrow').css('z-index', '0');
                setTimeout(
                    function(){$('.pag-arrow').css('z-index', '2')},
                    500);
            }



        }).on('afterChange', function(event, slick, currentSlide, nextSlide){
            if (windowsWidth >= 768) {
                $('.pag-arrow').css('z-index', '2')
            }


        });






        /**************************/
        /***** License slider *****/
        /**************************/





        licenseSlider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: true,
            variableWidth: true,
            prevArrow: $('.license-slider .prev-arrow'),
            nextArrow: $('.license-slider .next-arrow'),
            responsive: [
                {
                    breakpoint: 620,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: false
                    }
                }
            ]
        })
    }




        /**************************/
        /** Addresss pop-up **/
        /**************************/




        function addressPopup() {
            var addressCont = $(".wrap");

            $('header .wrap').on('click', function () {
                addressCont.addClass('open');
                $('header .closed').css('display', 'block');
            });

            $('header .closed').on('click', function () {
                addressCont.removeClass('open');
            });

            $(document).on('click', function(event) {
                if ($(event.target).closest(".wrap").length === 0) {
                    addressCont.removeClass('open');
                    $('header .closed').css('display', 'none');
                }
            })
        }





        /**************************/
        /** Search form resize **/
        /**************************/







        function searchForm() {


            var  valueSearch = $('.form-control').val();


            $('.search-icon, .form-control').on(' mouseenter ' , function () {

                valueSearch = $('.form-control').val();

                $('.form-control').addClass('open');
                $('.search-icon').addClass('open-icon');

            }).on('mouseleave' , function () {

                valueSearch = $('.form-control').val();

                if (!valueSearch){
                    $('.form-control').removeClass('open');
                    $('.search-icon').removeClass('open-icon');
                }


            }).on('keyup' , function () {

                valueSearch = $('.form-control').val();

                $('.form-control').addClass('open');
                $('.search-icon').addClass('open-icon');


                if (!valueSearch) {
                    $('.form-control').removeClass('open');
                    $('.search-icon').removeClass('open-icon');
                }
            })


        }





/**************************/
/** Pop up**/
/**************************/





        function fbForm() {


            /**** Button ****/

            $('.btn-feedback .btn').on('click', function () {
                $('.pop-up').addClass('open');
            });

            $('.pop-up .closed-ic').on('click', function () {
                $('.pop-up').removeClass('open');
            });



            /**** Time picker ****/

            $(".time-list li").on('click', function () {

               var time = $(this).text();
                $('#time').val(time);

            });

            $('#time ').on('click', function () {
                $(this).addClass('label-show');

                $(".time-list").addClass('open');
                $(".timepicker").addClass('arr-up');

            });

            $(' .time-icon ').on('click', function () {

                $(".time-list").toggleClass('open');
                $(".timepicker").toggleClass('arr-up');

            });


            $(".time-list li ").click(function (e) {

                e.preventDefault();
                $(".time-list li").removeClass('active');
                $(this).addClass('active');

            });

            $('.time').keydown(function (e) {
                e.preventDefault();
            });

            $(document).on('click', function (event) {

                if (!$(event.target).closest(".time").length && !$(event.target).closest(".time-icon").length) {
                    $(".time-list").removeClass('open');
                    $(".timepicker").removeClass('arr-up');
                }
            });

            $(document).on('click', function (event) {

                if (!$('.time-list').hasClass('open')){

                    if (!$('#time').val()){
                        $('#time').removeClass('label-show')
                    }
                }

            });

            $(document).on('keyup input', "#datepicker", function () {

                $(this).prop('value', $(this).val().replace(/[^0-9.\d]/gim, ''))

            });



            /**** Date picker ****/
            
            


            $("#datepicker").datepicker({
                todayHighlight: true,

                format: 'mm.dd.yyyy',

                language: 'ru',
                container: '.wrapp-date',
                oldDates: true,
                newDates: false,
                disableTouchKeyboard:true,
                keyboardNavigation: false,
                autoclose: true,
                templates: {
                    leftArrow: '<span class="left" title="назад"></span>',
                    rightArrow: '<span class="right" title="вперед"></span>'
                }
            }).on('show changeDate keyup keydown ', function (e) {
                $(this).addClass('label-show');

                    e.preventDefault();


                $('.day').each(function(  ) {

                    var tidayDate       = $(this).data('date'),
                        datePosition    = $('.day.today ').data('date');

                    if (tidayDate  < datePosition){
                        $(this).addClass('disabled');
                    }
                });


                if ($('.day').hasClass( "disabled" ) && $( ".old.disabled" ).length && !$('.today.old').length){

                    $('.prev').css('pointer-events', 'none');
                }
                else {
                    $('.prev').css('pointer-events', 'auto');
                }


            }).on('hide', function () {
                if (!$('#datepicker').val())
                {
                    $('#datepicker').removeClass('label-show');
                }

            });


            $('.datepicker-icon').on('click', function () {
                $("#datepicker").focus();
            });

            /**** Validation form ****/

            $(document).on( 'blur' , '[name="name"] ,  [name="email"] , [name="tel"], [name="questionerName"], [name="questionerEmail"]' , function() {


                var field           = $(this).attr("name"),
                    fieldValue      = $(this).val(),
                    errorClass      = 'error',

                    mailRegExp      = /^[-\w.]+@([A-z0-9][-A-z0-9]*\.)+[A-z]{2,4}$/i,
                    telRegExp       = /[0-9]{10}/i,
                    nameRegExp      = /^[а-яА-ЯёЁa-zA-Z0-9\s]+$/i;


                switch (field) {


                    case 'email':
                    case 'questionerEmail':

                        if (!mailRegExp.test(fieldValue)) {
                            $(this).addClass(errorClass)
                        } else {
                            $(this).removeClass(errorClass)
                        }

                        break;


                    case 'tel':

                        if (!telRegExp.test(fieldValue)) {
                            $(this).addClass(errorClass)
                        } else {
                            $(this).removeClass(errorClass)
                        }

                        break;


                    case 'name':
                    case 'questionerName':

                        if (!nameRegExp.test(fieldValue)) {
                            $(this).addClass(errorClass)
                        } else {
                            $(this).removeClass(errorClass)
                        }

                        break;
                }

            });

        }


        /******** Required input fields ********/

        $('.pop-up form .btn').on('click', function () {

            var nameValue = $('#name').val(),
                telValue = $('#tel').val(),
                errorClass = 'error';


            if (!nameValue && !telValue) {

                $('#name, #tel').addClass(errorClass);
                return false
            }
            if (!nameValue) {
                console.log('dd')

                $('#name').addClass(errorClass);
                return false
            }
            else {
                $('#name').removeClass(errorClass);
            }

            if (!telValue) {
                $('#tel').addClass(errorClass);
                return false
            } else {
                $('#tel').removeClass(errorClass);
            }

        });



        $('.ask-question').on('click', function () {

            var questionerNameVal = $('#questionerName').val(),
                errorClass = 'error';

            if (!questionerNameVal) {

                $('#questionerName').addClass(errorClass);
                return false
            }
        });






        /***** Label show function *****/

        $('input,textarea').focus(function(){
            $(this).data('placeholder',$(this).attr('placeholder'))

            $(this).attr('placeholder','');
        });
        $('input,textarea').blur(function(){
            $(this).attr('placeholder',$(this).data('placeholder'));
        });


        $('input:not(#datepicker, #time), textarea').on('blur' , function() {

            if ($(this).val())
            {$(this).addClass('label-show')}else{
                $(this).removeClass('label-show')
            }





        })





            /***** Thank text pop-up  *****/
        function responsePopup() {


            $('#sendBotton').on('click', function () {
                $('.response').addClass('open');
            });

            $('.response-close').on('click', function () {
                $('.response').removeClass('open');
            });

            $(document).on('click', function(event) {
                if (!$(event.target).closest(".response-text").length && !$(event.target).closest("#sendBotton").length) {
                    $('.response').removeClass('open');
                }
            })
        }



        function windowSize(){
            var maxWith  = 1920;


            if (windowsWidth >= maxWith){

                var  necWidth  = $(window).width() - maxWith;

                $('.pop-up').css({right : necWidth + 'px'});
            }
            else{
                $('.pop-up').css({right :   '0'});

            }
        }

        $(window).ready(windowSize);
        $(window).resize(windowSize);





        /**************************/
        /** Mobile menu **/
        /**************************/





        function mobMenu() {




            $(".navTrigger").on('click', function () {



                $(this).toggleClass('active');

                $('.sidebar, .bg-sidebar').toggleClass('open');

                $('body').toggleClass('heigt');

                $('.blackout').toggleClass('dark-bg');


            });


            function menuHeight() {


                var windowH = $(window).height() + 'px';


                $(window).resize(function () {
                    $('body').css('min-height', windowH);
                });

                $(".navTrigger").on('click', function () {

                    var menuHeight = $('#sidebar').height() + $('.main-content .logo').outerHeight() + 'px';


                    if (!$('.sidebar').hasClass('open')) {
                        $('body').css(
                            {
                                'height': 'auto',
                                'min-height': 'auto'
                            }
                            );
                    }
                    else {
                        $('body').css('height', menuHeight);
                    }
                });
            }


            $(window).ready(menuHeight);
            $(window).resize(menuHeight);


            $(document).on('click', function (event) {
                if (!$(event.target).closest(".sidebar").length && !$(event.target).closest(".main-content .logo").length) {

                    $('.navTrigger').removeClass('active');

                    $('.sidebar').removeClass('open');

                    $('body').removeClass('heigt');

                    $('.blackout').removeClass('dark-bg');
                }
            })
        }


        $(" .title").on('click',function(){

            if ($(this).hasClass("show")){

                $(this).removeClass('show')

            }else{
                $(" .title").removeClass('show')

                $(this).addClass('show')

            }
        });


        function positionSoc () {

            if (windowsWidth > 1279){
                var  sidebarH   = $('.sidebar').height(),
                     windowH    = $(window).height();

                if ( sidebarH + 100 <= windowH) {
                    $('.social').addClass('fixed')

                }else {

                    $('.social').removeClass('fixed')

                }
            }


            }
            $(window).ready(positionSoc);
            $(window).resize(positionSoc);







        /**************************/
        /** Doctor profile smooth scroll **/
        /**************************/


        (function ($) {
                if (!$('.link-ask').length) return;
                $('.link-ask').click(function () {

                    $('html, body').animate({scrollTop: $("#questionForm").offset().top}, 800);

                });
            })($);








        /**************************/
        /** Sub usluga smooth scroll **/
        /**************************/


        (function ($) {
            if (!$('#contact-form-anchor').length) return;
            $('.btn-feedback').click(function () {

                $('html, body').animate({scrollTop: $("#contact-form-anchor").offset().top}, 500);

            });
        })($);








        /**************************/
        /***** Drop-down menu *****/
        /**************************/





        (function($)
            {
                if  (!$('.directions-select-list').length) return;
                $('.directions-select-list').perfectScrollbar();
            }
        )($);


        function directionsDropDown() {


            var directionsItem      = $(".directions-select-list li"),
                directionsWrapp     = $(".select-list-wrapp"),
                selected            = $(".answers-questions .selected");

            selected.on('click', function (e) {
                directionsWrapp.toggleClass('opened')
            });

            directionsItem.on('click', function () {

                directionsItem.removeClass('active');

              var  directionsItemThis = $(this);
              var  directionsText = $(this).text();
                selected.text(directionsText);

                directionsItemThis.addClass('active')
            });


            $(document).on('click', function(event) {
                if (!$(event.target).closest(selected).length)

                {
                    $(".select-list-wrapp").removeClass('opened')
                }

            })
        }






        /**************************/
        /***** Error page 404 *****/
        /**************************/




        function  errorPageResize() {


            var sidebarH    = $('.sidebar-error').height(),
                windowH     = $(window).height(),
                contentH    = windowH - sidebarH;


            if (windowsWidth <= 1279){
                $('.error-page-content').css('min-height', contentH + 'px' );
            }
            else {
                $('.error-page-content').css('min-height', '100vh' );

            }
        }


        $(window).ready(errorPageResize);
        $(window).resize(errorPageResize);




    })
})(jQuery);



