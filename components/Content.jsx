import styles from "../styles/Content.module.css";
import Image from "next/image";

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.featured}>
        <div className={styles.title}>Featured this week</div>
        <div className={styles.gameFeatured}>
          <div className={styles.image}>
            <Image src="/img/diablo2_big.jpg" alt="featured" layout="fill" />
          </div>
          <div className={styles.gameInfo}>
            <div className={styles.gameSuperTitle}>PC | PS4</div>
            <h2 className={styles.gameTitle}>Diablo 2 Remastered</h2>
            <p className={styles.gameDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              reprehenderit dolor quisquam unde quos mollitia in.
            </p>
            <button className={styles.gameButton}>Know more</button>
          </div>
        </div>
      </div>
      <div className={styles.topList}>
        <div className={styles.title}>Top 5 games</div>
        <div className={styles.topListGames}>
          <div className={styles.topGame}>
            <div className={styles.topGameImg}>
              <Image
                src="/img/valorant.jpg"
                alt="valorant"
                layout="fill"
                className={styles.topGameImg}
              />
            </div>
            <div className={styles.topGameBg}></div>
          </div>
          <div className={styles.topGame}>
            <div className={styles.topGameImg}>
              <Image src="/img/fifa22.jpg" alt="fifa22" layout="fill" />
            </div>
            <div className={styles.topGameBg}></div>
          </div>
          <div className={styles.topGame}>
            <div className={styles.topGameImg}>
              <Image src="/img/itTakesTwo.jpg" alt="fifa22" layout="fill" />
            </div>
            <div className={styles.topGameBg}></div>
          </div>
          <div className={styles.topGame}>
            <div className={styles.topGameImg}>
              <Image src="/img/gtaV.jpg" alt="fifa22" layout="fill" />
            </div>
            <div className={styles.topGameBg}></div>
          </div>
          <div className={styles.topGame}>
            <div className={styles.topGameImg}>
              <Image src="/img/rust.jpg" alt="fifa22" layout="fill" />
            </div>
            <div className={styles.topGameBg}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
