/**
 * Created by Oleg on 04.07.2017.
 */
'use strict';
(function ($) {


    $(document).ready(function () {

        $('.date-picker').daterangepicker({
             "startDate": "12/01/2016",
             "endDate": "07/04/2017"
        });



        $('#layout-quick-launch-btn, .quick-launcher-inner .close').on('click', function () {
            $('body').css('transition', '300ms cubic-bezier(0.7, 0, 0.3, 1)').toggleClass('layout-quick-launch-panel stop-scrolling');
        });



        $('.question, #qs_modal .close, #qs_modal .btn.btn-default').on('click', function () {
            $('#qs_modal').toggleClass('open')
        });



        $('.btn-primary,#modal .close,#modal .btn.btn-default').on('click', function () {
            $('#modal').toggleClass('open')
        });



        $('.toggle-sidebar').on('click', function () {
            $('.app').toggleClass('layout-small-menu')
        });


       $('.hamburger-icon').on('click', function () {
           $('.sidebar-panel').toggleClass('is-mobile-sidebar-closed')
       });


        $('.scroll-up').on('click', function () {
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });


        $('.btn-info').on('click', function () {




            if ($(this).hasClass( 'btn-info-table' )){
                $('.btn-info-graph, .table-condensed-popup').removeClass('ng-hide');
                $(this).addClass('ng-hide');
                $('.dashboard-rickshaw-popup').addClass('ng-hide');

            }
             if ($(this).hasClass( 'btn-info-graph' )){
                 $('.btn-info-table, .dashboard-rickshaw-popup').removeClass('ng-hide');
                 $(this).addClass('ng-hide');
                 $('.table-condensed-popup').addClass('ng-hide');

             }



        });






        function svgWidth() {

            var firstSvgEl       = $('.rickshaw_graph-first svg'),
                firstParentWidth = $('.rickshaw_graph-first').width(),
                secondSvgEl       = $('.rickshaw_graph-second svg'),
                secondParentWidth = $('.rickshaw_graph-second').width();

            firstSvgEl.attr('width', firstParentWidth)
            secondSvgEl.attr('width', secondParentWidth)

        }


        function respons() {
            var windowsWidth = (window.innerWidth);
            var minWith = 991;

            if (windowsWidth <= minWith) {
                $('.app').addClass('layout-small-menu')
            }

            else {
                $('.app').removeClass('layout-small-menu')

            }
        }


        $(window).ready(svgWidth , respons);
        $(window).resize(svgWidth, respons);
    })


})(jQuery)
