"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../home.module.css";

export function MoodButton({ defaultClass, selectedClass, label, onClick }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    onClick(label);
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

export function MoodList({ onMoodSelect }) {
  const [selectedMood, setSelectedMood] = useState("");

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    onMoodSelect(mood);
  };

  return (
    <div className={styles.moodListWrapper}>
      <MoodButton
        onClick={handleMoodSelect}
        isSelected={selectedMood === "元気"}
        defaultClass={styles.moodListYellow}
        selectedClass={styles.selectedMoodListYellow}
        label="元気"
      />
      <MoodButton
        onClick={handleMoodSelect}
        isSelected={selectedMood === "おだやか"}
        defaultClass={styles.moodListBlue}
        selectedClass={styles.selectedMoodListBlue}
        label="おだやか"
      />
      <MoodButton
        onClick={handleMoodSelect}
        isSelected={selectedMood === "うれしい"}
        defaultClass={styles.moodListPink}
        selectedClass={styles.selectedMoodListPink}
        label="うれしい"
      />
      <MoodButton
        onClick={handleMoodSelect}
        isSelected={selectedMood === "しみじみ"}
        defaultClass={styles.moodListGreen}
        selectedClass={styles.selectedMoodListGreen}
        label="しみじみ"
      />
      <MoodButton
        onClick={handleMoodSelect}
        isSelected={selectedMood === "ノスタルジック"}
        defaultClass={styles.moodListPurple}
        selectedClass={styles.selectedMoodListPurple}
        label="ノスタルジック"
      />
      <MoodButton
        onClick={handleMoodSelect}
        isSelected={selectedMood === "前向き"}
        defaultClass={styles.moodListOrange}
        selectedClass={styles.selectedMoodListOrange}
        label="前向き"
      />
      <MoodButton
        onClick={handleMoodSelect}
        isSelected={selectedMood === "泣ける"}
        defaultClass={styles.moodListPink}
        selectedClass={styles.selectedMoodListPink}
        label="泣ける"
      />
      <MoodButton
        onClick={handleMoodSelect}
        isSelected={selectedMood === "ワクワク"}
        defaultClass={styles.moodListOrange}
        selectedClass={styles.selectedMoodListOrange}
        label="ワクワク"
      />
      <MoodButton
        onClick={handleMoodSelect}
        isSelected={selectedMood === "落ち着く"}
        defaultClass={styles.moodListBlue}
        selectedClass={styles.selectedMoodListBlue}
        label="落ち着く"
      />
      <MoodButton
        onClick={handleMoodSelect}
        isSelected={selectedMood === "ダンス"}
        defaultClass={styles.moodListOrange}
        selectedClass={styles.selectedMoodListOrange}
        label="ダンス"
      />
    </div>
  );
}
