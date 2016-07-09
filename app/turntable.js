var app = angular.module('tt', []);

app.directive("turntable", [ '$interval', function($interval){
    function link(scope, element, attrs) {
        var stage = new Konva.Stage({
            container: element[0],   // id of container <div>
            width: 552,
            height: 427
        });

        var backgroundLayer = new Konva.Layer();
        var machineLayer = new Konva.Layer();
        var discLayer = new Konva.Layer();
        var controlLayer = new Konva.Layer();



        var backgroundImage = new Image();
        backgroundImage.onload = function () {
            var background = new Konva.Image({
                x:0,
                y:0,
                image: backgroundImage,
                width: 552,
                height: 427
            });

            backgroundLayer.add(background);

        };
        backgroundImage.src = 'app/img/background.jpg';

        var machineImage = new Image();
        machineImage.onload = function () {
            var machine = new Konva.Image({
                x:0,
                y:0,
                image: machineImage,
                width: 552,
                height: 427
            });

            machineLayer.add(machine);

        };

        machineImage.src = 'app/img/machine.png';

        var diskImage = new Image();
        diskImage.onload = function () {
            var disc = new Konva.Image({
                x:233,
                y:213,
                image: diskImage,
                width: 311,
                height: 311,
                offset: {
                    x: 155,
                    y: 155
                }
            });

            discLayer.add(disc);


            // one revolution per 4 seconds
            var angularSpeed = 90;
            var anim = new Konva.Animation(function(frame) {
                var angleDiff = frame.timeDiff * angularSpeed / 1000;
                disc.rotate(angleDiff);
            }, discLayer);

            anim.start();
        };

        diskImage.src = 'app/img/disc.png';

        var controlImage = new Image();
        controlImage.onload = function () {
            var control = new Konva.Image({
                x:430,
                y:125,
                image: controlImage,
                width: 110,
                height: 310,
                offset: {
                    x: 55,
                    y: 65
                }
            });

            control.on('mousedown', function () {
                alert('hello');
            });

            controlLayer.add(control);


            // one revolution per 4 seconds
            var angularSpeed = 90;
            var animOne = new Konva.Animation(function(frame) {
                var angleDiff = frame.timeDiff * angularSpeed / 1000;
                control.rotate(angleDiff);
            }, discLayer);
        };

        controlImage.src = 'app/img/control.png';


        stage.add(backgroundLayer);
        stage.add(machineLayer);
        stage.add(discLayer);
        stage.add(controlLayer);

    }

    return {
        restrict: 'E',
        replace: true,
        scope: true,
        link: link,
        template: '<div></div>'
    };
}]);
