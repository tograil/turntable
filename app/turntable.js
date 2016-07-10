var app = angular.module('tt', []);

app.value('imagePath', 'app/img/');

app.value('images', {
    background: 'background.jpg',
    machine: 'turntable-base.png',
    disk: 'disc.png',
    control: 'music-control.png',
    playOn: 'btn-play-on.png',
    playOff: 'btn-play-off.png',
    powerOn: 'btn-power-on.png',
    powerOff: 'btn-power-off.png',
    speed33On: 'btn-33-on.png',
    speed33Off: 'btn-33-off.png',
    speed45On: 'btn-45-on.png',
    speed45Off: 'btn-45-off.png',
    speedSlider: 'speed-control.png',
    speedSliderButton: 'speed-control-btn.png'
});

app.factory('loadedImages', ['$q', 'imagePath', 'images', function ($q, imagePath, images) {
    var loadedImages = [];

    function loadImages() {
        var imagesDeffered = $q.defer();

        var imagesCount = Object.keys(images).length;
        var loadedImagesCount = 0;

        for(var imageName in images)
        {
            createImage(imageName);
        }

        function createImage(imageName) {
            var image = new Image();
            image.onload = function () {
                loadedImages[imageName] = image;
                loadedImagesCount++;
                if(loadedImagesCount >= imagesCount)
                {
                    imagesDeffered.resolve(loadedImages);
                }
            };

            image.src = imagePath + images[imageName];
        }

        return imagesDeffered.promise;
    }
    
    return {
        loadImages: loadImages
    }
    
}])