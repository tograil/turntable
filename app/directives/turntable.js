app.directive("turntable", [ 'loadedImages', function(loadedImages){
    function link(scope, element, attrs) {
        var stage = new Konva.Stage({
            container: element[0],   // id of container <div>
            width: 700,
            height: 575
        });

        loadedImages.loadImages().then(function (images) {
            addTurntable(stage, images);
            addWaveControl(stage, images)
        });

        function addTurntable(stage, images) {
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
        }

        function addWaveControl(stage, images) {
            var waveControlLayer = new Konva.Layer();

            var group = new Konva.Group({
                x: 95,
                y: 450
            });

            var waveImage = new Konva.Image({
               x: 0,
                y: 0,
                image: images.soundWave,
                width: 502,
                height: 62
            });

            var waveImageControl = new Konva.Image({
                x: 0,
                y: 75,
                image: images.soundWaveControl,
                width: 502,
                height: 7
            });

       var waveImageControlBtn = new Konva.Image({
                x: 7,
                y: 79,
                image: images.soundWaveControlBtn,
                width: 29,
                height: 29,
                offset: {
                    x: 15,
                    y: 15
                }
            });

            group.add(waveImage);
            group.add(waveImageControl);
            group.add(waveImageControlBtn);

            waveControlLayer.add(group);
            stage.add(waveControlLayer);

        }
    }

    return {
        restrict: 'E',
        replace: true,
        scope: true,
        link: link,
        template: '<div></div>'
    };
}]);
