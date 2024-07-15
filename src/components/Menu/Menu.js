import React, { useEffect, useState } from 'react';
import { animated, useSprings } from 'react-spring';
import './Menu.css';

function Menu({ activeMenu, onMenuClick }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const menuItems = [
        { name: 'new-tunes', label: 'New Tunes' },
        { name: 'past-releases', label: 'Past Releases' },
        { name: 'contact', label: 'Contact' }
    ];

    const getMenuItemSize = (menuItem) => {
        if (menuItem === activeMenu) return { fontSize: isMobile ? '18px' : '24px', color: 'rgb(255, 0, 225)' };
        if (
            (activeMenu === 'new-tunes' && menuItem === 'past-releases') ||
            (activeMenu === 'past-releases' && (menuItem === 'new-tunes' || menuItem === 'contact')) ||
            (activeMenu === 'contact' && menuItem === 'past-releases')
        ) return { fontSize: isMobile ? '16px' : '18px', color: 'rgb(0, 255, 0)' };
        return { fontSize: isMobile ? '14px' : '14px', color: '#0055ff' };
    };

    const springs = useSprings(
        menuItems.length,
        menuItems.map((item) => {
            const { fontSize, color } = getMenuItemSize(item.name);
            return {
                transform: isMobile ? 'scale(1)' : (activeMenu === item.name ? 'scale(1.1)' : 'scale(1)'),
                fontSize,
                color,
                config: { tension: 300, friction: 10 }
            };
        })
    );

    return (
        <nav className={`menu-container ${isMobile ? 'mobile' : ''}`}>
            <ul>
                {menuItems.map((item, index) => {
                    const isActive = activeMenu === item.name;

                    return (
                        <animated.li
                            key={item.name}
                            className={`menu-item ${isActive ? 'active' : ''}`}
                            onClick={() => onMenuClick(item.name)}
                            style={springs[index]}
                        >
                            {item.label}
                        </animated.li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Menu;