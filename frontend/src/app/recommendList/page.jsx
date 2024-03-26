"use client";

import { useState, useEffect } from "react";
import styles from './styles.module.css'

export default function recommendList() {
    const [tracks, setTracks] = useState([]);
    const [activeTrack, setActiveTrack] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const accessToken = "「ご自身のTokenを入力してください」";

    useEffect(() => {
        if (accessToken) {
            const fetchTracks = async () => {
                try {
                    const response = await fetch("https://api.spotify.com/v1/recommendations?limit=10&market=ES&seed_tracks=5Iy2Jj87Ha0C0IBlNE1I4y", {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    });
                    const data = await response.json();
                    setTracks(data.tracks);
                } catch (error) {
                    console.error("Error fetching tracks", error);
                }
            };

            fetchTracks();
        }
    }, [accessToken]);

    const openModal = (track) => {
        setActiveTrack(track);
        setShowModal(true);
    };

    return (
        <div>
            <h1>おすすめの曲</h1>
            <ul className={styles.recommendList}>
                {tracks.map((track) => (
                    <li key={track.id} onClick={() => openModal(track)}>
                        <img src={track.album.images[0].url} alt={track.name} />
                        <div>
                            <h2>{track.name}</h2>
                            <p>{track.artists.map((artist) => artist.name).join(", ")}</p>
                        </div>
                    </li>
                ))}
            </ul>
            {showModal && (
                <div className={styles.modal}>
                    <iframe src={`https://open.spotify.com/embed/track/${activeTrack?.id}`} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    <button className={styles.closeButton} onClick={() => setShowModal(false)}>CLOSE</button>
                </div>
            )}
        </div>
    );
}
