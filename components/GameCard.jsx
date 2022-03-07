import styles from '../styles/GameCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

const GameCard = ({ game, size }) => {
	const sizeStyle = size => {
		if (size === 5) {
			return styles.gameFive;
		}

		if (size === 8) {
			return styles.gameEight;
		}
	};

	return (
		<div className={styles.container}>
			<Link href={`/game/${game.id}`} passHref>
				<div className={sizeStyle(size)}>
					<div className={styles.topGameImg}>
						<Image
							src={game.img}
							alt='valorant'
							layout='fill'
							className={styles.topGameImg}
						/>
					</div>
					<div className={styles.topGameBg}></div>
				</div>
			</Link>
		</div>
	);
};

GameCard.propTypes = {
	game: PropTypes.object,
	size: Number,
};

export default GameCard;
