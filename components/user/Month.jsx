import styles from '../../styles/user/Month.module.css';
import { useState } from 'react';
import Modal from '../tools/Modal';
import MonthDetail from './MonthDetail';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Month = ({ monthData }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(prevState => !prevState);
	};
	return (
		<>
			<Modal status={isOpen} setIsOpen={setIsOpen}>
				<MonthDetail />
			</Modal>
			<div className={styles.container} onClick={handleClick}>
				<div className={styles.month}>
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
					<div className={styles.right}>
						<MoreVertIcon />
					</div>
				</div>
			</div>
		</>
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
