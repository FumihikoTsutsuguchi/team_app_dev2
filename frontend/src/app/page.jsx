"use client";

import Image from "next/image";
import styles from "./home.module.css";
import { GenreList } from "./components/genreList";
import { MoodList } from "./components/moodList";
import { useState } from "react";

export default function Home() {
  const [selectedMood, setSelectedMood] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleDecisionClick = () => {
    if (selectedMood && selectedGenre) {
      window.location.href = `http://localhost:3001/recommendList/?mood=${selectedMood}&genre=${selectedGenre}`;
    }
  };

  return (
    <div className={styles.area}>
      <div className={styles.home}>
        <h2 className={styles.headline}>なりたい気分を選んでください</h2>
        <MoodList onMoodSelect={setSelectedMood} />
        <h2 className={styles.headline}>ジャンルを選んでください</h2>
        <GenreList onGenreSelect={setSelectedGenre} />
        <button className={styles.doneButton} onClick={handleDecisionClick}>
          決定
        </button>
      </div>
      <ul className={styles.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
