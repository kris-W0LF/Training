

const songName=document.getElementById("songName");
const ArtistName=document.getElementById("ArtistName");
const audio = document.getElementById("audio");
const currentTime = document.getElementById("current-time");
const progress = document.querySelector(".progress");
const progressFill = document.getElementById("progress-fill");
const duration = document.getElementById("duration");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const volumeSlider = document.querySelector(".volume-slider");
const volumeFill = document.querySelector(".volume-fill");
const volumeThumb = document.querySelector(".volume-thumb");
const volumebtn = document.getElementById("volumebtn");


const song = [
   { name:"In the name of love",
    artist:"BeBe rexha",
    file:"music/In the name of love.mp3",
   },
   { name:"Kiliye Kiliyea",
    artist:"Kalyani Priyadarshan",
    file:"music/Kiliye Kiliye.mp3",
   },

   { name:"Your Eyes",
    artist:"Talwiinder",
    file:"music/Your Eyes.mp3",
   },

    
];
let currentSong = 0;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const second = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, "0")}:
            ${second.toString().padStart(2, "0")}`;
}

audio.addEventListener("loadedmetadata", () => {
    duration.textContent = formatTime(audio.duration);
});


audio.addEventListener("timeupdate", () => {
    currentTime.textContent = formatTime(audio.currentTime);
    const progressPercent =(audio.currentTime / audio.duration) * 100;
    progressFill.style.width = `${progressPercent}%`;
});

progress.addEventListener("click", (event) => {
    const width = progress.clientWidth;
    const click = event.offsetX;
    const songDuration = audio.duration;
    audio.currentTime =
        (click / width) * songDuration;
});


function loadSong() {
    audio.src = song[currentSong].file;
    songName.textContent=song[currentSong].name;
    ArtistName.textContent=song[currentSong].artist;
    audio.load();
    audio.play();
    play.innerHTML = "⏸";
}


play.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        play.innerHTML = "⏸";
    } else {
        audio.pause();
        play.innerHTML = "▶";
    }
});


next.addEventListener("click", () => {
    currentSong++;
    if (currentSong >= song.length) {
        currentSong = 0;
    }
    loadSong();
});
prev.addEventListener("click", () => {
    currentSong--;
    if (currentSong < 0) {
        currentSong = song.length - 1;
    }
    loadSong();
});
loadSong();
volumebtn.addEventListener("click", () => {
    volumeSlider.classList.toggle("show");
});
volumeSlider.addEventListener("click", function (e) {
    const rect = volumeSlider.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    let volume = clickPosition / rect.width;
    volume = Math.max(0, Math.min(1, volume));
    audio.volume = volume;
    updateVolumeSlider(volume);
});
function updateVolumeSlider(volume) {
    const percentage = volume * 100;
    volumeFill.style.width = percentage + "%";
    volumeThumb.style.left = percentage + "%";
}

