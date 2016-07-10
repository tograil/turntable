function addBackgroundLayer(stage, image) {
    var backgroundLayer = new Konva.Layer();
    var background = new Konva.Image({
        x:0,
        y:0,
        image: image,
        width: 700,
        height: 575
    });

    backgroundLayer.add(background);
    stage.add(backgroundLayer);
}
