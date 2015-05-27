window.onload = function() {
    var video = document.querySelector("#videoElement");
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.oGetUserMedia;
    
    if (navigator.getUserMedia) {
        navigator.getUserMedia({video:true}, handleVideo, videoError);
    }
    
    function handleVideo(stream) {
        console.log("Got to handler");
        video.src = window.URL.createObjectURL(stream);
    }
    
    function videoError(e) {
        console.error("No user media detected.");
    }
}