function add3345Layer(stage, params) {

var onOffLayer = new Konva.Layer();

var group = new Konva.Group({
    x: 90,
    y: 355
});

var off33 = new Konva.Image({
    x:0,
    y:0,
    image: params.off33,
    width: 32,
    height: 26,
    visible: false
});

var on33 = new Konva.Image({
    x:0,
    y:0,
    image: params.on33,
    width: 32,
    height: 26
});

var off45 = new Konva.Image({
    x:29,
    y:0,
    image: params.off45,
    width: 32,
    height: 26
});

var on45 = new Konva.Image({
    x:29,
    y:0,
    image: params.on45,
    width: 32,
    height: 26,
    visible: false
});

group.add(on33);
group.add(off33);
group.add(on45);
group.add(off45);

onOffLayer.add(group);

off33.hide();
on45.hide();

off45.on('mousedown', function () {
    //params.start();
    off45.hide();
    on33.hide();
    off33.show();
    on45.show();
    onOffLayer.draw();
});

off33.on('mousedown', function () {
    //params.stop();
    on45.hide();
    off33.hide();
    on33.show();
    off45.show();
    onOffLayer.draw();
});

stage.add(onOffLayer);
}