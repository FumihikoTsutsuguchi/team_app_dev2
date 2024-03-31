// import { Inter } from "next/font/google";
import "./globals.css";
import styles from './home.module.css';
import Image from 'next/image';
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mood Tune",
  description: "Generate a playlist based on your mood and genre preferences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* FOT-UD角ゴ_ラージ Pr6N Adobe font */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            <script>
            (function(d) {
              var config = {
                kitId: 'txg3tbf',
                scriptTimeout: 3000,
                async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document);
            script>
          `}}
        />
      </Head>
      <body>
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
            Created by アプレンティス音楽隊
          </p>
        </footer>
      </body>
    </html>
  );
}
