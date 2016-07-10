function addControlLayer(stage, layer, params) {
    var controlGroup = new Konva.Group();

    var rollStarted = false;

    var control = new Konva.Image({
        x:428,
        y:94,
        image: params.image,
        width: 110,
        height: 310,
        offset: {
            x: 55,
            y: 65
        }
    });

    controlGroup.add(control);

    var angularSpeed = 90;
    var pos = 0;
    var animOne = new Konva.Animation(function(frame) {
        var angleDiff = frame.timeDiff * angularSpeed / 1000;
        control.rotate(angleDiff);
        pos++;
        if(pos >= 25)
            animOne.stop();
    }, layer);

    var animTwo = new Konva.Animation(function(frame) {
        var angleDiff = frame.timeDiff * -angularSpeed / 1000;
        control.rotate(angleDiff);
        pos--;
        if(pos <= 0)
            animTwo.stop();
    }, layer);
    
    stage.add(controlGroup);
    
    function controlStart() {
        rollStarted = true;
        animOne.start();
        params.start();
    }

    function controlStop() {
        rollStarted = false;
        animTwo.start();
        params.stop();
    }

    return {
        start: controlStart,
        stop: controlStop
    }
}
