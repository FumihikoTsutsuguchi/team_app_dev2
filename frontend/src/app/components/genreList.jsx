"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../home.module.css";

export function GenreButton({
  defaultClass,
  selectedClass,
  label,
  value,
  onClick,
}) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    onClick(value);
  };

  return (
    <button
      className={`${isSelected ? selectedClass : defaultClass} ${
        styles.buttonStyle
      }`}
      onClick={handleClick}
    >
      <span>{label}</span>
      <Image
        src={isSelected ? "/done.svg" : "/plus1.svg"}
        width={20}
        height={20}
        alt="Icon"
        className="plusIcon"
      />
    </button>
  );
}

export function GenreList({ onGenreSelect }) {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleGenreSelect = (genre) => {
    //setSelectedGenre(genre);
    //onGenreSelect(genre);
    setSelectedGenres((prevSelectedGenres) => {
      if (prevSelectedGenres.includes(genre)) {
        return prevSelectedGenres.filter((g) => g !== genre);
      } else {
        return [...prevSelectedGenres, genre];
      }
    });
    //onGenreSelect(genre);
  };

  useEffect(() => {
    onGenreSelect(selectedGenres);
  }, [selectedGenres]);

  return (
    <div className={styles.moodListWrapper}>
      <GenreButton
        onClick={handleGenreSelect}
        isSelected={selectedGenres.includes("pop")}
        defaultClass={styles.moodListYellow}
        selectedClass={styles.selectedMoodListYellow}
        label="pop"
        value="pop"
      />
      <GenreButton
        onClick={handleGenreSelect}
        isSelected={selectedGenres.includes("rock")}
        defaultClass={styles.moodListOrange}
        selectedClass={styles.selectedMoodListOrange}
        label="rock"
        value="rock"
      />
      <GenreButton
        onClick={handleGenreSelect}
        isSelected={selectedGenres.includes("jazz")}
        defaultClass={styles.moodListBlue}
        selectedClass={styles.selectedMoodListPink}
        label="jazz"
        value="jazz"
      />
      <GenreButton
        onClick={handleGenreSelect}
        isSelected={selectedGenres.includes("alternative")}
        defaultClass={styles.moodListPurple}
        selectedClass={styles.selectedMoodListPurple}
        label="alternative"
        value="alternative"
      />
      <GenreButton
        onClick={handleGenreSelect}
        isSelected={selectedGenres.includes("anime")}
        defaultClass={styles.moodListPink}
        selectedClass={styles.selectedMoodListPink}
        label="anime"
        value="anime"
      />
      <GenreButton
        onClick={handleGenreSelect}
        isSelected={selectedGenres.includes("chill")}
        defaultClass={styles.moodListGreen}
        selectedClass={styles.selectedMoodListGreen}
        label="chill"
        value="chill"
      />
      <GenreButton
        onClick={handleGenreSelect}
        isSelected={selectedGenres.includes("club")}
        defaultClass={styles.moodListOrange}
        selectedClass={styles.selectedMoodListOrange}
        label="club"
        value="club"
      />
      <GenreButton
        onClick={handleGenreSelect}
        isSelected={selectedGenres.includes("country")}
        defaultClass={styles.moodListYellow}
        selectedClass={styles.selectedMoodListYellow}
        label="country"
        value="country"
      />
      <GenreButton
        onClick={handleGenreSelect}
        isSelected={selectedGenres.includes("dance")}
        defaultClass={styles.moodListYellow}
        selectedClass={styles.selectedMoodListYellow}
        label="dance"
        value="dance"
      />
      <GenreButton
        onClick={handleGenreSelect}
        isSelected={selectedGenres.includes("punk")}
        defaultClass={styles.moodListOrange}
        selectedClass={styles.selectedMoodListOrange}
        label="punk"
        value="punk"
      />
      <GenreButton
        onClick={handleGenreSelect}
        isSelected={selectedGenres.includes("hip-hop")}
        defaultClass={styles.moodListGreen}
        selectedClass={styles.selectedMoodListGreen}
        label="hip-hop"
        value="hip-hop"
      />
      <GenreButton
        onClick={handleGenreSelect}
        isSelected={selectedGenres.includes("heavy-metal")}
        defaultClass={styles.moodListPurple}
        selectedClass={styles.selectedMoodListPurple}
        label="heavy-metal"
        value="heavy-metal"
      />
      <GenreButton
        onClick={handleGenreSelect}
        isSelected={selectedGenres.includes("j-pop")}
        defaultClass={styles.moodListYellow}
        selectedClass={styles.selectedMoodListYellow}
        label="j-pop"
        value="j-pop"
      />
      <GenreButton
        onClick={handleGenreSelect}
        isSelected={selectedGenres.includes("j-rock")}
        defaultClass={styles.moodListPurple}
        selectedClass={styles.selectedMoodListPurple}
        label="j-rock"
        value="j-rock"
      />
      <GenreButton
        onClick={handleGenreSelect}
        isSelected={selectedGenres.includes("k-pop")}
        defaultClass={styles.moodListPink}
        selectedClass={styles.selectedMoodListPink}
        label="k-pop"
        value="k-pop"
      />
      <GenreButton
        onClick={handleGenreSelect}
        isSelected={selectedGenres.includes("全ジャンル")}
        defaultClass={styles.moodListPurple}
        selectedClass={styles.selectedMoodListPurple}
        label="全ジャンル"
        value="全ジャンル"
      />
    </div>
  );
}
