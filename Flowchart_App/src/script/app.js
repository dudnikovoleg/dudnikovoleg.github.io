angular.module('app', ['flowchart'])
// .factory('prompt', function () {
//   return prompt;
// })
// .config(function (NodeTemplatePathProvider) {
//   NodeTemplatePathProvider.setTemplatePath("flowchart/node.html");
// })

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
                {
                    name: '',
                    id: nextNodeID++,
                    x: 200,
                    y: 20,
                    startText: 'Start',
                    class: 'star-question',
                    figureClass: 'star',
                    textVal: 'How was the food?',
                    connectors: [
                        {
                            type: flowchartConstants.topConnectorType,
                            id: 'template1'
                        },
                        {
                            type: flowchartConstants.topConnectorType,
                            id: 'template2'
                        },
                        {
                            type: flowchartConstants.bottomConnectorType,
                            id: 'template3'
                        },
                        {
                            type: flowchartConstants.bottomConnectorType,
                            id: 'template4'
                        }
                    ]
                },
                {
                    name: '',
                    id: nextNodeID++,
                    x: 600,
                    y: 500,

                    class: 'text-question',
                    figureClass: 'rectangle',
                    textVal: 'What didn`t you like about the food?',
                    connectors: [
                        {
                            type: flowchartConstants.topConnectorType,
                            id: 'template5'
                        },
                        {
                            type: flowchartConstants.topConnectorType,
                            id: 'template6'
                        },

                        {
                            type: flowchartConstants.bottomConnectorType,
                            id: 'template7'
                        },
                        {
                            type: flowchartConstants.bottomConnectorType,
                            id: 'template8'
                        }
                    ]
                },
                {
                    name: '',
                    id: nextNodeID++,
                    x: 150,
                    y: 600,
                    class: 'many-questions',
                    figureClass: 'circle',
                    textVal: 'How was the service?',
                    connectors: [
                        {
                            type: flowchartConstants.topConnectorType,
                            id: 'template9'
                        },
                        {
                            type: flowchartConstants.topConnectorType,
                            id: 'template10'
                        },
                        {
                            type: flowchartConstants.bottomConnectorType,
                            id: 'template11'
                        },
                        {
                            type: flowchartConstants.bottomConnectorType,
                            id: 'template12'
                        }
                    ]
                },
                {
                    name: '',
                    id: nextNodeID++,
                    x: 700,
                    y: 800,
                    class: 'text-question',
                    figureClass: 'rectangle',
                    textVal: 'What didn`t you like about the service?',
                    connectors: [
                        {
                            type: flowchartConstants.topConnectorType,
                            id: 'template13'
                        },
                        {
                            type: flowchartConstants.topConnectorType,
                            id: 'template14'
                        },
                        {
                            type: flowchartConstants.bottomConnectorType,
                            id: 'template15'
                        },
                        {
                            type: flowchartConstants.bottomConnectorType,
                            id: 'template16'
                        }
                    ]
                },


                {
                    name: '',
                    id: nextNodeID++,
                    x: 600,
                    y: 1200,
                    class: 'multi-question',
                    figureClass: 'square',
                    textVal: 'How did you find out about us?',
                    connectors: [
                        {
                            id: 'template17',
                            type: flowchartConstants.topConnectorType

                        },
                        {
                            id: 'template18',
                            type: flowchartConstants.topConnectorType
                        },

                        {
                            id: 'template19',
                            type: flowchartConstants.bottomConnectorType
                        },
                        {
                            id: 'template20',
                            type: flowchartConstants.bottomConnectorType
                        }

                    ]
                }

            ],
            edges: [
                {
                    source: 'template4',
                    destination: 'template6'
                },
                {
                    source: 'template3',
                    destination: 'template9'
                },
                {
                    source: 'template5',
                    destination: 'template10'
                },
                {
                    source: 'template12',
                    destination: 'template15'
                },
                {
                    source: 'template16',
                    destination: 'template18'
                },
                {
                    source: 'template11',
                    destination: 'template17'
                },



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
                class: 'text-question',
                figureClass: 'rectangle',
                connectors: [
                    {
                        id: nextConnectorID++,
                        type: flowchartConstants.topConnectorType

                    },
                    {
                        id: nextConnectorID++,

                        type: flowchartConstants.topConnectorType
                    },

                    {
                        id: nextConnectorID++,
                        type: flowchartConstants.bottomConnectorType
                    },
                    {
                        id: nextConnectorID++,
                        type: flowchartConstants.bottomConnectorType
                    },

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
                class: 'many-questions',
                figureClass: 'circle',
                connectors: [
                    {
                        id: nextConnectorID++,
                        type: flowchartConstants.topConnectorType
                    },
                    {
                        id: nextConnectorID++,
                        type: flowchartConstants.topConnectorType
                    },

                    {
                        id: nextConnectorID++,
                        type: flowchartConstants.bottomConnectorType
                    },
                    {
                        id: nextConnectorID++,
                        type: flowchartConstants.bottomConnectorType
                    },

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
                class: 'star-question',
                figureClass: 'star',
                connectors: [
                    {
                        id: nextConnectorID++,
                        type: flowchartConstants.topConnectorType
                    },
                    {
                        id: nextConnectorID++,
                        type: flowchartConstants.topConnectorType
                    },

                    {
                        id: nextConnectorID++,
                        type: flowchartConstants.bottomConnectorType
                    },
                    {
                        id: nextConnectorID++,
                        type: flowchartConstants.bottomConnectorType
                    },

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
                class: 'multi-question',
                figureClass: 'square',
                connectors: [

                    {
                        id: nextConnectorID++,
                        type: flowchartConstants.topConnectorType
                    },
                    {
                        id: nextConnectorID++,
                        type: flowchartConstants.topConnectorType
                    },

                    {
                        id: nextConnectorID++,
                        type: flowchartConstants.bottomConnectorType
                    },
                    {
                        id: nextConnectorID++,
                        type: flowchartConstants.bottomConnectorType
                    },
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
            var connectorName = prompt("Enter a connector name:", "New connector");
            if (!connectorName) {
                return;
            }

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
    })
;
// function textAreaAdjust(o) {
//     o.style.height = "20px";
//     o.style.height = (12+o.scrollHeight)+"px";
// }






