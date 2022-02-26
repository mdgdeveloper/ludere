import styles from '../../styles/user/Month.module.css';

const Month = ({ monthData }) => {
	// dummyData

	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<div className={styles.monthCount}>{monthData.totalGames}</div>
				<div className={styles.monthInfo}>
					<div className={styles.monthName}>{monthData.month}</div>
					<div className={styles.monthGames}>
						<div className={`${styles.monthGameData} ${styles.green}`}>
							{monthData.games.completed}
						</div>
						<div className={`${styles.monthGameData} ${styles.blue}`}>
							{monthData.games.active}
						</div>
						<div className={`${styles.monthGameData} ${styles.red}`}>
							{monthData.games.drop}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Month.propTypes = {
	monthData: {
		id: Number,
		totalGames: Number,
		month: String,
		games: {
			completed: Number,
			active: Number,
			drop: Number,
		},
	},
};

export default Month;
