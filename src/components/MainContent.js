import React, { useEffect, useRef, useState } from 'react';
import './MainContent.css';

function MainContent() {
    // ビデオ要素への参照を作成
    const videoRef = useRef(null);
    // アクティブなメニュー項目の状態を管理
    const [activeMenu, setActiveMenu] = useState('new-music');

    // メニュー項目がクリックされたときの処理
    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    // アクティブなメニューに応じてコンテンツを表示する関数
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

    // メニュー項目のサイズクラスを決定する関数
    const getMenuItemSizeClass = (menuItem) => {
        if (menuItem === activeMenu) return 'size-large';
        if (
            (activeMenu === 'new-music' && menuItem === 'past-releases') ||
            (activeMenu === 'past-releases' && (menuItem === 'new-music' || menuItem === 'contact')) ||
            (activeMenu === 'contact' && menuItem === 'past-releases')
        ) return 'size-medium';
        return 'size-small';
    };

    // コンポーネントがマウントされたときに実行されるエフェクト
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            // ビデオをミュートに設定
            video.muted = true;
            // ビデオの再生を試みる
            video.play().catch(error => {
                console.error("Video playback failed:", error);
            });

            // ビデオのメタデータが読み込まれたときのイベントリスナー
            video.addEventListener('loadedmetadata', () => {
                console.log('Video metadata loaded');
            });

            // ビデオの再生が開始されたときのイベントリスナー
            video.addEventListener('playing', () => {
                console.log('Video is playing');
            });

            // デバッグ情報のログ出力
            console.log('Video element:', video);
            console.log('Video source:', video.currentSrc);
            console.log('Video ready state:', video.readyState);
        }
    }, []); // 空の依存配列は、この効果がコンポーネントのマウント時にのみ実行されることを意味する

    // コンポーネントのレンダリング
    return (
        <main className="video-background">
            {/* 背景ビデオ */}
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
            {/* コンテンツラッパー */}
            <div className="content-wrapper">
                <div className="menu-container">
                    <div
                        className={`menu-item ${activeMenu === 'new-music' ? 'active' : ''} ${getMenuItemSizeClass('new-music')}`}
                        onClick={() => handleMenuClick('new-music')}
                    >
                        New Music
                    </div>
                    <div
                        className={`menu-item ${activeMenu === 'past-releases' ? 'active' : ''} ${getMenuItemSizeClass('past-releases')}`}
                        onClick={() => handleMenuClick('past-releases')}
                    >
                        Past Releases
                    </div>
                    <div
                        className={`menu-item ${activeMenu === 'contact' ? 'active' : ''} ${getMenuItemSizeClass('contact')}`}
                        onClick={() => handleMenuClick('contact')}
                    >
                        Contact
                    </div>
                </div>
                {renderContent()}
            </div>
        </main>
    );
}

export default MainContent;