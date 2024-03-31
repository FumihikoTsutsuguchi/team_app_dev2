"use client";

import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Color, { Palette } from "color-thief-react";
import { useSearchParams } from "next/navigation";

import Link from "next/link";


export default function RecommendList() {
  const [tracks, setTracks] = useState([]);
  const [activeTrack, setActiveTrack] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalBackground, setModalBackground] = useState(null);
  const [gradientAngle, setGradientAngle] = useState(45);
  const [isLoading, setIsLoading] = useState(true);

  const accessToken = "アクセストークンを入力してください";


  const searchParams = useSearchParams();

  const mood = searchParams.get("mood");
  const genre = searchParams.get("genre");

  let url = `https://api.spotify.com/v1/recommendations?limit=12&seed_genres=${genre}`;


  if (genre.includes("全ジャンル")) {
    url = `https://api.spotify.com/v1/recommendations?limit=12&seed_genres=country,anime,pop,jazz,rock`;

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

      url += `&min_valence=0.7&mode=1`;

      break;
    case "ノスタルジック":
      url += `&mode=0`;
      break;
    case "前向き":

      url += `&min_valence=0.7&mode=1&min_energy=0.6`;

      break;
    case "泣ける":
      url += `&max_valence=0.4&mode=0`;
      break;
    case "ワクワク":
      url += `&min_valence=0.7&mode=1`;
      break;
    case "落ち着く":

      url += `&max_tempo=90&max_energy=0.4&max_loudness=-10`;

      break;
    case "ダンス":
      url += `&danceability=1.0`;
      break;
  }

  useEffect(() => {
    if (accessToken) {
      const fetchTracks = async () => {


        setIsLoading(true); // データの取得前にローディング状態をtrueに設定

        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          const data = await response.json();
          setTracks(data.tracks);

          setIsLoading(false); // データの取得後にローディング状態をfalseに設定
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

  if (isLoading) {

    return (
      <div className="wrapper4">
        <div id="preloader_4">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );


  }

  return (
    <div className={styles.recommend}>
      <h2 className={styles.heading}>レコメンド一覧</h2>
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

      <div>
        <Link href="/">戻る</Link>
        <button onClick={() => window.location.reload()}>更新</button>

      </div>
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
