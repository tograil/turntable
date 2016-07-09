function addMachineLayer(stage, image) {
    var machineLayer = new Konva.Layer();
    var machine = new Konva.Image({
        x:0,
        y:0,
        image: image,
        width: 552,
        height: 427
    });

    machineLayer.add(machine);
    stage.add(machineLayer);
}
