var app = angular.module('tt', []);

app.value('imagePath', 'app/img/');

app.value('images', {
    background: 'background.jpg',
    machine: 'machine.png',
    disk: 'disc.png',
    control: 'control.png'
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