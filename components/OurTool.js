import styles from '../styles/OurTool.module.css'
import Image from 'next/image'



function OurTool() {
    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <div className={styles.card1}>
                    <h1 className={styles.title}>
                        Practice on <span className={styles.redcolor}>Our Tool</span>
                    </h1>
                    <p className={styles.desc1}>Maths Fitness Academy provides an environment to practice mathematical calculations online. This tool also gives you a detailed analysis of your performance during your course time.</p>
                    <p className={styles.desc2}>Apart from our weekly sessions, this tool brings you multiple questions based on the weekly lesson. Answering these questions will make you faster and accurate in calculations.</p>
                </div>
                <div className={styles.card2}>
                </div>
            </div>
        </div>
    )
}

export default OurTool