"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from '../home.module.css';

export function GenreButton({ defaultClass, selectedClass, label }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <button
      className={`${isSelected ? selectedClass : defaultClass} ${styles.buttonStyle}`}
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

export function GenreList() {
  return (
    <div className={styles.moodListWrapper}>
      <GenreButton defaultClass={styles.moodListYellow} selectedClass={styles.selectedMoodListYellow} label="pop" />
      <GenreButton defaultClass={styles.moodListOrange} selectedClass={styles.selectedMoodListOrange} label="rock" />
      <GenreButton defaultClass={styles.moodListBlue} selectedClass={styles.selectedMoodListPink} label="jazz" />
      <GenreButton defaultClass={styles.moodListPurple} selectedClass={styles.selectedMoodListPurple} label="alternative" />
      <GenreButton defaultClass={styles.moodListPink} selectedClass={styles.selectedMoodListPink} label="anime" />
      <GenreButton defaultClass={styles.moodListGreen} selectedClass={styles.selectedMoodListGreen} label="chill" />
      <GenreButton defaultClass={styles.moodListOrange} selectedClass={styles.selectedMoodListOrange} label="club" />
      <GenreButton defaultClass={styles.moodListYellow} selectedClass={styles.selectedMoodListYellow} label="country" />
      <GenreButton defaultClass={styles.moodListYellow} selectedClass={styles.selectedMoodListYellow} label="dance" />
      <GenreButton defaultClass={styles.moodListOrange} selectedClass={styles.selectedMoodListOrange} label="punk" />
      <GenreButton defaultClass={styles.moodListGreen} selectedClass={styles.selectedMoodListGreen} label="hip-hop" />
      <GenreButton defaultClass={styles.moodListPurple} selectedClass={styles.selectedMoodListPurple} label="heavy-metal" />
      <GenreButton defaultClass={styles.moodListYellow} selectedClass={styles.selectedMoodListYellow} label="j-pop" />
      <GenreButton defaultClass={styles.moodListPurple} selectedClass={styles.selectedMoodListPurple} label="j-rock" />
      <GenreButton defaultClass={styles.moodListPink} selectedClass={styles.selectedMoodListPink} label="k-pop" />
      <GenreButton defaultClass={styles.moodListPurple} selectedClass={styles.selectedMoodListPurple} label="soul" />
    </div>
  );
}
