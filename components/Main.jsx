import styles from "../styles/Main.module.css";
import Image from "next/image";
import Sidebar from "./Sidebar";
import Content from "./Content";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Content />
      </div>
    </div>
  );
};

export default Main;
