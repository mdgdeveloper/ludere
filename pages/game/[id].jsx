import styles from "../../styles/Game.module.css";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

import { useEffect } from 'react';

// GameUtils
import { getMultipleGames } from "../../utils/gameUtils";
import react from "react";

const Game = () => {
  const game = {
    name: "Fifa 22",
    platforms: ["PS4", "PC", "XBOX S"],
    image: "/img/fifa22.jpg",
    rating: 3.8,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore unde, reiciendis architecto recusandae sed minima, rem doloremque assumenda repellat amet sapiente. Asperiores maxime dolores sint illum perspiciatis? Deserunt, odit explicabo.",
  };

  useEffect( () => {
    const testGame = async () => {
      const result = await getMultipleGames([740,170]);
      return result;
    }

    const result = testGame();
    console.log('result', result);

  }, []);
  

  return (
    <div className={styles.container}>
      <div className={styles.gameInfo}>
        <div className={styles.gameImage}>
          <Image
            src={game.image}
            alt=""
            width={320}
            height={420}
            className={styles.image}
          />
        </div>
        <div className={styles.gameData}>
          <div className={styles.gamePlatforms}>
            {game.platforms.map((platform) => (
              <div className={styles.gamePlatform} key={platform}>
                {platform}
              </div>
            ))}
          </div>
          <div className={styles.gameTitle}>{game.name}</div>
          <div className={styles.gameRating}>
            <BsStarFill size={25} className={styles.star} />
            <div className={styles.gameRatingNum}>{game.rating}</div>
          </div>
          <div className={styles.gameDesc}>{game.desc}</div>
          <div className={styles.userRating}>
              <div className={styles.userStarList}>
                  <div className={styles.userStar}>
                      <BsStarFill size={30}/>
                  </div>
                  <div className={styles.userStar}>
                      <BsStarFill size={30}/>
                  </div>
                  <div className={styles.userStar}>
                      <BsStarFill size={30}/>
                  </div>
                  <div className={styles.userStar}>
                      <BsStarFill size={30}/>
                  </div>
                  <div className={styles.userStar}>
                      <BsStarFill size={30}/>
                  </div>
              </div>
          </div>
          <div className={styles.userButtons}>
              <button className={styles.addButton}>Add to List</button>
              <button className={styles.pendingButton}>Add to Pending</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
