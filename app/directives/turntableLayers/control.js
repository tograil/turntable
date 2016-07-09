function addControlLayer(stage, params) {
    var controlLayer = new Konva.Layer();

    var rollStarted = false;

    var control = new Konva.Image({
        x:432,
        y:125,
        image: params.image,
        width: 110,
        height: 310,
        offset: {
            x: 55,
            y: 65
        }
    });



    controlLayer.add(control);


    // one revolution per 4 seconds
    var angularSpeed = 90;
    var pos = 0;
    var animOne = new Konva.Animation(function(frame) {
        var angleDiff = frame.timeDiff * angularSpeed / 1000;
        control.rotate(angleDiff);
        pos++;
        if(pos >= 25)
            animOne.stop();
    }, controlLayer);

    var animTwo = new Konva.Animation(function(frame) {
        var angleDiff = frame.timeDiff * -angularSpeed / 1000;
        control.rotate(angleDiff);
        pos--;
        if(pos <= 0)
            animTwo.stop();
    }, controlLayer);
    
    stage.add(controlLayer);
    
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
