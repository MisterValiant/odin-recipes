var audio = new Audio('audio/genshin-bgm.mp3');

function audioController() {
    if (!audio.paused) {
        audio.pause();
        document.getElementById('audio-player').src='images/pause.png';
        document.getElementById('audio-player').title='Play';
    } else {
        audio.play();
        audio.loop=true;
        audio.volume = 0.8;
        document.getElementById('audio-player').src='images/play.png';
        document.getElementById('audio-player').title='Pause';
    }
}
