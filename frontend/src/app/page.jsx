import Image from "next/image";
import styles from "./home.module.css";
import { GenreList } from "./components/genreList";
import { MoodList } from "./components/moodList";


export default function Home() {
  return (
    <main className={styles.wrapper}>
      <h2 className={styles.headline}>なりたい気分を選んでください</h2>
      <MoodList />
      <h2 className={styles.headline}>ジャンルを選んでください</h2>
      <GenreList />
      <button className={styles.doneButton}>決定</button>
    </main>
  );
}
