var app = angular.module('tt', []);

app.directive("turntable", [ '$interval', function($interval){
    function link(scope, element, attrs) {
        console.info('element: ' + element);
        var ctx = element[0].getContext('2d');
        ctx.font = "30px Arial";
        ctx.fillRect(10, 20, 30, 30);

        var x = 0;


        $interval(rotate, 1000);

        function rotate() {
            ctx.clearRect(10+x, 20, 30, 30);

            x+=1;

            if(x > 100)
                x = 0;

            ctx.beginPath();
            ctx.fillRect(10+x, 20, 30, 30);

            //ctx.rotate(Math.PI / 4);

            requestAnimationFrame(rotate)
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
