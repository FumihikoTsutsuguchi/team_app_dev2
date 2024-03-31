"use client";

import Image from "next/image";
import styles from "./home.module.css";
import { GenreList } from "./components/genreList";
import { MoodList } from "./components/moodList";
import { useState } from "react";

export default function Home() {
  const [selectedMood, setSelectedMood] = useState("");
  //const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleDecisionClick = () => {
    if (selectedMood && selectedGenres.length > 0) {
      const genresQueryParam = selectedGenres.join(",");
      window.location.href = `http://localhost:3001/recommendList/?mood=${selectedMood}&genre=${genresQueryParam}`;
    }
  };

  return (
    <div className={styles.area}>
      <div className={styles.home}>
        <h2 className={styles.headline}>
          なりたい気分を選んでください<small>(※１つ)</small>
        </h2>
        <MoodList onMoodSelect={setSelectedMood} />
        <h2 className={styles.headline}>
          ジャンルを選んでください<small>(※複数可)</small>
        </h2>
        <GenreList onGenreSelect={(genres) => setSelectedGenres(genres)} />
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
