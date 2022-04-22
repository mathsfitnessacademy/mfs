import styles from '../styles/Extra.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Extra(){
    return(
        <div className={styles.container}>
            
            <div className={styles.banner}>
                <div className={styles.boxBack}></div>
                <h1 className={styles.bannerHead}>You can continue practice by purchasing extended practice.</h1>
            </div>
        </div>
    )
}

export default Extra