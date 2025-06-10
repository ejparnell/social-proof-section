import { getRatings } from '@/actions/ratings';
import RatingCard from './RatingCard';
import styles from './RatingCardList.module.css';

export default function RatingCardList() {
    const ratings = getRatings();

    return (
        <div className={styles.ratingCardList}>
            {ratings.map((rating) => (
                <RatingCard
                    key={rating.id}
                    stars={rating.stars}
                    review={rating.review}
                />
            ))}
        </div>
    );
}
