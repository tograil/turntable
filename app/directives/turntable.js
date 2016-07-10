app.directive("turntable", [ 'loadedImages', function(loadedImages){
    function link(scope, element, attrs) {
        var stage = new Konva.Stage({
            container: element[0],   // id of container <div>
            width: 700,
            height: 575
        });

        loadedImages.loadImages().then(function (images) {
            addBackgroundLayer(stage, images.background);

            var turntableLayer = new Konva.Layer();

            var turntableGroup = new Konva.Group({
                x: 70,
                y: 50
            });

            addMachineLayer(turntableGroup, images.machine);
            var disc = addDiscLayer(turntableGroup, turntableLayer, images.disk);

            var control = addControlLayer(turntableGroup, turntableLayer, {
                image: images.control,
                start: function () {
                    disc.start();
                },
                stop: function () {
                    disc.stop();
                }
            });

            var play = addOnOffLayer(turntableGroup, turntableLayer, {
                on: images.playOn,
                off: images.playOff,
                start: control.start,
                stop: control.stop
            });

           var power = addPowerLayer(turntableGroup, turntableLayer, {
                on: images.powerOn,
                off: images.powerOff,
                start: control.start,
                stop: control.stop
            });

            var speedButtons = add3345Layer(turntableGroup, turntableLayer, {
                on33: images.speed33On,
                off33: images.speed33Off,
                on45: images.speed45On,
                off45: images.speed45Off
            });

            addSpeedSlider(turntableGroup, turntableLayer, {
                speedButton: images.speedSliderButton,
                speedBase: images.speedSlider
            });

            turntableLayer.add(turntableGroup);

            stage.add(turntableLayer);
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
