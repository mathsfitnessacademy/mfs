import styles from '../styles/Practice.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Practice(){
    return(
        <div id='prac' className={styles.container}>
            <h1 className={styles.title}>Daily <span className={styles.redcolor}>Practice</span></h1>
            <div className={styles.block}>
                <div className={styles.box}>
                    <div className={styles.boxImage}>
                        <Image src="/study.png" width={165} height={170} alt="" />
                    </div>
                    <div className={styles.boxDesc}>
                        Attend daily practice on our tool to do your excercises. The questions appear on tool are completely based on weekly lessons provided by trainer.
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.boxImage}>
                        <Image src="/eva.png" width={165} height={170} alt="" />
                    </div>
                    <div className={styles.boxDesc}>
                        You can analyze your daily performance on our tool. The details of each questions you attended will be available for you immediately after completion.
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.boxImage}>
                        <Image src="/dashboard.png" width={250} height={170} alt="" />
                    </div>
                    <div className={styles.boxDesc}>
                        A dashboard will be available for you to assess your improvement during the course. The dashboard will give you a summary of your course performance.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Practice