import styles from '../../styles/user/Widget.module.css';
import PropTypes from 'prop-types';
import Image from 'next/image';

const Widget = ({ title = '', games = 5 }) => {
	// Temporary information for design purposes
	const gamesImg = [
		'/img/fifa22.jpg',
		'/img/itTakesTwo.jpg',
		'/img/rust.jpg',
		'/img/valorant.jpg',
		'/img/gtaV.jpg',
	];

	return (
		<div className={styles.widget}>
			<div className={styles.container}>
				<div className={styles.left}>
					<div className={styles.title}>{title}</div>
					<div className={styles.amount}>{games}</div>
				</div>
				<div className={styles.right}></div>
			</div>
			<div className={styles.gameList}>
				<div className={styles.gameItem}>
					<Image
						src={gamesImg[1]}
						alt='game'
						width={50}
						height={70}
						className={styles.gameImg}
					/>
				</div>
				<div className={styles.gameItem}>
					<Image
						src={gamesImg[2]}
						alt='game'
						width={50}
						height={70}
						className={styles.gameImg}
					/>
				</div>
				<div className={styles.gameItem}>
					<Image
						src={gamesImg[4]}
						alt='game'
						width={50}
						height={70}
						className={styles.gameImg}
					/>
				</div>
				<div className={styles.gameItem}>
					<Image
						src={gamesImg[0]}
						alt='game'
						width={50}
						height={70}
						className={styles.gameImg}
					/>
				</div>
			</div>
		</div>
	);
};

Widget.propTypes = {
	title: PropTypes.string,
	games: PropTypes.number,
};

export default Widget;
