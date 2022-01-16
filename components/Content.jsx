import styles from "../styles/Content.module.css";
import Image from "next/image";
import GameList from "./GameList";

const Content = () => {
    const games = [
        {
            img: "/img/fifa22.jpg",
            id: "1231231231"
        },
        {
            img: "/img/itTakesTwo.jpg",
            id: "1231231231"
        },
        {
            img: "/img/rust.jpg",
            id: "1231231231"
        },
        {
            img: "/img/valorant.jpg",
            id: "1231231231"
        },
        {
            img: "/img/gtaV.jpg",
            id: "1231231231"
        },

    ];

    const lastGames = [
        {
            img: "/img/fifa22.jpg",
            id: "1231231231"
        },
        {
            img: "/img/itTakesTwo.jpg",
            id: "1231231231"
        },
        {
            img: "/img/rust.jpg",
            id: "1231231231"
        },
        {
            img: "/img/valorant.jpg",
            id: "1231231231"
        },
        {
            img: "/img/gtaV.jpg",
            id: "1231231231"
        },
        {
            img: "/img/fifa22.jpg",
            id: "1231231231"
        },
        {
            img: "/img/valorant.jpg",
            id: "1231231231"
        },


    ];

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
        <GameList games={games} size={5}/>
      </div>
      <div className={styles.topList}>
          <div className={styles.title}>Last added games</div>
          <GameList games={lastGames} size={8} />
      </div>
    </div>
  );
};

export default Content;
