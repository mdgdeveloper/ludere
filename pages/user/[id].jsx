import styles from '../../styles/User.module.css';
import Image from 'next/image';
import MonthList from '../../components/user/MonthList';
import Widget from '../../components/user/Widget';

const User = () => {
	return (
		<div className={styles.container}>
			<div className={styles.userPanelHeader}>
				<div className={styles.userProfile}>
					<div className={styles.userImage}>
						<Image
							src='/img/avatar.svg'
							alt='avatar'
							width={150}
							height={150}
							className={styles.image}
						/>
					</div>
					<div className={styles.userInfo}>
						<h2 className={styles.userName}>mdgdev</h2>
						<h3 className={styles.userAdditionalInfo}>Last login: Sat 23</h3>
						<h3 className={styles.userAdditionalInfo}>Last login: Sat 23</h3>
					</div>
				</div>
				<div className={styles.userSummary}>
					<Widget title='Total Games Played' games='150' />
					<Widget title='Last Month' games='3' />
					<Widget title='Last Year' games='35' />
				</div>
			</div>
			<div className={styles.userInfoMain}>
				<MonthList />
			</div>
		</div>
	);
};

export default User;
