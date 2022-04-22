import styles from '../styles/Goal.module.css'
import Image from 'next/image'



function Goal() {
    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <div className={styles.card1}>
                    <h1 className={styles.title}>
                        What is the <span className={styles.redcolor}>Goal</span>
                    </h1>
                    <p className={styles.desc1}>Students&apos; mental calculation speed often has a direct effect on math and science test scores. It is not enough to know how to solve math problems when tests have a time limit.</p>
                    <p className={styles.desc2}>Students must be able to answer questions correctly and efficiently. A student&apos;s academic career will only be benefited by improving mental maths skills. </p>
                </div>
                <div className={styles.card2}>
                </div>
            </div>
        </div>
    )
}

export default Goal