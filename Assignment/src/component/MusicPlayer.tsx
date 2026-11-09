import { useRef, useState, useEffect } from "react";
import "./MusicPlayer.css";

interface Song {
  name: string;
  artist: string;
  file: string;
}

const songs: Song[] = [
  {
    name: "In the name of love",
    artist: "BeBe Rexha",
    file: "/music/In the name of love.mp3",
  },
  {
    name: "Kiliye Kiliyea",
    artist: "Kalyani Priyadarshan",
    file: "/music/Kiliye Kiliye.mp3",
  },
  {
    name: "Your Eyes",
    artist: "Talwiinder",
    file: "/music/Your Eyes.mp3",
  },
];

function formatTime(seconds: number): string {

  const minutes = Math.floor(seconds / 60);
  const second = Math.floor(seconds % 60);

  return `${String(minutes).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
}

function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [currentSong, setCurrentSong] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.3);
  const [showVolume, setShowVolume] = useState<boolean>(false);

  const shouldAutoPlay = useRef<boolean>(false);


  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.src = songs[currentSong].file;
    audio.load();

    if (shouldAutoPlay.current) {
      shouldAutoPlay.current = false;

      audio.play().catch(() => setIsPlaying(false));
    }
  }, [currentSong]);

  
  const handlePlay = async (): Promise<void> => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  
  const handleNext = (): void => {
    shouldAutoPlay.current = true;
    setCurrentSong((prev) => (prev + 1) % songs.length);
  };

  
  const handlePrev = (): void => {
    shouldAutoPlay.current = true;

    setCurrentSong((prev) =>
      prev === 0 ? songs.length - 1 : prev - 1
    );
  };


  const handleTimeUpdate = (): void => {
    const audio = audioRef.current;

    if (audio) {
      setCurrentTime(audio.currentTime);
    }
  };

  const handleProgress = (
    e: React.MouseEvent<HTMLDivElement>
  ): void => {
    const audio = audioRef.current;

    if (!audio || !Number.isFinite(audio.duration)) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const percentage = clickPosition / rect.width;

    audio.currentTime = percentage * audio.duration;
  };


  const handleVolume = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newVolume = Number(e.target.value);

    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const progressPercent = duration
    ? (currentTime / duration) * 100
    : 0;

  return (
    <div className="Music-player">
      <h1>Now playing</h1>

      <div className="songs">
        <h4 id="songName">{songs[currentSong].name}</h4>
        <h4 id="ArtistName">{songs[currentSong].artist}</h4>
      </div>

      <audio
        ref={audioRef}
        onLoadedMetadata={() =>
          setDuration(audioRef.current?.duration ?? 0)
        }
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNext}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="progress-container">
        <span id="current-time">
          {formatTime(currentTime)}
        </span>

        <div className="progress" onClick={handleProgress}>
          <div
            id="progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <span id="duration">
          {formatTime(duration)}
        </span>
      </div>

      <div className="controlbuttons">
        <button onClick={handlePrev}>⏮</button>

        <button id="play" onClick={handlePlay}>
          {isPlaying ? "⏸" : "▶"}
        </button>

        <button onClick={handleNext}>⏭</button>
      </div>

      <div className="volume-control">
        <button
          id="volumebtn"
          onClick={() => setShowVolume(!showVolume)}
        >
          🔊
        </button>

        {showVolume && (
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolume}
            className="volume-input"
          />
        )}
      </div>
    </div>
  );
}

export default MusicPlayer;
