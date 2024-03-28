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
      <GenreButton defaultClass={styles.moodListYellow} selectedClass={styles.selectedMoodListYellow} label="ポップス" />
      <GenreButton defaultClass={styles.moodListOrange} selectedClass={styles.selectedMoodListOrange} label="ロック" />
      <GenreButton defaultClass={styles.moodListBlue} selectedClass={styles.selectedMoodListPink} label="ジャズ" />
      <GenreButton defaultClass={styles.moodListPurple} selectedClass={styles.selectedMoodListPurple} label="インスト" />
    </div>
  );
}
