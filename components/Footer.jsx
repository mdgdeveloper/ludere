import Image from "next/image";
import styles from "../styles/Footer.module.css";
import { BsTwitter, BsTwitch, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.left}>
          <div className={styles.copyImg}>
              <Image src="/img/mdgDevLogo.png" alt="logo" width={90} height={90} />
          </div>
        <div className={styles.copy}>© 2022 MDGDev Solutions</div>
      </div>
      <div className={styles.center}>
        <div className={styles.socialItem}>
          <BsTwitter size={30} />
        </div>
        <div className={styles.socialItem}>
          <BsTwitch size={30} />
        </div>
        <div className={styles.socialItem}>
          <BsInstagram size={30} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.menuHeader}></div>
        
      </div>
    </footer>
  );
};

export default Footer;
