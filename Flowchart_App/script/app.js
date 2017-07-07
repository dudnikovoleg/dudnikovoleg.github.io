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

            ],
            edges: [

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
            console.log(nodeName)


            var newNode = {
                name: 'You question',
                id: nextNodeID++,
                x: 500,
                y: 100,
                color: '#F15B26',
                connectors: [
                    {
                        id: nextConnectorID++,
                        type: flowchartConstants.topConnectorType
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
            console.log(nodeName)


            var newNode = {
                name: 'You question',
                id: nextNodeID++,
                x: 500,
                y: 100,
                color: '#F15B26',
                connectors: [
                    {
                        id: nextConnectorID++,
                        type: flowchartConstants.topConnectorType
                    },

                    {
                        id: nextConnectorID++,
                        type: flowchartConstants.bottomConnectorType
                    }

                ]
            };

            model.nodes.push(newNode);
        };


        $scope.starQuestion = function (nodeName) {


            var newNode = {
                name: nodeName,
                id: nextNodeID++,
                x: 200,
                y: 100,
                color: '#F15B26',
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
                    }
                ]
            };

            model.nodes.push(newNode);
        };


        $scope.multiQuestion = function () {


            var newNode = {
                name: nodeName,
                id: nextNodeID++,
                x: 200,
                y: 100,
                color: '#F15B26',
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
function textAreaAdjust(o) {
    o.style.height = "20px";
    o.style.height = (12+o.scrollHeight)+"px";
}