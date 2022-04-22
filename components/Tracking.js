import styles from '../styles/Tracking.module.css'
import Image from 'next/image'

function Tracking() {
    return (
        <div className={styles.container}>
            <h2 className={styles.welcomeHeader}>How do we track</h2>
            <h1 className={styles.header}>Evaluating your progress</h1>
            <p className={styles.desc}>
                Our tool help us to understand how you are performing and it will help you to work on parts you are struggling. 
                Our tool offers an attractive dashboard to evaluate your attendence, accuracy and speed of your calculations.
            </p>
            <div className={styles.block}>
                <div className={styles.box}>
                    <p className={styles.boxDesc}>Track your daily performences and know your struggles during. </p>
                    <ul className={styles.listItems}>
                        <li>We provide opportunity to analyse your answers.</li>
                        <li>You can check number of attempts you made for each question.</li>
                        <li>Track how much time took for each questions.</li>
                        <li>Check each and every question by date.</li>
                    </ul>
                </div>
                <div className={styles.box}>
                    <p className={styles.boxDesc}>A dashboard for analyse performance during your course.</p>
                    <ul className={styles.listItems}>
                        <li>Check your overall performance during course.</li>
                        <li>Know your attendence and other details.</li>
                        <li>We can analyse time taken for each question.</li>
                        <li>Track total scores and time take for total course.</li>
                    </ul>
                </div>
                <div className={styles.box}>
                    <p className={styles.boxDesc}>A dashboard to compare your first and final assessment.</p>
                    <ul className={styles.listItems}>
                        <li>Know your first assessment test result.</li>
                        <li>A comparison will be provided between first and final test.</li>
                        <li>Window to assess your improvement after the course.</li>
                        <li>Both speed and accuracy can be compared.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.iconBox}>
                <div className={styles.plus}><Image src="/plus.svg" width={85} height={80} alt=""/></div>
            </div>
        </div>
    )
}

export default Tracking