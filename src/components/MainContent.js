import React, { useState } from 'react';
import BackgroundVideo from './BackgroundVideo/BackgroundVideo';
import Content from './Content/Content';
import './MainContent.css';
import Menu from './Menu/Menu';

function MainContent() {
    const [activeMenu, setActiveMenu] = useState('new-tunes');

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    return (
        <main className="main-content">
            <BackgroundVideo />
            <div className="content-wrapper">
                <Menu activeMenu={activeMenu} onMenuClick={handleMenuClick} />
                <Content activeMenu={activeMenu} />
            </div>
        </main>
    );
}

export default MainContent;