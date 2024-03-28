"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from '../home.module.css';

export function MoodButton({ defaultClass, selectedClass, label }) {
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

export function MoodList() {
  return (
    <div className={styles.moodListWrapper}>
      <MoodButton defaultClass={styles.moodListYellow} selectedClass={styles.selectedMoodListYellow} label="元気" />
      <MoodButton defaultClass={styles.moodListBlue} selectedClass={styles.selectedMoodListBlue} label="おだやか" />
      <MoodButton defaultClass={styles.moodListPink} selectedClass={styles.selectedMoodListPink} label="うれしい" />
      <MoodButton defaultClass={styles.moodListGreen} selectedClass={styles.selectedMoodListGreen} label="しみじみ" />
      <MoodButton defaultClass={styles.moodListPurple} selectedClass={styles.selectedMoodListPurple} label="ノスタルジック" />
      <MoodButton defaultClass={styles.moodListOrange} selectedClass={styles.selectedMoodListOrange} label="前向き" />
      <MoodButton defaultClass={styles.moodListPink} selectedClass={styles.selectedMoodListPink} label="泣ける" />
      <MoodButton defaultClass={styles.moodListOrange} selectedClass={styles.selectedMoodListOrange} label="ワクワク" />
      <MoodButton defaultClass={styles.moodListBlue} selectedClass={styles.selectedMoodListBlue} label="落ち着く" />
      <MoodButton defaultClass={styles.moodListOrange} selectedClass={styles.selectedMoodListOrange} label="ダンス" />
    </div>
  );
}
