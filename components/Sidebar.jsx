import styles from "../styles/Sidebar.module.css";
import { FiHome, FiSearch, FiList, FiUser } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.menuItem}>
          <div className={styles.menuIcon}><FiHome size={20}/></div>
          <div className={styles.menuText}>Home</div>
        </div>
        <div className={styles.menuItem}>
          {" "}
          <div className={styles.menuIcon}><FiSearch size={20}/></div>
          <div className={styles.menuText}>Search</div>
        </div>
        <div className={styles.menuItem}>
          {" "}
          <div className={styles.menuIcon}><FiList size={20} /></div>
          <div className={styles.menuText}>Trending</div>
        </div>
        <div className={styles.menuItem}>
          {" "}
          <div className={styles.menuIcon}><FiUser size={20} /></div>
          <div className={styles.menuText}>Profile</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
