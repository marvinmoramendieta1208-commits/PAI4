const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

// Reproducir
playBtn.onclick = () => {
    audio.play();
};

// Detener y resetear
pauseBtn.onclick = () => {
    audio.pause();
    audio.currentTime = 0;
};


audio.ontimeupdate = () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
};


progress.oninput = () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
};

