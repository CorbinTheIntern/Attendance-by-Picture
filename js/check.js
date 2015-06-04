function detectFaces() {
    $("#canvas").faceDetection({
        complete: function(faces) {
            if (faces) {
                console.log(faces);
            } else {
                console.log("No faces found.");
            }
        }
    });
}