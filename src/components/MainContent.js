import React from 'react';
import BackgroundVideo from './BackgroundVideo/BackgroundVideo';
import Content from './Content/Content';
import './MainContent.css';

function MainContent({ activeMenu }) {
    return (
        <main className="main-content">
            <BackgroundVideo />
            <div className="content-wrapper">
                <div className="scrollable-content">
                    <Content activeMenu={activeMenu} />
                </div>
            </div>
        </main>
    );
}

export default MainContent;