function addSpeedSlider(stage, layer, params) {
   var group = new Konva.Group({
            x: 450,
            y: 185
        });
    
    var speedSliderBase = new Konva.Image({
        x: 0,
        y: 0,
        image: params.speedBase,
        width: 31,
        height: 152
    });

    var speedSliderButton = new Konva.Image({
       x: 17,
        y: 76,
        image: params.speedButton,
        width: 29,
        height: 30,
        offset: {
            x: 15,
            y: 15
        },
        draggable: true,
        dragBoundFunc: function (pos) {
            var ypos = pos.y;

            if(ypos <= 240)
                ypos = 240;
            if(ypos >= 380)
                ypos = 380;
            return {
                y: ypos,
                x: this.getAbsolutePosition().x
            }
        }
    });

    group.add(speedSliderBase);
    group.add(speedSliderButton);

    var pressed = false;



    stage.add(group);
}
