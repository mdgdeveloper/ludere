import styles from "../styles/NavBar.module.css";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/img/ld_logo.png" width={90} height={71} alt="" />
      </div>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
        />
        <div className={styles.searchIcon}>
          <BsSearch size={15} />
        </div>
      </div>
      <div className={styles.user}>
        <div className={styles.userInfo}>
          <div className={styles.userName}>mdgdev</div>
          <div className={styles.userNameSub}>standard user</div>
        </div>
        <div className={styles.userImage}>
            <Image src="/img/avatar.svg" alt="avatar" width={50} height={50} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
