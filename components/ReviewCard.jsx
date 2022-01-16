import styles from "../styles/ReviewCard.module.css";
import Image from "next/image";
import { BsStarHalf, BsStarFill, BsStar } from "react-icons/bs";

const ReviewCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image
          src="/img/fifa22.jpg"
          alt="game"
          className={styles.reviewImg}
          width={110}
          height={150}
        />
      </div>
      <div className={styles.right}>
        <div className={styles.platforms}>PS4 | PC | XBOX</div>
        <div className={styles.title}>Fifa 22</div>
        <div className={styles.stars}>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
          <BsStar />
        </div>
        <div className={styles.review}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quidem
          deleniti in sapiente fugit tenetur.
        </div>
        <button className={styles.button}>Read more...</button>
      </div>
    </div>
  );
};

export default ReviewCard;
