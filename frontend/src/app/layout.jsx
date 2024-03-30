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
            {/* <div></div> 左端の空の要素 */}
            <h1 className={styles.navTitle}>
              <a href="/" className={styles.navTitle}>
                <Image
                  src={"/logo_dev2.png"}
                  width={250}
                  height={100}
                  alt="Icon"
                  className="plusIcon"
                />
              </a>
            </h1>
            <div className={styles.toggleWrapper}>
              <button className={styles.toggle}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
              </button>
            </div>
          </div>
        </nav>

        <main className={styles.mainWrapper}>
          {children}
        </main>
        <footer className={styles.footer}>
          <p>
            Created by チーム寅
          </p>
        </footer>
      </body>
    </html>
  );
}
