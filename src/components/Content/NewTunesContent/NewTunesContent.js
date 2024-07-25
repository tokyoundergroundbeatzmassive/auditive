import React from 'react';
import './NewTunesContent.css';

function NewTunesContent() {
    return (
        <div className="new-tunes-content">
            <div className="description">
                <p className="bold-text">We are AUDITIVE, Tokyo based "bedroom" Drum&Bass Producer duo.</p>
                <p className="normal-text">We do mainly dark, minimal, experimental side of Drum&Bass, sometimes Neuro too. We love anything dope.</p>
            </div>
            <iframe
                title="AUDITIVE - New Tunes (Unreleased) on SoundCloud"
                width="100%"
                height="500"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1850456031&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            {/* <div className="soundcloud-info">
                <a href="https://soundcloud.com/auditive-tokyo" target="_blank" rel="noopener noreferrer">AUDITIVE</a> ·{' '}
                <a href="https://soundcloud.com/auditive-tokyo/sets/new-tunes-unreleased" target="_blank" rel="noopener noreferrer">New Tunes (Unreleased)</a>
            </div> */}
        </div>
    );
}

export default NewTunesContent;