import Heading from '@/ui/Heading';
import RatingCardList from '@/ui/RatingCardList';
import CommentCardList from '@/ui/CommentCardList';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {/* Header */}
                <Heading />

                {/* Rating */}
                <RatingCardList />
            </div>

            {/* Review Cards */}
            <CommentCardList />
        </div>
    );
}
