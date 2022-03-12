import styles from '../../styles/user/MonthDetail.module.css';
import Image from 'next/image';
import PropTypes from 'prop-types';

const MonthDetail = ({ month }) => {
	const example = {
		title: 'January',
		completed: {
			gameIDs: [0, 1, 2, 3],
		},
		playing: {
			gameIDs: [2, 3, 4],
		},
		dropped: {
			gameIDs: [3, 4],
		},
	};

	const games = [
		'/img/fifa22.jpg',
		'/img/itTakesTwo.jpg',
		'/img/rust.jpg',
		'/img/valorant.jpg',
		'/img/gtaV.jpg',
	];

	const test = '/img/gtaV.jpg';

	return (
		<div className={styles.container}>
			<div className={styles.title}>{example.title}</div>
			{example.completed.gameIDs && example.completed.gameIDs.length && (
				<div className={styles.listBlock}>
					<h2 className={styles.listTitle}>completed</h2>
					<div className={styles.listGames}>
						{example.completed.gameIDs.map((game, key) => (
							<div className={styles.gameDetail} key={key}>
								<Image
									src={games[game]}
									alt='game'
									layout='fill'
									className={styles.gameImg}
								/>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

MonthDetail.propTypes = {
	month: PropTypes.string,
};

export default MonthDetail;
