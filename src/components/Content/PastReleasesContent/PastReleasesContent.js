import React from 'react';
import './PastReleasesContent.css';

function PastReleasesContent() {
    return (
        <div className="past-releases-content">
            <div className="description">
                <p className="bold-text">Releases from:</p>
                <ul>
                    <li>Deafmuted Records</li>
                    <li>Onset Audio</li>
                    <li>Elm Imprint</li>
                    <li>Nyctophilia Recordings</li>
                </ul>
            </div>
            <iframe
                title="AUDITIVE - Switch Dat Break EP on SoundCloud"
                width="100%"
                height="500"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/334007637&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            {/* <div className="soundcloud-info">
                <a href="https://soundcloud.com/auditive-tokyo" target="_blank" rel="noopener noreferrer">AUDITIVE</a> ·{' '}
                <a href="https://soundcloud.com/auditive-tokyo/sets/switch-dat-break-ep" target="_blank" rel="noopener noreferrer">Switch Dat Break EP (OUT NOW on Deafmuted Records)</a>
            </div> */}
            <iframe
                title="AUDITIVE - Holloway Road EP on SoundCloud"
                width="100%"
                height="500"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/639400650&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            {/* <div className="soundcloud-info">
                <a href="https://soundcloud.com/auditive-tokyo" target="_blank" rel="noopener noreferrer">AUDITIVE</a> ·{' '}
                <a href="https://soundcloud.com/auditive-tokyo/sets/auditive-boyz-holloway-road-ep" target="_blank" rel="noopener noreferrer">Auditive Boyz (Keig' & SHK) - Holloway Road EP (Onset Audio)</a>
            </div> */}
            <iframe
                title="AUDITIVE - From Elm Imprint (2018) on SoundCloud"
                width="100%"
                height="500"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1850076357&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            {/* <div className="soundcloud-info">
                <a href="https://soundcloud.com/auditive-tokyo" target="_blank" rel="noopener noreferrer">AUDITIVE</a> ·{' '}
                <a href="https://soundcloud.com/auditive-tokyo/sets/from-elm-imprint-2019" target="_blank" rel="noopener noreferrer">From Elm Imprint (2018)</a>
            </div> */}
            <iframe
                title="NYCT001 :: Keig' - 808or :: PREMIERE! on SoundCloud"
                width="100%"
                height="500"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/947367961&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            {/* <div className="soundcloud-info">
                <a href="https://soundcloud.com/nyctophiliarecordings" target="_blank" rel="noopener noreferrer">Nyctophilia Recordings</a> ·{' '}
                <a href="https://soundcloud.com/nyctophiliarecordings/keig-808or" target="_blank" rel="noopener noreferrer">NYCT001 :: Keig' - 808or :: PREMIERE!</a>
            </div> */}
        </div>
    );
}

export default PastReleasesContent;