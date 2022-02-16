import styles from '../../styles/user/MonthList.module.css';
import Month from './Month.jsx';

const MonthList = () => {
	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<Month />
				<Month />
				<Month />
				<Month />
				<Month />
				<Month />
				<Month />
				<Month />
				<Month />
				<Month />
				<Month />
				<Month />
				<Month />
				<Month />
				<Month />
				<Month />
			</div>
		</div>
	);
};

export default MonthList;
