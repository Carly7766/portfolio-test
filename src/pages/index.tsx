import Wave from "react-wavify";

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

      <main className={styles.main}>
        <h1 className={styles.heading}>Carly</h1>
        <p className={styles.sub_heading}>プログラミングやデザインなど</p>
      </main>

      <div>
        <Wave
          fill="#E0CF59"
          paused={false}
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.2,
            points: 3,
          }}
          className={styles.wave}
          id={styles.background_wave}
        />

        <Wave
          fill="#F5E663"
          paused={false}
          options={{
            height: 20,
            amplitude: 40,
            speed: 0.15,
            points: 3,
          }}
          className={styles.wave}
        />
      </div>
    </>
  );
};

export default Home;
