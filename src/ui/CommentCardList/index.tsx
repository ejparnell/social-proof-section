import { getComments } from '@/actions/comments';
import CommentCard from './CommentCard';
import styles from './CommentCardList.module.css';

export default function CommentCardList() {
    const comments = getComments();

    return (
        <div className={styles.commentCardList}>
            {comments.map((comment) => (
                <CommentCard
                    key={comment.id}
                    name={comment.name}
                    avatar={comment.avatar}
                    typeBuyer={comment.typeBuyer}
                    comment={comment.comment}
                />
            ))}
        </div>
    );
}
