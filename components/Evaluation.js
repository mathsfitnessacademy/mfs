import styles from '../styles/Evaluation.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Evaluation(){
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[]);
    return(
        <div id='eva' className={styles.container}>
            <div className={styles.tridot} style={{transform:`translateY(${offsetY * .2}px)`}}><Image src="/triup.png" width={110} height={110} alt=""/></div>
            <h1 className={styles.title}>Student <span className={styles.redcolor}>Evaluation</span></h1>
            <div className={styles.block}>
                <div className={styles.box}>
                    <div className={styles.boxImage}>
                        <Image src="/study.png" width={165} height={170} alt="" />
                    </div>
                    <div className={styles.boxDesc}>
                        There will be a assessment test at the beginning of the course. Student have to attend this test to evaluate ability before the course.
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.boxImage}>
                        <Image src="/eva.png" width={165} height={170} alt="" />
                    </div>
                    <div className={styles.boxDesc}>
                        Another assessment test will be conducted at the end of the course and exam take place after the entire duration of the course.
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.boxImage}>
                        <Image src="/dashboard.png" width={250} height={170} alt="" />
                    </div>
                    <div className={styles.boxDesc}>
                        A comparison dashboard between both assessment will be available for students to analyze the improvement of the student.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Evaluation