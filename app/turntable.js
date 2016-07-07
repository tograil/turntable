var app = angular.module('tt', []);

app.directive("turntable", [ '$interval', function($interval){
    function link(scope, element, attrs) {
        console.info('element: ' + element);
        var ctx = element[0].getContext('2d');
        ctx.font = "30px Arial";

        var backgroundImage = new Image();
        backgroundImage.src = 'app/img/background.jpg';

        var machineImage = new Image();
        backgroundImage.src = 'app/img/machine.jpg';



        var x = 10;
        var y = 10;

        initHandlers(element[0]);
        animate();

        function animate() {
            ctx.drawImage(backgroundImage, 0, 0);

            if(mousepressed)
                ctx.fillStyle="#FF0000";
            else
                ctx.fillStyle="#000000";

            ctx.clearRect(x, y, 30, 30);

            ctx.beginPath();
            ctx.fillRect(x, y, 30, 30);

            //ctx.rotate(Math.PI / 4);


        }

        var mousepressed = false;

        function initHandlers(ctx) {
            ctx.addEventListener("mousedown", function (event) {

                mousepressed = true;
                animate();
                requestAnimationFrame(animate);
            });

            ctx.addEventListener("mouseup", function (event) {
                mousepressed =  false;
                animate();
                requestAnimationFrame(animate);
            });

            ctx.addEventListener("mousemove", function (event) {

                if(mousepressed)
                {
                    ctx.getContext('2d').clearRect(x, y, 30, 30);

                    if(event.offsetX) {
                        x = event.offsetX-15;
                        y = event.offsetY-15;
                    }
                    else if(event.layerX) {
                        x = event.layerX-15;
                        y = event.layerY-15;
                    }

                }

                animate();
                requestAnimationFrame(animate);

            });
        }
    }

    return {
        restrict: 'E',
        replace: true,
        scope: true,
        link: link,
        template: '<canvas id="turntable"></canvas>'
    };
}]);
