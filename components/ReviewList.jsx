import style from '../styles/ReviewList.module.css';
import ReviewCard from './ReviewCard';

const ReviewList = () => {
    return (
        <div className={style.container}>
            <ReviewCard />
            <ReviewCard />
        </div>
    )
}

export default ReviewList

