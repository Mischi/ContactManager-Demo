//http://www.rubydesigner.com/blog/resizing-images-before-upload-using-html5-canvas


angular.module('contactmanager')
    .directive('fileupload',
        function () {
            'use strict';

            var resizeImage = function (origImage) {
                var max_height = 300;
                var max_width = 250;

                var canvas = document.getElementById('resizeArea');
                
                var height = origImage.height;
                var width = origImage.width;

                // calculate the width and height, constraining the proportions
                if (width > height) {
                    if (width > max_width) {
                        //height *= max_width / width;
                        height = Math.round(height *= max_width / width);
                        width = max_width;
                    }
                } else {
                    if (height > max_height) {
                        //width *= max_height / height;
                        width = Math.round(width *= max_height / height);
                        height = max_height;
                    }
                }

                canvas.width = width;
                canvas.height = height;

                //draw image on canvas
                var ctx = canvas.getContext("2d");
                ctx.drawImage(origImage, 0, 0, width, height);

                // get the data from canvas as 70% jpg
                return canvas.toDataURL("image/jpeg", 0.7); 
            };


            return {
                restrict: 'AE',
                replace: true,
                template: '<div>' +
                            '<input type="file">' +
                            '<div>' + 
                                '<img ng-show="imageDataUrl" ng-src="{{imageDataUrl}}" type="{{image.type}}">' +
                            '</div>' +
                          '</div>',
                controller: 'FileUploadCtrl',
                link: function postLink(scope, element, attrs) {
                    element.bind('change', function (evt) {
                        if (evt.target.files.length == 0) {
                            return;
                        }

                        var image = scope.image = evt.target.files[0];

                        // Only process image files.
                        if (!image.type.match('image.*')) {
                            return;
                        }

                        var reader = new FileReader();

                        reader.onload = function (e) {

                            //create Blob from loaded ArrayBuffer
                            var origImageBlob = new Blob([new Int8Array(e.target.result)], { type: image.type });
                            var origImageUrl = URL.createObjectURL(origImageBlob);

                            //create image
                            var origImage = new Image();
                            origImage.onload = function () {
                                var resizedImageUrl = resizeImage(origImage);

                                scope.$apply(function () {
                                    scope.imageDataUrl = resizedImageUrl;
                                });
                            };

                            //load origImage into image element
                            origImage.src = origImageUrl;
                        };

                        // Read in the image file as ArrayBuffer.                       
                        reader.readAsArrayBuffer(image);
                        //reader.readAsDataURL(image);
                    });
                }
            };
        }
    );