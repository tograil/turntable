app.directive("turntable", [ 'loadedImages', function(loadedImages){
    function link(scope, element, attrs) {
        var stage = new Konva.Stage({
            container: element[0],   // id of container <div>
            width: 552,
            height: 427
        });

        loadedImages.loadImages().then(function (images) {
            addBackgroundLayer(stage, images.background);
            addMachineLayer(stage, images.machine);
            var disc = addDiscLayer(stage, images.disk);

            var control = addControlLayer(stage, {
                image: images.control,
                start: function () {
                    disc.start();
                },
                stop: function () {
                    disc.stop();
                }
            });

            var play = addOnOffLayer(stage, {
                on: images.playOn,
                off: images.playOff,
                start: control.start,
                stop: control.stop
            });

            var play = addPowerLayer(stage, {
                on: images.powerOn,
                off: images.powerOff,
                start: control.start,
                stop: control.stop
            });
        })
    }

    return {
        restrict: 'E',
        replace: true,
        scope: true,
        link: link,
        template: '<div></div>'
    };
}]);