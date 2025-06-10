import styles from './Heading.module.css';

export default function Heading() {
    return (
        <div className={styles.heading}>
            <h1 className={styles.title}>
                10,000+ of our users love our products.
            </h1>
            <p className={styles.subtitle}>
                We only provide great products combined with excellent customer
                service. See what our satisfied customers are saying about our
                services.
            </p>
        </div>
    );
}
