import styles from '../../styles/user/MonthList.module.css';
import Month from './Month.jsx';

const MonthList = () => {
	const january = {
		id: 1,
		totalGames: 8,
		month: 'January',
		games: {
			completed: 5,
			active: 3,
			drop: 2,
		},
	};

	const february = {
		id: 2,
		totalGames: 12,
		month: 'February',
		games: {
			completed: 6,
			active: 0,
			drop: 2,
		},
	};

	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<Month monthData={january} />
				<Month monthData={february} />
				<Month monthData={january} />
				<Month monthData={february} />
				<Month monthData={february} />
				<Month monthData={february} />
				<Month monthData={february} />
				<Month monthData={february} />
				<Month monthData={february} />
				<Month monthData={february} />
				<Month monthData={february} />
				<Month monthData={february} />
				<Month monthData={february} />
				<Month monthData={february} />
				<Month monthData={february} />
				<Month monthData={february} />
			</div>
		</div>
	);
};

export default MonthList;
