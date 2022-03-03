import styles from '../../styles/tools/Modal.module.css';

const Modal = ({ status = false, setIsOpen }) => {
	const handleClickInside = event => {
		event.stopPropagation();
	};

	return (
		<>
			{status ? (
				<div className={styles.modalContainer} onClick={() => setIsOpen(false)}>
					<div className={styles.modalBlock} onClick={handleClickInside}>
						Test
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
};

Modal.propTypes = {
	status: Boolean,
	setIsOpen: () => Boolean,
};

export default Modal;
