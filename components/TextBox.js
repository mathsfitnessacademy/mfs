import styles from '../styles/Start.module.css'
import Image from 'next/image'

const TextBox = (props) => (

        <div className={styles.step}>
            <div className={styles.headText}>
                <h1 className={styles.head1}>{props.first}</h1>
                <h1 className={styles.head2}>{props.second}</h1>
            </div>
        </div>
    )

export default TextBox
