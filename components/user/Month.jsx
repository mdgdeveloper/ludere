import styles from '../../styles/user/Month.module.css';

const Month = () => {
	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<div className={styles.monthName}>January</div>
				<div className={styles.monthCount}>14</div>
			</div>
		</div>
	);
};

export default Month;
