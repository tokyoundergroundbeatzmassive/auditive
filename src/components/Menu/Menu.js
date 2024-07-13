import React from 'react';
import './Menu.css';

function Menu({ activeMenu, onMenuClick }) {
    const getMenuItemSizeClass = (menuItem) => {
        if (menuItem === activeMenu) return 'size-large';
        if (
            (activeMenu === 'new-tunes' && menuItem === 'past-releases') ||
            (activeMenu === 'past-releases' && (menuItem === 'new-tunes' || menuItem === 'contact')) ||
            (activeMenu === 'contact' && menuItem === 'past-releases')
        ) return 'size-medium';
        return 'size-small';
    };

    return (
        <div className="menu-container">
            <div
                className={`menu-item ${activeMenu === 'new-tunes' ? 'active' : ''} ${getMenuItemSizeClass('new-tunes')}`}
                onClick={() => onMenuClick('new-tunes')}
            >
                New Tunes
            </div>
            <div
                className={`menu-item ${activeMenu === 'past-releases' ? 'active' : ''} ${getMenuItemSizeClass('past-releases')}`}
                onClick={() => onMenuClick('past-releases')}
            >
                Past Releases
            </div>
            <div
                className={`menu-item ${activeMenu === 'contact' ? 'active' : ''} ${getMenuItemSizeClass('contact')}`}
                onClick={() => onMenuClick('contact')}
            >
                Contact
            </div>
        </div>
    );
}

export default Menu;