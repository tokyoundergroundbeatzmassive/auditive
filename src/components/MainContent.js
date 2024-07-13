import React, { useEffect, useRef, useState } from 'react';
import './MainContent.css';

function MainContent() {
    const videoRef = useRef(null);
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    const renderContent = () => {
        switch (activeMenu) {
            case 'new-music':
                return <div className="content-area">New Music content</div>;
            case 'past-releases':
                return <div className="content-area">Past Releases content</div>;
            case 'contact':
                return <div className="content-area">Contact content</div>;
            default:
                return null;
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.muted = true;
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
                <source src={process.env.PUBLIC_URL + "/videos/bg_noise.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content-wrapper">
                <div className="menu-container">
                    <div className={`menu-item ${activeMenu === 'new-music' ? 'active' : ''}`} onClick={() => handleMenuClick('new-music')}>New Music</div>
                    <div className={`menu-item ${activeMenu === 'past-releases' ? 'active' : ''}`} onClick={() => handleMenuClick('past-releases')}>Past Releases</div>
                    <div className={`menu-item ${activeMenu === 'contact' ? 'active' : ''}`} onClick={() => handleMenuClick('contact')}>Contact</div>
                </div>
                {renderContent()}
            </div>
        </main>
    );
}

export default MainContent;