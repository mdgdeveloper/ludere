import styles from '../../styles/tools/Modal.module.css';
import PropTypes from 'prop-types';
import CancelIcon from '@mui/icons-material/Cancel';

const Modal = ({ status = false, setIsOpen, children }) => {
	const handleClickInside = event => {
		event.stopPropagation();
	};

	return (
		<>
			{status ? (
				<div className={styles.modalContainer} onClick={() => setIsOpen(false)}>
					<div className={styles.modalBlock} onClick={handleClickInside}>
						<div className={styles.modalInside}>{children}</div>
						<div className={styles.modalClose} onClick={() => setIsOpen(false)}>
							<CancelIcon />
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
};

Modal.propTypes = {
	status: PropTypes.bool,
	setIsOpen: PropTypes.func,
	children: PropTypes.node.isRequired,
};

export default Modal;
