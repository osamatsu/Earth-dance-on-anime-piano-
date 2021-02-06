var song = document.getElementById("song");
var icon = document.getElementById("icon");

icon.onclick = function() {
    if(song.paused) {
        song.play();
        icon.src = "/img/icon2.svg"
    }
    else {
        song.pause();
        icon.src = "/img/icon1.svg"
    }
}