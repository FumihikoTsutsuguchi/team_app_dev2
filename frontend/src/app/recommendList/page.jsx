"use client";

import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Color, { Palette } from "color-thief-react";
import { useSearchParams } from "next/navigation";

export default function RecommendList() {
  const [tracks, setTracks] = useState([]);
  const [activeTrack, setActiveTrack] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalBackground, setModalBackground] = useState(null);
  const [gradientAngle, setGradientAngle] = useState(45);
  const accessToken = "「ご自身のアクセストークンを入力してください」";

  const searchParams = useSearchParams();

  const mood = searchParams.get("mood");
  const genre = searchParams.get("genre");

  let url = `https://api.spotify.com/v1/recommendations?limit=12&seed_genres=${genre}`;

  if (genre == "instrumentalness") {
    url = `https://api.spotify.com/v1/recommendations?limit=12&seed_tracks=5Iy2Jj87Ha0C0IBlNE1I4y&min_instrumentalness=0.7`;
  }

  switch (mood) {
    case "元気":
      url += `&min_tempo=150&max_tempo=200&min_energy=0.7&max_energy=1.0`;
      break;
    case "しみじみ":
      url += `&min_tempo=60&max_tempo=90&min_energy=0&max_energy=0.4`;
      break;
    case "おだやか":
      url += `&min_tempo=60&max_tempo=90&min_energy=0&max_energy=0.4&max_loudness=-10`;
      break;
    case "うれしい":
      url += `&min_valence=0.7`;
      break;
    case "ノスタルジック":
      url += `&mode=0`;
      break;
    case "前向き":
      url += `&min_valence=0.7&mode=1`;
      break;
    case "泣ける":
      url += `&max_valence=0.4&mode=0`;
      break;
    case "ワクワク":
      url += `&min_valence=0.7&mode=1`;
      break;
    case "落ち着く":
      url += `&min_tempo=60&max_tempo=90&max_energy=0.4&max_loudness=-10`;
      break;
    case "ダンス":
      url += `&danceability=1.0`;
      break;
  }

  useEffect(() => {
    if (accessToken) {
      const fetchTracks = async () => {
        try {
          const response = await fetch(url, {
            method: "GET",
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
  }, [accessToken, searchParams]);

  // 角度を更新するための useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setGradientAngle((prevAngle) => (prevAngle + 2) % 360);
    }, 100);

    return () => clearInterval(intervalId); // コンポーネントがアンマウントされた時にクリア
  }, []);

  const openModal = (track) => {
    setActiveTrack(track);
    setShowModal(true);
    setModalBackground(null); // モーダルを開くたびに背景色をリセット
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
        <>
          <div
            className={styles.modal}
            style={{
              background: modalBackground,
            }}
          >
            <iframe
              src={`https://open.spotify.com/embed/track/${activeTrack?.id}`}
              width="300"
              height="380"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
            <button
              className={styles.closeButton}
              onClick={() => setShowModal(false)}
            >
              CLOSE
            </button>
          </div>
          <Palette
            src={activeTrack?.album.images[0].url}
            crossOrigin="anonymous"
            format="hex"
            colorCount={3}
          >
            {({ data, loading }) => {
              if (!loading && data) {
                // グラデーション文字列を生成
                const gradient = `linear-gradient(${gradientAngle}deg, ${data.join(
                  ","
                )})`;
                // 背景色をセット
                setModalBackground(gradient);
              }
              return null;
            }}
          </Palette>
        </>
      )}
    </div>
  );
}
