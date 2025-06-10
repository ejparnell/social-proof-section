import Image from 'next/image';
import styles from './CommentCard.module.css';

interface CommentCardProps {
    name: string;
    avatar: string;
    typeBuyer: string;
    comment: string;
}

export default function CommentCard({
    name,
    avatar,
    typeBuyer,
    comment,
}: CommentCardProps) {
    const avatarSize = 40;

    return (
        <div className={styles.commentCard}>
            <div className={styles.userInfo}>
                <Image
                    src={avatar}
                    alt="User Avatar"
                    width={avatarSize}
                    height={avatarSize}
                    className={styles.avatar}
                    priority
                />

                <div>
                    <h3 className={styles.name}>{name}</h3>
                    <p className={styles.buyer}>{typeBuyer}</p>
                </div>
            </div>

            <p className={styles.comment}>&quot;{comment}&quot;</p>
        </div>
    );
}
