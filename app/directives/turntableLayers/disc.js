function addDiscLayer(stage, image) {
    var discLayer = new Konva.Layer();

    var disc = new Konva.Image({
        x:233,
        y:213,
        image: image,
        width: 311,
        height: 311,
        offset: {
            x: 155,
            y: 155
        }
    });

    discLayer.add(disc);
    stage.add(discLayer);

    // one revolution per 4 seconds
    var angularSpeed = 90;
    var anim = new Konva.Animation(function(frame) {
        var angleDiff = frame.timeDiff * angularSpeed / 1000;
        disc.rotate(angleDiff);
    }, discLayer);

    return {
        start: function() {
            anim.start()
        },
        stop: function () {
            anim.stop();
        }

    }
}
