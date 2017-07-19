/**
 * Created by Oleg on 10.07.2017.
 */

(function ($) {
    $(document).ready(function () {


        $('textarea').perfectScrollbar();

        function widthHeight() {
            var windowsWidth = (window.innerWidth),
                buttonWidth = $('.button-overlay').width(),
                contentWidth = windowsWidth - buttonWidth;

            if (windowsWidth > 1280) {
                $('.content').css({
                    'width': contentWidth - 150 + 'px'
                });

            }

            if (windowsWidth <= 1280) {
                $('.content').css({
                    'width': windowsWidth - 50 + 'px'
                });

            }


        }


        $(window).ready(widthHeight);
        $(window).resize(widthHeight);

        var conditionValueArr = {

            /*** Start on 10 number ***/

            /*** Leave the value blank for correct display ***/

//text Question array
            textQuestionArr: {
                conditionItem10: [
                    '>4',
                    '>4',
                    '>3',
                    '<2'
                ],
                conditionItem11: [
                    '>text5',
                    '>4',
                    '>3',
                    '<2'
                ], conditionItem12: [
                    '>5',
                    '>4',
                    '>3',
                    '<2'
                ]

            },

//many Question array
            manyQuestions: {
                conditionItem10: [
                    '>8',
                    '>4',
                    '>3',
                    '<2'
                ],
                conditionItem11: [
                    '',
                    '',
                    '>3',
                    '<2'
                ],
                conditionItem12: [
                    '',
                    '',
                    '>8',
                    '<8'
                ]
            },

//star Question array
            starQuestion: {
                conditionItem10: [
                    '<7',
                    '>7',
                    '',
                    '<7'
                ],
                conditionItem11: [
                    '>star5',
                    '>4',
                    '>3',
                    '<2'
                ]
            },

//multi Question array
            multiQuestion: {
                conditionItem10: [
                    '>multi5',
                    '>4',
                    '>3',
                    '<2'
                ],
                conditionItem11: [
                    '>multi5',
                    '>4',
                    '>3',
                    '<2'
                ]
            }


        };


        /**** The loop inserts values ****/

        /************* Text question ************/

        $('.text-question-btn').on('click', function () {
            textQuestionCycle()
        });


        function textQuestionCycle() {
            var iterationDifference = false;


            $('.text-question .conditionItem').each(function (index) {
                var thisConector = $(this).attr('id');

                // switch (thisConector) {
                //     case 'conditionItem10':
                //         if ($(this).hasClass('disabled')) break;
                //         $(this).text(conditionValueArr.textQuestionArr.conditionItem10[index]);
                //         $(this).addClass('disabled');
                //
                //         break;
                //
                //     case 'conditionItem11':
                //         if ($(this).hasClass('disabled')) break;
                //
                //         //ned for correct iteration
                //         if (iterationDifference === false) {
                //             iterationDifference = index
                //         }
                //
                //         $(this).text(conditionValueArr.textQuestionArr.conditionItem11[index - iterationDifference]);
                //         $(this).addClass('disabled');
                //
                //         break;
                //
                //
                //     case 'conditionItem12':
                //         if ($(this).hasClass('disabled')) break;
                //
                //         //ned for correct iteration
                //         if (iterationDifference === false) {
                //             iterationDifference = index
                //         }
                //
                //         $(this).text(conditionValueArr.textQuestionArr.conditionItem12[index - iterationDifference]);
                //         $(this).addClass('disabled');
                //
                //
                //         break;
                // }
            });
        }

        textQuestionCycle();


        /************* Many question ************/



        $('.many-questions-btn').on('click', function () {
            manyQuestionCycle('many')
        });
        function manyQuestionCycle() {
            var iterationDifference = false;

            $('.many-questions .conditionItem').each(function (index) {


                var thisConector = $(this).attr('id');

                switch (thisConector) {
                    case 'conditionItem10':
                        if ($(this).hasClass('disabled')) break;
                        $(this).text(conditionValueArr.manyQuestions.conditionItem10[index]);
                        $(this).addClass('disabled');

                        break;

                    case 'conditionItem11':
                        if ($(this).hasClass('disabled')) break;

                        //ned for correct iteration
                        if (iterationDifference === false) {
                            iterationDifference = index
                        }

                        $(this).text(conditionValueArr.manyQuestions.conditionItem11[index - iterationDifference]);
                        $(this).addClass('disabled');

                        break;


                    case 'conditionItem12':
                        if ($(this).hasClass('disabled')) break;

                        //ned for correct iteration
                        if (iterationDifference === false) {
                            iterationDifference = index
                        }

                        $(this).text(conditionValueArr.manyQuestions.conditionItem12[index - iterationDifference]);
                        $(this).addClass('disabled');

                        break;
                }
            });
        }

        manyQuestionCycle();


        /************* Star question ************/


        $('.star-question-btn').on('click', function () {
            starQuestionCycle()
        });

        function starQuestionCycle() {

            var iterationDifference = false;

            $('.star-question .conditionItem').each(function (index) {

                var thisConector = $(this).attr('id');

                switch (thisConector) {
                    case 'conditionItem10':
                        if ($(this).hasClass('disabled')) break;
                        $(this).text(conditionValueArr.starQuestion.conditionItem10[index]);
                        $(this).addClass('disabled');

                        break;

                    case 'conditionItem11':
                        if ($(this).hasClass('disabled')) break;

                        //ned for correct iteration
                        if (iterationDifference === false) {
                            iterationDifference = index
                        }

                        $(this).text(conditionValueArr.starQuestion.conditionItem10[index - iterationDifference]);
                        $(this).addClass('disabled');

                        break;
                    case 'conditionItem12':
                        if ($(this).hasClass('disabled')) break;

                        //ned for correct iteration
                        if (iterationDifference === false) {
                            iterationDifference = index
                        }

                        $(this).text(conditionValueArr.starQuestion.conditionItem11[index - iterationDifference]);
                        $(this).addClass('disabled');

                        break;
                    case 'conditionItem13':
                        if ($(this).hasClass('disabled')) break;

                        //ned for correct iteration
                        if (iterationDifference === false) {
                            iterationDifference = index
                        }

                        $(this).text(conditionValueArr.starQuestion.conditionItem11[index - iterationDifference]);
                        $(this).addClass('disabled');

                        break;
                }
            });
        }

        starQuestionCycle();


        /************* Multi question ************/

        $('.multi-question-btn').on('click', function () {
            multiQuestionCycle()
        })
        function multiQuestionCycle() {
            var iterationDifference = false;

            // $('.multi-question .conditionItem').each(function (index) {
            //
            //     var thisConector = $(this).attr('id');
            //
            //     switch (thisConector) {
            //         case 'conditionItem10':
            //             if ($(this).hasClass('disabled')) break;
            //             $(this).text(conditionValueArr.multiQuestion.conditionItem10[index]);
            //             $(this).addClass('disabled');
            //
            //             break;
            //
            //         case 'conditionItem11':
            //             if ($(this).hasClass('disabled')) break;
            //
            //             //ned for correct iteration
            //             if (iterationDifference === false) {
            //                 iterationDifference = index
            //             }
            //
            //             $(this).text(conditionValueArr.multiQuestion.conditionItem11[index - iterationDifference]);
            //             $(this).addClass('disabled');
            //
            //             break;
            //
            //
            //         case 'conditionItem12':
            //             if ($(this).hasClass('disabled')) break;
            //
            //             //ned for correct iteration
            //             if (iterationDifference === false) {
            //                 iterationDifference = index
            //             }
            //
            //             $(this).text(conditionValueArr.multiQuestion.conditionItem11[index - iterationDifference]);
            //             $(this).addClass('disabled');
            //
            //             break;
            //
            //         case 'conditionItem13':
            //             if ($(this).hasClass('disabled')) break;
            //
            //             //ned for correct iteration
            //             if (iterationDifference === false) {
            //                 iterationDifference = index
            //             }
            //             $(this).text(conditionValueArr.multiQuestion.conditionItem11[index - iterationDifference]);
            //             $(this).addClass('disabled');
            //
            //             break;
            //     }
            // });
        }

        multiQuestionCycle();

        function textareaTextCentr() {
            $('textarea').on('input', function () {
                var h = this.offsetHeight;
                $(this).css({
                    paddingTop: 0,
                    height: 0
                });

                $(this).css({
                    paddingTop: Math.max(0, h / 2 - this.scrollHeight / 2),
                    height: h
                });
            })
                .trigger('input')
        }

        $('.button-control button').on('click', function () {


            finishShow()
        });


        textareaTextCentr();


        function finishShow() {
            $(".finish-wrap").appendTo($(".finish-show "));

            if ($('.innerNode').hasClass('finish-show')) {
                $('.finish-wrap').addClass('open')
            }
        }

        finishShow();


        function textReadonly() {
            $('.textareaWrap textarea').attr('readonly', 'readonly')
        }


        $(document).on('click', function () {
            $('.textareaWrap textarea').focusin(function() {
            });
            $('textarea').on('mousedown', function () {

                $('textarea').attr('readonly', 'readonly')
            });
            $('.textareaWrap textarea:not([readonly="readonly"])').focus();



            textareaTextCentr();


            $('.new .textareaWrap textarea').on('blur', function () {

                $(this).closest('.fc-node').click();
                $('.textareaWrap textarea').attr('readonly', 'readonly')

            });

                $('textarea').perfectScrollbar();

        });



        /**************************/
        /***** settingsPopUp *****/
        /*************************/

        $(document).on('click  mouseup', function (e) {

            if ($('.new').length && !$(e.target).closest('.button-overlay ,.innerNode').length) {
                $('.settingsPopUp-wrap').addClass('open')
                $('.innerNode ').removeClass('new')
                $('fc-dragging')
            }
            if (!$(e.target).closest('.fc-dragging')) {
            }

        });




        $('.edit-question').on('click', function (e) {
            $(".fc-node.fc-selected .innerNode ").addClass('new')

        });



        $('.edit-question').on('click', function () {

            var selectedNode = $('.fc-selected textarea');

            selectedNode.removeAttr('readonly', 'readonly');
            selectedNode.focus();


        });


        textReadonly();


        $('.navTrigger').click(function () {
            $(this).toggleClass('active');
            $('.button-overlay').toggleClass('open')
        });


        // function connectorPoint() {
        //     $('.conditionItem').each(function () {
        //         if (!$(this).text()) {
        //             $(this).siblings('.fc-connector').addClass('connector-point');
        //         }
        //         if ($(this).text()) {
        //             $(this).addClass('connector-point');
        //         }
        //     })
        // }

        // connectorPoint();

        //
        //
        // var allGood=true;
        // var lastInputField=0;
        // var indexInputField=1;
        //
        // $(function(){
        //     $('.add').on("click", function(){
        //
        //         lastInputField++;
        //         indexInputField++;
        //
        //         var ww =  $(this).siblings("input").last();
        //
        //
        //
        //         console.log( ww)
        //
        //         $('.settingsPopUp input').each(function() {
        //             if ($(this).val() == "") {
        //
        //                 allGood=false;
        //                 return false;
        //             }
        //
        //         });
        //
        //         if (!allGood && lastInputField < 4 ) {
        //
        //              $("<label for=" + indexInputField  + ">" + indexInputField + " Answer</label>" +
        //                  "<input type='text' id =" + indexInputField + ">").insertAfter(ww);
        //         }
        //     });
        // });

        //
        //
        // $('.settingsPopUp input').each(function () {
        //
        //             $(this).on( 'click', function () {
        //
        //                 $(this).after('<input type="text"></form>');
        //             console.log($(this))
        //                 });
        //
        //
        //
        //     });

//
// $('.fc-node').on('click', function () {
//     console.log($(this).position())
// });

        $('form').keydown(function(event){
            if(event.keyCode == 13) {
                event.preventDefault();
                return false;
            }
        });




        window.scrollTo(0, 0);


    })
})(jQuery);