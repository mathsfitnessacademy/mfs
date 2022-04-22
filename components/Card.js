import Image from 'next/image'
import styles from '../styles/Testimonial.module.css'

function Card(props) {
    const nor = "M17.804 12.905c-.359.032-.717.065-1.073.1C8.223 13.864.815 19.059.079 28.121-.71 37.839 4.49 49.768 13.686 53.979c11.834 5.419 30.617 3.162 38.931-7.637 3.9-5.059 5.31-11.655 5.764-17.9.467-6.406.614-14.4-1.778-20.437-1.61-4.061-5.17-7.658-9.526-7.985-3.769-.282-7.287 1.86-10.2 4.272s-5.6 5.228-9.058 6.746c-3.123 1.376-6.6 1.567-10.015 1.867Z";
    return (
        <div className={styles.card}>
            <p className={styles.comment}>{props.quote}</p>
                <div className={styles.author}>
                    <div className={styles.avatar}>
                        <Image src="/face.png" width={56} height={56} alt=""/>
                    </div>
                    <div className={styles.details}>
                        <h1 className={styles.name}>{props.fullName}</h1>
                        <h2 className={styles.role}>{props.role}</h2>
                    </div>
                </div> 
        </div>
    )
}

export default Card