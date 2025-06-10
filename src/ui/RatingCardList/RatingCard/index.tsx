import Image from 'next/image';
import styles from './RatingCard.module.css';

interface RatingCardProps {
    stars: number;
    review: string;
}

export default function RatingCard({ stars, review }: RatingCardProps) {
    const starSize = 16;

    return (
        <div className={styles.ratingCard}>
            <div className={styles.stars}>
                {Array.from({ length: stars }, (_, index) => (
                    <Image
                        key={index}
                        src="/icon-star.svg"
                        alt="Star"
                        width={starSize}
                        height={starSize}
                    />
                ))}
            </div>
            <p className={styles.review}>{review}</p>
        </div>
    );
}
