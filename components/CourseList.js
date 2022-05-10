import styles from '../styles/CourseList.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from "next/link"

function CourseList() {
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[]);
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.tridown}></div>
                <div className={styles.triup}></div>
                <h1 className={styles.title}>
                    Different <span className={styles.redcolor}>Courses</span>
                </h1>
                <p className={styles.description}>
                    Different courses offers different contents and methods to learn mathematics. Choosing a suitable plan based on your efficiency helps you become even more quick and accurate.
                </p>
            </div>
            <div className={styles.block}>
                    <div className={styles.box}>
                        <div className={styles.boxDet}>
                        <h1 className={styles.boxTitle}>Live</h1>
                        <div className={styles.boxIcon}></div>
                        <ul className={styles.boxDesc}>
                            <li>small groups of students (30 max)</li>
                            <li>Scheduled Live interactive online sessions.</li>
                            <li>Verbal questions during the class.</li>
                            <li>Student profile in the web application.</li>
                            <li>Benchmark test at the start.</li>
                            <li>66 days of practice.</li>
                            <li>Daily mentoring.</li>
                            <li>Daily attendance report to parents.</li>
                            <li>Daily doubt clearance support.</li>
                            <li>Midway revision.</li>
                            <li>Midway assessment and reports sent to parents.</li>
                            <li>Continuous tracking and monitoring of student performance.</li>
                            <li>Detailed progress report.</li>
                            <li>Full-term revision.</li>
                            <li>Final assessment and performance report.</li>
                            <li>E-certificate.</li>
                            <li>Medium of instructions: English.</li>
                            <li>Validity: 66 days</li>
                        </ul>
                        </div>
                        <Link href='https://api.whatsapp.com/send?phone=919895237349' passHref><button className={styles.button}>Book For Free Demo</button></Link>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.boxDet}>
                        <h1 className={styles.boxTitle}>Recorded</h1>
                        <div className={styles.boxIcon}></div>
                        <ul className={styles.boxDesc}>
                            <li>Recorded sessions.</li>
                            <li>Student profile in the web application.</li>
                            <li>Benchmark test at the beginning.</li>
                            <li>66 days of practice.</li>
                            <li>Daily mentoring.</li>                            
                            <li>Daily attendance report.</li>
                            <li>Daily doubt clearance support.</li>
                            <li>Continuous tracking and monitoring of student performance.</li>
                            <li>Detailed progress report.</li>
                            <li>Full-term revision.</li>                            
                            <li>Final assessment and performance report.</li>
                            <li>E-certificate.</li>
                            <li>Medium of instructions: English</li>
                            <li>Validity: 66 days</li>
                        </ul>
                        </div>
                        <Link href='https://api.whatsapp.com/send?phone=919895237349' passHref><button className={styles.button}>Book For Free Demo</button></Link>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.boxDet}>
                        <h1 className={styles.boxTitle}>One to One</h1>
                        <div className={styles.boxIcon}></div>
                        <ul className={styles.boxDesc}>
                            <li>Private sessions.</li>
                            <li>Scheduled Live interactive online sessions.</li>
                            <li>Verbal questioning during the sessions.</li>
                            <li>Student profile in the web application.</li>
                            <li>Benchmark test at the beginning.</li>                            
                            <li>66 days of practice.</li>
                            <li>Daily mentoring.</li>
                            <li>Daily attendance report to parents.</li>
                            <li>Daily doubt clearance support.</li>
                            <li>Midway revision.</li>                            
                            <li>Midway assessment and reports sent to parents.</li>
                            <li>Continuous tracking and monitoring of student performance.</li>
                            <li>Detailed progress report</li>
                            <li>Final assessment and performance report</li>
                            <li>Full-term revision</li>
                            <li>Medium of instructions: English</li>
                            <li>Validity: 66 days
                            </li>
                        </ul>
                        </div>
                        <Link href='https://api.whatsapp.com/send?phone=919895237349' passHref><button className={styles.button}>Book For Free Demo</button></Link>
                    </div>
                </div>

        </div>
    )
}

export default CourseList