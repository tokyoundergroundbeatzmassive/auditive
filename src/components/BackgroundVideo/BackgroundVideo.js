import React, { useEffect, useRef } from 'react';
import './BackgroundVideo.css';

function BackgroundVideo() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.muted = true;
            video.play().catch(error => {
                console.error("ビデオの再生に失敗しました:", error);
            });
        }
    }, []);

    return (
        <div className="video-background">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={process.env.PUBLIC_URL + "/videos/bg_noise.mp4"} type="video/mp4" />
                お使いのブラウザはビデオタグをサポートしていません。
            </video>
        </div>
    );
}

export default BackgroundVideo;