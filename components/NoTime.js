import styles from '../styles/NoTime.module.css'
import Image from 'next/image'

function NoTime(){
    return (
        <div className={styles.container}>
            <div className={styles.timecard}>
                <div className={styles.part1}></div>
                <div className={styles.part2}>
                    <h1 className={styles.header}>No Time No Problem</h1>
                    <p className={styles.desc}>If you are struggling to find time to get fit in mathematics, Don’t worry!. Math Fitness Academy uses short exercises to get results even when life gets in the way flexible training plans tailored to you. We provide training with a personal plan that guides you while adjusting to your progress, schedule and other activities.</p>
                    <ui className={styles.mylist}>
                        <li className={styles.text}>5 Minute per day</li>
                        <li className={styles.text}>Learn to do big calculations in 3 to 5 seconds.</li>
                        <li className={styles.text}>Say no to pen and paper let your mind do the all work.</li>
                        <li className={styles.text}>Get maths fit, Win your competitive exam, your dream job.</li>
                    </ui>
                </div>
            </div>
            <div className={styles.extra}>
                    <h1 className={styles.header2}>All your Activities Count</h1>
                    <p className={styles.desc2}>All maths activities you do, whether solving a exercise in your maths class or doing shopping apply these tips and techniques to your daily activities and eventually this becomes a part of your life</p>
            </div>
        </div>
    )
}

export default NoTime