import type { NextPage } from "next";

import styles from "@/styles/pages/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <header className={styles.header}>
        <a className={styles.header_logo} href="">
          Carly
        </a>
        <nav>
          <ul className={styles.header_list}>
            <li className={styles.header_child}>
              <a href="" className={styles.header_link}>
                Home
              </a>
            </li>
            <li className={styles.header_child}>
              <a href="" className={styles.header_link}>
                About
              </a>
            </li>
            <li className={styles.header_child}>
              <a href="" className={styles.header_link}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <h1 className={styles.test}>↑それっぽいヘッダー</h1>
    </>
  );
};

export default Home;
