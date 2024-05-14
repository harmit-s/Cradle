import { Html } from "@react-three/drei";
import { useState } from 'react';
import { useSound } from 'use-sound';
import './style.css'

function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);

    const tracks = [
        '/soundtrack/track1.mp3',
        '/soundtrack/track2.mp3',
        '/soundtrack/track3.mp3'
    ];

    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [play, { pause, stop }] = useSound(tracks[currentTrackIndex], { volume });

    const handlePlayPause = () => {
        if (isPlaying) {
            pause();
        } else {
            play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleNextTrack = () => {
        stop();
        const nextTrackIndex = (currentTrackIndex + 1) % tracks.length;
        setCurrentTrackIndex(nextTrackIndex);
        play({ id: tracks[nextTrackIndex] });
        setIsPlaying(true);
    };

    const handlePreviousTrack = () => {
        stop();
        const previousTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        setCurrentTrackIndex(previousTrackIndex);
        play({ id: tracks[previousTrackIndex] });
        setIsPlaying(true);
    };

    const handleVolumeChange = (event) => {
        setVolume(parseFloat(event.target.value));
    };

    return (
        <Html>
            <div className="music">
            <div className="music__container">
                <button onClick={handlePlayPause}>
                    {isPlaying ? <img className="music__img" src="/icons/pause.png" alt="pause" /> : <img src="/icons/play.png" alt="play" />}
                </button>
                <button onClick={handleNextTrack} disabled={!isPlaying}>
                    <img className="music__img" src="/icons/next.png" alt="next" />
                </button>
                <button onClick={handlePreviousTrack} disabled={!isPlaying}>
                    <img className="music__img" src="/icons/back.png" alt="back" />
                </button>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                />
            </div>
            </div>
        </Html>
    );
}

export default MusicPlayer;