import styles from '../../styles/user/MonthList.module.css';
import Month from './Month.jsx';
import { monthList } from '../../utils/data';

const MonthList = () => {
	return (
		<div className={styles.container}>
			<div className={styles.main}>
				{monthList.map(month => (
					<Month monthData={month} key={month.id} />
				))}
			</div>
		</div>
	);
};

export default MonthList;
