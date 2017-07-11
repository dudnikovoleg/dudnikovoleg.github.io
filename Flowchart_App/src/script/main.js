/**
 * Created by Oleg on 10.07.2017.
 */

(function ($) {
    $(document).ready(function () {


        $('.textareaWrap').perfectScrollbar();

        function widthHeight() {
            var windowsWidth = (window.innerWidth),
                // windowGeight = $(window).height(),
                buttonWidth = $('.button-overlay').width(),
                contentWidth = windowsWidth - buttonWidth;




            $('.content').css({
                'width': contentWidth - 100 + 'px',
                // 'min-height': windowGeight + 'px'
            });
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
                    '<7'
                ]
            },

//star Question array
            starQuestion: {
                conditionItem10: [
                    '',
                    '',
                    '>7',
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
            function manyQuestionCycle () {
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

            function starQuestionCycle () {

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
            function multiQuestionCycle () {
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


        $('.button-control button').on('click',function () {
            $('textarea')
                .on('input', function() {
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
                .focus();
        });




        window.scrollTo(0, 0);
    })
})(jQuery);