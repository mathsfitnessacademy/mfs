import styles from '../styles/Partners.module.css'
import Image from 'next/image'

function Partners() {
    return (
        <div className={styles.container}>
            <h2 className={styles.welcomeHeader}>Our Partners.</h2>
            <div className={styles.block}>
                <div className={styles.box}><div className={styles.boxImage}><Image src="/edge_logo.jpeg" width={300} height={60} alt="" /></div></div>
                <div className={styles.box}><div className={styles.boxImage}><Image src="/genleap_logo.png" width={300} height={60} alt="" /></div></div>
                <div className={styles.box}><div className={styles.boxImage}><Image src="/study_logo.jpg" width={300} height={60} alt="" /></div></div>
            </div>            
        </div>
    )
}
export default Partners