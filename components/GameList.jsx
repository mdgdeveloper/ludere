import styles from "../styles/GameList.module.css";
import GameCard from "./GameCard.jsx";

const GameList = ({ games, size }) => {
  return (
    <div className={styles.container}>
      <div className={styles.topListGames}>
        {games.map((game) => (
          <GameCard game={game} key={game.id} size={size}/>
        ))}
      </div>
    </div>
  );
};

export default GameList;
