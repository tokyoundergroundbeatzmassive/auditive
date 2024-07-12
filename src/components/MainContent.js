import React, { useEffect, useRef } from 'react';
import './MainContent.css';

function MainContent() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.muted = true; // 明示的にミュートを設定
            video.play().catch(error => {
                console.error("Video playback failed:", error);
            });

            video.addEventListener('loadedmetadata', () => {
                console.log('Video metadata loaded');
            });

            video.addEventListener('playing', () => {
                console.log('Video is playing');
            });

            console.log('Video element:', video);
            console.log('Video source:', video.currentSrc);
            console.log('Video ready state:', video.readyState);
        }
    }, []);

    return (
        <main className="video-background">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
                <source src={process.env.PUBLIC_URL + "/videos/vecteezy_vhs-screen-on-crt-television-old-school-picture-glitches_23576949.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </main>
    );
}

export default MainContent;