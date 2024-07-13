import React from 'react';
import './Content.css';

function Content({ activeMenu }) {
    const renderContent = () => {
        switch (activeMenu) {
            case 'new-tunes':
                return <div>New Tunes content</div>;
            case 'past-releases':
                return <div>Past Releases content</div>;
            case 'contact':
                return <div>Contact content</div>;
            default:
                return null;
        }
    };

    return (
        <div className="content-area">
            {renderContent()}
        </div>
    );
}

export default Content;