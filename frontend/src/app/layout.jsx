import { Inter } from "next/font/google";
import "./globals.css";
import styles from './home.module.css';
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mood Tune",
  description: "Generate a playlist based on your mood and genre preferences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className={styles.navWrapper}>
          <div className={styles.navInner}>
            <h1 className={styles.navTitle}>
              <a href="/" className={styles.navTitle} >
                <Image
                  src={"/logo_dev2.png"}
                  width={200}
                  height={100}
                  alt="Icon"
                  className="plusIcon"
                />
              </a>
            </h1>
            <button className={styles.toggle}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </button>
          </div>
        </nav>
        <main className={styles.mainWrapper}>
          {children}
        </main>
      </body>
    </html>
  );
}
