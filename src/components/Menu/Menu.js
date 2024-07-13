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
        <nav className="menu-container">
            {/* div を nav に変更し、aria-label を追加 */}
            <ul>
                {/* メニュー項目を ul > li 構造に変更 */}
                <li
                    className={`menu-item ${activeMenu === 'new-tunes' ? 'active' : ''} ${getMenuItemSizeClass('new-tunes')}`}
                    onClick={() => onMenuClick('new-tunes')}
                >
                    New Tunes
                </li>
                <li
                    className={`menu-item ${activeMenu === 'past-releases' ? 'active' : ''} ${getMenuItemSizeClass('past-releases')}`}
                    onClick={() => onMenuClick('past-releases')}
                >
                    Past Releases
                </li>
                <li
                    className={`menu-item ${activeMenu === 'contact' ? 'active' : ''} ${getMenuItemSizeClass('contact')}`}
                    onClick={() => onMenuClick('contact')}
                >
                    Contact
                </li>
            </ul>
        </nav>
    );
}

export default Menu;