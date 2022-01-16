import styles from "../styles/GameCard.module.css";
import Image from "next/image";

const GameCard = ({ game, size }) => {

    const sizeStyle = (size) => {
        if(size === 5){
            return styles.gameFive
        }

        if(size === 8){
            return styles.gameEight
        }
    }
 

  return (
    <div className={styles.container}>
      <div className={sizeStyle(size)}>
        <div className={styles.topGameImg}>
          <Image
            src={game.img}
            alt="valorant"
            layout="fill"
            className={styles.topGameImg}
          />
        </div>
        <div className={styles.topGameBg}></div>
      </div>
    </div>
  );
};

export default GameCard;
