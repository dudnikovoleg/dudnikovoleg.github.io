

//Tutorial
    //nodes  - start page template
    //source:  - index start line,
    //destination: index finish line,
    //connectors.id - id lines
    //finish-show  - class for showed block 'finish'
    //startText  - if you want text start
    //textVal  - start text in you block
    //finish-show - add nodes class for finish

angular.module('app', ['flowchart'])




    .controller('AppCtrl', function AppCtrl($scope, Modelfactory, flowchartConstants) {

        var deleteKeyCode = 46;
        var ctrlKeyCode = 17;
        var aKeyCode = 65;
        var escKeyCode = 27;
        var nextNodeID = 10;
        var nextConnectorID = 20;
        var ctrlDown = false;



        var model = {
            nodes: [
                // {
                //     name: '',
                //     id: nextNodeID++,
                //     x: 200,
                //     y: 20,
                //     startText: 'Start',
                //     class: 'star-question',
                //     figureClass: 'star',
                //     textVal: 'How was the food?',
                //
                //     connectors: [
                //         // {
                //         //     type: flowchartConstants.topConnectorType,
                //         //     id: 'template1',
                //         // },
                //         // {
                //         //     type: flowchartConstants.topConnectorType,
                //         //     id: 'template2'
                //         // },
                //         {
                //             type: flowchartConstants.bottomConnectorType,
                //             id: 'template3'
                //         },
                //         {
                //             type: flowchartConstants.bottomConnectorType,
                //             id: 'template4'
                //         }
                //     ]
                // },
                // {
                //     name: '',
                //     id: nextNodeID++,
                //     x: 600,
                //     y: 500,
                //
                //     class: 'text-question',
                //     figureClass: 'rectangle',
                //     textVal: 'What didn`t you like about the food?',
                //     connectors: [
                //         {
                //             type: flowchartConstants.topConnectorType,
                //             id: 'template5'
                //         },
                //         {
                //             type: flowchartConstants.topConnectorType,
                //             id: 'template6'
                //         },
                //
                //         {
                //             type: flowchartConstants.bottomConnectorType,
                //             id: 'template7'
                //         },
                //         {
                //             type: flowchartConstants.bottomConnectorType,
                //             id: 'template8'
                //         }
                //     ]
                // },
                // {
                //     name: '',
                //     id: nextNodeID++,
                //     x: 150,
                //     y: 600,
                //     class: 'many-questions',
                //     figureClass: 'circle',
                //     textVal: 'How was the service?',
                //     connectors: [
                //         {
                //             type: flowchartConstants.topConnectorType,
                //             id: 'template9'
                //         },
                //         {
                //             type: flowchartConstants.topConnectorType,
                //             id: 'template10'
                //         },
                //         {
                //             type: flowchartConstants.bottomConnectorType,
                //             id: 'template11'
                //         },
                //         {
                //             type: flowchartConstants.bottomConnectorType,
                //             id: 'template12'
                //         }
                //     ]
                // },
                // {
                //     name: '',
                //     id: nextNodeID++,
                //     x: 700,
                //     y: 800,
                //     class: 'text-question ' ,
                //     figureClass: 'rectangle',
                //     textVal: 'What didn`t you like about the service?',
                //     connectors: [
                //         {
                //             type: flowchartConstants.topConnectorType,
                //             id: 'template13'
                //         },
                //         {
                //             type: flowchartConstants.topConnectorType,
                //             id: 'template14'
                //         },
                //         {
                //             type: flowchartConstants.bottomConnectorType,
                //             id: 'template15'
                //         },
                //         {
                //             type: flowchartConstants.bottomConnectorType,
                //             id: 'template16'
                //         }
                //     ]
                // },


                // {
                //     name: '',
                //     id: nextNodeID++,
                //     x: 400,
                //     y: 1200,
                //     class: 'multi-question finish-show',
                //     figureClass: 'square',
                //     textVal: 'How did you find out about us?',
                //     connectors: [
                //         {
                //             id: 'template17',
                //             type: flowchartConstants.topConnectorType
                //
                //         },
                //         {
                //             id: 'template18',
                //             type: flowchartConstants.topConnectorType
                //         },
                //
                //         {
                //             id: 'template19',
                //             type: flowchartConstants.bottomConnectorType
                //         },
                //         {
                //             id: 'template20',
                //             type: flowchartConstants.bottomConnectorType
                //         }
                //
                //     ]
                // }

            ],
            edges: [
                // {
                //     source: 'template4',
                //     destination: 'template6'
                // },
                // {
                //     source: 'template3',
                //     destination: 'template9'
                // },
                // {
                //     source: 'template5',
                //     destination: 'template10'
                // },
                // {
                //     source: 'template12',
                //     destination: 'template15'
                // },
                // {
                //     source: 'template16',
                //     destination: 'template18'
                // },
                // {
                //     source: 'template11',
                //     destination: 'template17'
                // },



            ]
        };




        $scope.flowchartselected = [];
        var modelservice = Modelfactory(model, $scope.flowchartselected);

        $scope.model = model;
        $scope.modelservice = modelservice;

        $scope.keyDown = function (evt) {
            if (evt.keyCode === ctrlKeyCode) {
                ctrlDown = true;
                evt.stopPropagation();
                evt.preventDefault();
            }
        };

        $scope.keyUp = function (evt) {

            if (evt.keyCode === deleteKeyCode) {
                modelservice.deleteSelected();
            }

            if (evt.keyCode == aKeyCode && ctrlDown) {
                modelservice.selectAll();
            }

            if (evt.keyCode == escKeyCode) {
                modelservice.deselectAll();
            }

            if (evt.keyCode === ctrlKeyCode) {
                ctrlDown = false;
                evt.stopPropagation();
                evt.preventDefault();
            }
        };








        var nodeName = '';



        $scope.textQuestion = function () {


            var newNode = {
                name: '',
                id: nextNodeID++,
                x: 500,
                y: 0,
                startText: '',
                class: 'text-question new',
                figureClass: 'rectangle',
                connectors: [
                    {
                        id: nextConnectorID++,
                        type: flowchartConstants.topConnectorType
                    }

                ]
            };

            model.nodes.push(newNode);
        };


        $scope.manyQuestions = function () {


            var newNode = {
                name: '',
                id: nextNodeID++,
                x: 500,
                y: 120,
                startText: '',
                class: 'many-questions new',
                figureClass: 'circle',
                connectors: [
                    {
                        id: nextConnectorID++,
                        type: flowchartConstants.topConnectorType
                    }



                ]
            };

            model.nodes.push(newNode);
        };


        $scope.starQuestion = function (nodeName) {


            var newNode = {

                name: '',
                id: nextNodeID++,
                x: 500,
                y: 240,
                startText: '',
                class: 'star-question new',
                figureClass: 'star',
                connectors: [
                    {
                        id: nextConnectorID++,
                        type: flowchartConstants.topConnectorType
                    }


                ]
            };

            model.nodes.push(newNode);
        };


        $scope.multiQuestion = function () {


            var newNode = {
                name: '',
                id: nextNodeID++,
                x: 500,
                y: 360,
                startText: '',
                class: 'multi-question new',
                figureClass: 'square',
                connectors: [

                    {
                        id: nextConnectorID++,
                        type: flowchartConstants.topConnectorType
                    }



                ]
            };

            model.nodes.push(newNode);
        };







        $scope.activateWorkflow = function () {
            angular.forEach($scope.model.edges, function (edge) {
                edge.active = !edge.active;
            });
        };

        $scope.addNewInputConnector = function () {
            var connectorName = prompt("Enter a connector name:", "New connector");
            if (!connectorName) {
                return;
            }

            var selectedNodes = modelservice.nodes.getSelectedNodes($scope.model);
            for (var i = 0; i < selectedNodes.length; ++i) {
                var node = selectedNodes[i];
                node.connectors.push({id: nextConnectorID++, type: flowchartConstants.topConnectorType});
            }
        };

        $scope.addNewOutputConnector = function () {
            // var connectorName = prompt("Enter a connector name:", "New connector");
            // if (!connectorName) {
            //     return;
            // }

            var selectedNodes = modelservice.nodes.getSelectedNodes($scope.model);
            for (var i = 0; i < selectedNodes.length; ++i) {
                var node = selectedNodes[i];
                node.connectors.push({id: nextConnectorID++, type: flowchartConstants.bottomConnectorType});
            }
        };

        $scope.deleteSelected = function () {
            modelservice.deleteSelected();
        };

        $scope.callbacks = {
            edgeDoubleClick: function () {
                console.log('Edge double clicked.');
            },
            edgeMouseOver: function () {
                console.log('mouserover')
            },
            isValidEdge: function (source, destination) {
                return source.type === flowchartConstants.bottomConnectorType && destination.type === flowchartConstants.topConnectorType;
            },
            nodeCallbacks: {
                'doubleClick': function (event) {
                    console.log('Node was doubleclicked.')
                }
            }
        };




        /***********************************/
        /****** Settings PopUp start *******/
        /***********************************/





        (function ($) {
            $(document).ready(function () {



                $('.button-control').not( ".edit-btn" ).on("click", function () {
                     $('.settingsPopUp-wrap').removeClass('disabled')
                })
                $('.button-control').on("click", function () {


                    settingsPopUp()
                });

                var allGood             = true,
                    lastQuestionInput   = $('.settingsPopUp input').last(),
                    allQuestionInput    = $('.settingsPopUp input'),
                    lastInputField      = $(this).siblings("input").length + 1;

                function settingsPopUp () {

                    $('.add').on("click", function () {

                         lastQuestionInput = $('.settingsPopUp input').last();
                         allQuestionInput = $('.settingsPopUp input');

                        $('.add').addClass('disabled');

                        allQuestionInput.each(function () {
                            if (!$(this).val()) {
                                allGood = false;
                            }
                        });

                         lastInputField = $(this).siblings("input").length + 1;

                        if (allGood && lastInputField <= 10) {
                            $("<label for=" + lastInputField + ">" + lastInputField + " Answer</label>" +
                                "<input  class='answer' type='text' id =" + lastInputField + ">").insertAfter(lastQuestionInput);
                        }
                        allGood=true;
                    });



                    $( ".settingsPopUp, .settingsPopUp input" ).on('change keyup', function () {

                         lastInputField = $(this).siblings("input").length + 1;

                        allQuestionInput = $('.settingsPopUp input');

                        allQuestionInput.each(function () {
                            if (!$(this).val()) {
                                $('.add').addClass('disabled')
                            }
                            else {
                                $('.add').removeClass('disabled')
                            }
                        });

                    });

                }

                settingsPopUp();



                /******************/
                /****done btn****/
                /******************/

                $('.done').on("click", function () {
                    var settingsInputVal = [];

                    $('.settingsPopUp input').each(function (index) {

                        if ($(this).val()){
                            settingsInputVal.push($(this).val());

                            return settingsInputVal;
                        }

                    });

                    $('.fc-selected .fc-bottomConnectors .fc-connector').each(function (index) {

                        $(this).text(index + 1);
                        $(this).prev('.conditionItem').text(settingsInputVal[index]);
                    });
                    settingsInputVal = [];

                    $('.startForm input,.startForm label ').detach()
                    $('.startForm ').append(' <label for="1">1 Answer</label> <input class="answer" id="1" type="text">');
                    $('.settingsPopUp-wrap').removeClass('open')

                });









                $('.edit-answer , .edit-answer').on("click", function () {
                    if (!$(this).attr('disabled')) {

                        $('.startForm input,.startForm label ').detach();
                        $('.add').removeClass('disabled');

                        var connectorVal = [];

                        $('.fc-selected .fc-bottomConnectors .conditionItem ').each(function (index) {

                                connectorVal.push($(this).text());
                                connectorValLeng = connectorVal.length;

                                $('.startForm ').append(' <label for="1">' + connectorValLeng  + ' Answer</label> <input value="' + connectorVal[index] + '" class="answer" id="1" type="text">');
                                return connectorVal;
                        });

                        $('.settingsPopUp-wrap').addClass('open')
                    }
                });



                $('.add, .button-control').on('click', function (e) {
                    $('.startForm input').on('focus ', function () {
                        $('.startForm input').removeClass('focus')
                        $(this).addClass('focus')
                    });



                });


                $('.delete').on("click", function (e) {

                    var minInpunLeng = $('.startForm input').length;
                    var firstPoint = $('.fc-selected .fc-bottomConnectors  .fc-magnet:eq(0)');


                    if (minInpunLeng > 1){
                        $('.delete').removeClass('disabled');
                        $('.focus').prev('label').detach();
                        $('.focus').detach();
                        console.log(firstPoint)
                        firstPoint.detach();
                        return
                    }

                });

                $('.edit-question').on("click", function () {
                    if (!$(this).attr('disabled')) {
                        $('.settingsPopUp-wrap').addClass('disabled')
                    }
                });
                })
        })(jQuery);


    });




/***********************************/
/****** Settings PopUp end *******/
/***********************************/





