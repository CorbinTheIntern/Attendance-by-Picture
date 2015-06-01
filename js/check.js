function detectFaces() {
    $("#canvas").faceDetection({
        complete: function(faces) {
            console.log(faces);
        }
    });
}