'use strict';



(function ($) {
    $(document).ready(function () {


(function(){

    var totalWidth = 0;

$('.modal-content .demo-img li').each(function(index) {
    totalWidth += parseInt($(this).outerWidth(true), 10);
    $('.modal-content .demo-img').css('width', totalWidth + 'px')
});
    
	$('.modal-content .demo-img').slick({

		dots: false,
		arrows: false,
		infinite: false,
        variableWidth: true,
        slidesToShow: 8,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                     slidesToShow: 6,

              }
        },
          {
              breakpoint: 769,
              settings: {
                     slidesToShow: 3,

              }
        },
        ]


          // centerMode: true,



	})
})()

    $(document).on('keypress', function(e){
       

    if (e.keyCode === 13 && e.ctrlKey) {
            $("input:focus, textarea:focus").closest('form').find('button').click()
    }
       if (e.keyCode === 10 ) {
            $("input:focus, textarea:focus").closest('form').find('button').click()
    }
    })






        /************************/
        /*** Function initial ***/
        /************************/


        init();

        function init() {
            searchForm();//Header top search form
            sliderTop();//Header top slider
            mapPosition();// Position map
            // sliderBottom();//Header bottom slider
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
            var  valueSearch = $('.header-nav .form-control').val();
            $('.header-nav .search-icon, .header-nav .search-form .form-control').on('mouseenter ' , function () {
                valueSearch = $('.header-nav .form-control').val();
                $('.header-nav .search-form .form-control').addClass('open');
            }).on('mouseleave', function () {
                valueSearch = $('.header-nav .form-control').val();
                if (!valueSearch) {
                    $('.header-nav .search-icon').removeClass('open');
                    $('.header-nav .search-form .form-control').removeClass('open');
                }
            }).on('keyup', function () {
                valueSearch = $('.header-nav .form-control').val();
                $('.header-nav .search-form .form-control').addClass('open');
                if (!valueSearch) {
                    $('.header-nav .search-icon').removeClass('open');
                    $('.header-nav .search-form .form-control').removeClass('open');
                }
            })
        }








        /************************/
        /*** Slider plugin init ***/
        /************************/



        function playBtnPOsition() {

             if (!$('.slider-img.video').length) return;

            var windowsWidth    = (window.innerWidth),
                sliderImgOfset  = $('.slider-img.video').offset().left,
                sliderImgWidth  =  $('.slider-img.video').width(),
                sliderImgShow   =  windowsWidth - sliderImgOfset;
            
            if (sliderImgWidth + sliderImgOfset >= windowsWidth) {
                $('.playBtn').css('left', sliderImgShow / 2  + 'px')
            }else{

                $('.playBtn').css('left', '46%')
            }
        }

        playBtnPOsition()
        $(window).resize(playBtnPOsition);






        /********** Slider header top ***********/


        function sliderTop() {
            // var ww =  $('#slider-top');
            $('.slider-img').has('video').addClass('video');

            $('.slider-img.video').append('<span class="playBtn"></span>')

            $('#slider-top').on('init', function (event, slick, currentSlide, nextSlide) {
                $(".slider-img video")[0].play();
            })

            $('#slider-top').slick({
                pauseOnDotsHover: true,
                speed: 2000,
                fade: true,
                autoplay: true,
                dots: true,
				duration:'slow',
                arrows: false,
                slidesToScroll: 1,
                infinite: true,
                autoplaySpeed: 20000,
                // pauseOnFocus: false,
                // pauseOnHover: false,
                customPaging: function (i) {

                    return '<span class="custom_dots"></span>';
                }

            }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        

                $(".slider-img video")[0].load();
                $('#slider-top').slick("setOption", "autoplaySpeed", 7000);
                $('.slider-img').removeClass('animated');
                $('.slider-img').eq(nextSlide).addClass('animated');

            }).on('click', function (event, slick, currentSlide, nextSlide) {
                $('#slider-top').slick('slickPause');
            });

              $('.playBtn').on('click', function(){
                $('.rotate').addClass('fullscreen');
                $('body').addClass('open open-video');
                $('.slider-img video').attr('controls', 'controls')
                $('#slider-top').slick('slickPause');
                $('.slider-img.video').append('<span class="close">&#x2715;</span>')

              })

           $(document) .on('click',('.rotate.fullscreen .close'), function(){
                $('.slider-img video').removeAttr('controls')
                $('.rotate').removeClass('fullscreen');
                $('body').removeClass('open open-video');
                $('#slider-top').slick('slickPause');
                $(this).remove()          
            })          

        }



        /*********** Slider header bottom ***********/
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



            });



        // function sliderBottom() {


        //     $('#slider-bottom').slick({
        //         slidesToShow: 3,
        //         slidesToScroll: 1,
        //         variableWidth: true,
        //         infinite: false,
        //         prevArrow: $('.prev-arrow'),
        //         nextArrow: $('.next-arrow'),
        //         responsive: [{
        //             breakpoint: 768,
        //             settings: "unslick"

        //         }]



        //     });

        //     .on('beforeChange', function ( slick) {

        //         $('.first, .last, .middle').off();

        //         $(' .slick-list').removeClass('interval-middle interval-left interval-right')
        //         $('.ver-el').removeClass('first last middle scale-item')

        //     }).on('afterChange', function () {
        //         sliderPosition();
        //         hoverItem();

        //     });


        //     function sliderPosition() {

        //         var showItem        = $('.slider-bottom_item.slick-active'),
        //             firstItem       = showItem.eq(0),
        //             middleItem      = showItem.eq(1),
        //             lastItem        = showItem.eq(2);

        //         firstItem.children(".ver-el").addClass('first');
        //         middleItem.children(".ver-el").addClass('middle');
        //         lastItem.children(".ver-el").addClass('last');
        //     }
        //     sliderPosition();//Position slider

        //     function hoverItem() {

        //         var firstEll    = $('.first'),
        //             middleEll   = $('.middle'),
        //             lastEll     = $('.last');


        //         /***** First element hover event *****/


        //         firstEll.on('mouseenter', function () {
        //             $(this).addClass('scale-item');
        //             $(' .slick-list').addClass('interval-left')
        //         });
        //         firstEll.on('mouseleave', function () {
        //             $('.ver-el').removeClass('scale-item');
        //             $(' .slick-list').removeClass(' interval-left')
        //         });


        //         /***** Middle element hover event *****/


        //         middleEll.on('mouseenter', function () {
        //             $(this).addClass('scale-item');
        //             $(' .slick-list').addClass('interval-middle')
        //         });
        //         middleEll.on('mouseleave', function () {
        //             $('.ver-el').removeClass('scale-item');
        //             $(' .slick-list').removeClass('interval-middle')
        //         });


        //         /***** Last element hover event *****/


        //         lastEll.on(' mouseenter', function () {
        //             $(this).addClass('scale-item');
        //             $(' .slick-list').addClass('interval-right')
        //         });

        //         lastEll.on('mouseleave', function () {
        //             $('.ver-el').removeClass('scale-item');
        //             $(' .slick-list').removeClass(' interval-right')
        //         });

        //     }


        //     hoverItem();//Hover effect
        //     sliderPosition();//Position slider

        // }




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
                        slidesToShow: 1,
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
                    slidesToShow: 1,
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





        // (function () {
        //     $( window ).on('scroll load',function() {

        //         var header = $('header'),
        //             topPoint = header.offset().top;

        //         if (topPoint > 100){
        //             header.addClass('scroll-start')
        //         }
        //         else{
        //             header.removeClass('scroll-start')
        //         }
        //     })
        // })();


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



            $(document).on('click', function (e) {

            if (!$('body.fullscreen').length)return;

            e.stopPropagation()
            if(!$(e.target).closest('.fotorama__wrap').length){
                        var e = $.Event("keydown", { keyCode: 27});
                        $('.fotorama__fullscreen-icon').trigger(e);
                }
            })


        $(window).on('resize load', function () {
            if (!$('.fotorama').length) return;
                $('.fotorama').fotorama({
                    allowfullscreen: true,
                    thumbwidth:120,
                    thumbheight:75,
                    thumbmargin: 20,

                });

            if($(window).width() < 768){
                 $('.fotorama').fotorama({
                    allowfullscreen: 'native',
                    thumbwidth:100,
                    thumbheight:55,
                    thumbmargin: 10 

                });
             }
        })

       

        // function equipmentGalery() {

            





            // $('.equipment-img .img').on('click', function () {
            //     $('#myModal').css('display', 'block');
            //     $('body').addClass('open');
            //     $('.content , .header-nav').addClass('blur');
            // });

            // $('#myModal .close').on('click', function () {
            //     $('#myModal').css('display', 'none');
            //     $('body').removeClass('open');
            //     $('.content, .header-nav').removeClass('blur');
            // });


            // var slideIndex = 1,
            //     n = 1;
            // showSlides(slideIndex);



            // $('.prev-arrow').on('click', function () {
            //     showSlides(slideIndex += -1);
            //     return false
            // });

            // $('.next-arrow').on('click', function () {
            //     n = 1;
            //     showSlides(slideIndex += n);
            //     return false
            // });

            // $('.demo-img li').on('click', function () {
            //     showSlides(slideIndex = $(this).index() + 1);
            // });



        // }

        // equipmentGalery()




            // function showSlides(n) {
            //     var i;
            //     var slides = $("#myModal .main-img");
            //     var dots = $(".demo");
            //     var captionText = $("#caption");


            //     if (n > slides.length) {
            //         slideIndex = 1
            //     }
            //     if (n < 1) {
            //         slideIndex = slides.length
            //     }
            //     for (i = 0; i < slides.length; i++) {
            //         slides[i].style.display = "none";
            //     }
            //     for (i = 0; i < dots.length; i++) {
            //         dots[i].className = dots[i].className.replace(" active", "");
            //     }
            //     slides[slideIndex - 1].style.display = "block";
            //     dots[slideIndex - 1].className += " active";
            //     captionText.text(dots[slideIndex-1].getAttribute('alt'));
            // }


        /*********************************/
        /*** Search ***/
        /*******************************/
        
        
        /*Search click top*/
        $('.search-icon').on('click', function () {
            $("#search-icon").click();
            return true;
        });
        /*Search click bottom*/
        $('.search-icon-bottom').on('click', function () {
            $("#search-icon-bottom").click();
            return true;
        });
        /*Search click page*/
        $('.search-icon-page').on('click', function () {
            $("#search-icon-page").click();
            return true;
        });
        /*Search click page 404*/
        $('.search-icon-404').on('click', function () {
            $("#search-icon-404").click();
            return true;
        });

        /*********************************/
        /*** send info ***/
        /*******************************/
        



        /*close mesege block*/                                        
        $('.close').on('click', function () {
            $('.thank-popup').hide();
            return true;
        });
          
        $(document).on('click', function (e) {
        	if($(e.target).closest('.thank-popup-content').length)return;
            $('.thank-popup').hide();
        })


          $(this).keydown(function(eventObject){
            if (eventObject.which == 27 && $(".thank-popup").css('display') == 'block'){
                   $('.thank-popup').hide();
            }
             

               if (eventObject.which == 27 && $("#myModal").css('display') == 'block'){
                  $('#myModal .close').click();
            }

            if (eventObject.which == 27 && $('.rotate.fullscreen').length) {
                $('.slider-img video').removeAttr('controls')
                $('.rotate').removeClass('fullscreen');
                $('body').removeClass('open');
                $('#slider-top').slick('slickPause');
                $(this).remove()          
              }

        });

        /*send info home page - applications*/ 
        $('#send-form').submit(function(){
            var name = $("input#name").val();
            var email = $("input#email").val();
            var tel = $("input#tel").val();
            var msg = $("input#msg").val(); 
            var url = $("input#hidden").val();
            var pageMessege = "request_contact_you";   
            var array = ["name", "email", "tel", "msg"];     
            css_update(array, 'update');
            if(css_update(array, 0)){
                $.ajax({  
                    type: "POST",  
                    url: url,
                    data: {"name" : name, "email" : email, "tel" : tel, "msg" : msg, "page" : pageMessege},
                    success:  function(data) { 
                        if(data){       
                          rules_popup('commun', name);
                        }else{
                          rules_popup('error', name);  
                        }
                    }, error: function(xhr, status, error){
                          rules_popup('error', name); 
                    }
                }); 
            }
            return false;
        });
        
        /*send info - Request for equipment*/
        $('#send-form-equipment').submit(function(){
            var name = $("input#name").val();
            var email = $("input#email").val();
            var tel = $("input#tel").val();
            var msg = $("input#msg").val(); 
            var url = $("input#hidden").val();
            var pageMessege = "request_for_equipment";
            var array = ["name", "email", "tel", "msg"];  
            css_update(array, 'update');
            if(css_update(array, 0)){
                $.ajax({  
                    type: "POST",  
                    url: url,
                    data: {"name" : name, "email" : email, "tel" : tel, "msg" : msg, "page" : pageMessege},            
                    success:  function(data) { 
                        if(data){
                          rules_popup('commun', name);
                          css_update(array, 'reset');   
                        }else{
                          rules_popup('error', name);
                        }
                    }, error: function(){
                       rules_popup('error', name);
                    }  
                }); 
            }
            return false;
        });
        
        /*send info - Request for blog, subscribe*/
        $('#send-form-subscribe, #send-form-blog-question').submit(function(){
            var name = $("input#name").val();
            var email = $("input#email").val();
            var url = $("input#hidden").val();
            var pageMessege = "request_for_blog_subscribe";
            var array = ["name", "email"];          
            css_update(array, 'update');
            if(css_update(array, 0)){
                $.ajax({  
                    type: "POST",  
                    url: url,
                    data: {"name" : name, "email" : email, "page" : pageMessege},      
                    success:  function(data) {    
                        if(data){
                            rules_popup('subs', name);
                            css_update(array, 'reset');     
                        }else{
                          rules_popup('error', name);
                        }
                    }, error: function(){
                        rules_popup('error', name);
                    }  
                }); 
            }
            return false;
        });
        
        /*send info - Request for blog, question*/
        $('#send-form-question').submit(function(){
            var name = $("input#question-name").val();
            var email = $("input#question-mail").val();
            var msg = $("input#question-text").val();
            var url = $("input#hidden").val();
            var pageMessege = "request_for_blog_question";
            var array = ["question-name", "question-mail", "question-text"]; 
            css_update(array, 'update');
            if(css_update(array, 0)){
                $.ajax({  
                    type: "POST",  
                    url: url,
                    data: {"name" : name, "email" : email, "msg" : msg, "page" : pageMessege},      
                    success:  function(data) {  
                        if(data){
                            rules_popup('commun', name);
                            css_update(array, 'reset'); 
                        }else{
                          rules_popup('error', name);
                        }
                    }, error: function(){
                       rules_popup('error', name);
                    }  
                }); 
            }
            return false;
        });
        
        /*send info - equipment list page*/
        $('#send-form-subscribe-equipment').submit(function(){
            var name = $("input#subscribe-name-equipment").val();
            var email = $("input#subscribe-email-equipment").val();
            var url = $("input#hidden").val();
            var pageMessege = "request_for_equipment_page";
            var array = ["subscribe-name-equipment", "subscribe-email-equipment"];  
            css_update(array, 'update');
            if(css_update(array, 0)){
                $.ajax({  
                    type: "POST",  
                    url: url,
                    data: {"name" : name, "email" : email, "page" : pageMessege},      
                    success:  function(data) {
                        if(data){
                           rules_popup('subs', name);
                            css_update(array, 'reset');  
                        }else{
                          rules_popup('error', name);
                        }
                    }, error: function(){
                       rules_popup('error', name);
                    }  
                }); 
            }
            return false;
        });    
        
        /*send info - top page*/
        $('#send-form-subscribe-bottom').submit(function(){
            var name = $("input#subscribe-name-footer").val();
            var email = $("input#subscribe-mail-footer").val();
            var url = $("input#hidden").val();
            var pageMessege = "request_for_blog";
            var array = ["subscribe-name-footer", "subscribe-mail-footer"]; 
            css_update(array, 'update');
            if(css_update(array, 0)){
                $.ajax({  
                    type: "POST",  
                    url: url,
                    data: {"name" : name, "email" : email, "page" : pageMessege},      
                    success:  function(data) { 
                        if(data){
                           rules_popup('subs', name);
                           css_update(array, 'reset');  
                        }else{
                          rules_popup('error', name);
                        }
                    }, error: function(){
                       rules_popup('error', name);
                    }  
                }); 
            }
            return false;
        });
        
        function css_update(div, type){  
            if(type == 'reset'){   
                $.each(div, function() {
                    $('input#'+this).val('').css('border-bottom', 'solid 1px #a5a5a5');
                });          
                return true;
            }else if(type == 'update'){   
                $.each(div, function() {
                    $('input#'+this).css('border-bottom', 'solid 1px #a5a5a5');
                });      
                return true;
            }else{      
                var i = 0;
                $.each(div, function() { 
                  if($('input#'+this).val() == ""){
                     i++; $('input#'+this).css('border-bottom', 'solid 2px red');
                  }
                });
                if(i > 0){ return false; } else { return true; }
            }
        }
        function rules_popup(type, name){  
            //type: error, commun, subs
            //name: name users 
            /*hide all messege*/
            $('.thank-popup-content .content-header').hide();
            $('.text-messege-popup').hide();
            
            /*open the required blocks messege*/
            if(type == 'error'){
                $('.popup_name_error').show();
                $('.popup_load_error').show();
            }else if(type == 'commun'){  
                $('.name').html(name);
                $('.popup_name').show();
                $('.popup_contact_you').show(); 
            }else if(type == 'subs'){         
                $('.name').html(name);   
                $('.popup_name').show(); 
                $('.popup_subscription_is_framed').show();
            } 
            /*show modals*/
            $('.thank-popup').show();
        }


        $('textarea').each(function () {

          this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
        this.style.height = 31 + 'px';

        }).on('input', function () {
          this.style.height = 'auto';
          this.style.height = (this.scrollHeight) + 'px';
        });


    });
})(jQuery);



