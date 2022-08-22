import styles from '../styles/CourseIntro.module.css'
import Image from 'next/image'
import Link from "next/link"
import { useEffect, useState } from 'react'



function CourseIntro() {
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[]);
    return (
        <div className={styles.container}>
            <div className={styles.iconBox1}>
                <div className={styles.trired1} style={{transform:`translateY(${offsetY * .5}px)`}}><Image src="/trired.svg" width={39} height={37} alt=""/></div>
                <div className={styles.plus1} style={{transform:`translateY(${offsetY * .5}px)`}}><Image src="/plus.svg" width={85} height={89} alt=""/></div>
            </div>
            <h2 className={styles.welcomeHeader}>About Courses</h2>
            <h1 className={styles.header}>Become a human calculator</h1>
            <p className={styles.desc}>We provide a course which will make you fit in mathematics by teaching best techniques to calculate quick. This course will make you to use your mind to find the solutions.</p>
            <div className={styles.block}>
                <div className={styles.box}>
                    <div>
                    <h2 className={styles.boxHeader}>Basic</h2>
                    <h1 className={styles.days}>3 Months</h1>
                    <p className={styles.boxDesc}>A 3-month course covering 50 basic techniques, eligibility: class 5 or above.</p>
                    <ul className={styles.listItems}>
                        <li>Adding mentally - 2 tips</li>
                        <li>Subtraction by reverse addition-2 tips.</li>
                        <li>Numbers squared -8 tips </li>
                        <li>Number cube - 4 tips</li>
                        <li>Cube roots - 1 tip</li>
                        <li>Multiplication tips - 24 </li>
                        <li>How to divide - 5 tips </li>
                        <li>General - 4 tips </li>
                    </ul>
                    </div>
                    <Link href='https://api.whatsapp.com/send?phone=919895237349&text=Book a free demo' passHref><button className={styles.button}>Book For Free Demo</button></Link>
                </div>
                <div className={styles.box}>
                    <div>
                    <h1 className={styles.boxHeader}>Advanced</h1>
                    <h1 className={styles.days}>3 Months</h1>
                    <p className={styles.boxDesc}>A 3-month course covering 50 advanced techniques, eligibility: class 8 or above.</p>
                    <ul className={styles.listItems}>
                        <li>Numbers squared - 6 tips </li>
                        <li>Number cube - 1 tip</li>
                        <li>Multiplication - 24 tips</li>
                        <li>How to divide - 10 tips </li>
                        <li>General - 9 tips</li>
                    </ul>
                    </div>
                    <Link href='https://api.whatsapp.com/send?phone=919895237349&text=Book a free demo' passHref><button className={styles.button}>Book For Free Demo</button></Link>
                </div>
                <div className={styles.box}>
                    <div>
                    <h2 className={styles.boxHeader}>Competitive exams cracker</h2>
                    <h1 className={styles.days}>4 months</h1>
                    <p className={styles.boxDesc}>A 4-month course covering 100 techniques, eligibility: class 11 or above.</p>
                    <ul className={styles.listItems}>
                        <li>Adding mentally - 2 tips</li>
                        <li>Subtraction by reverse addition-2 tips.</li>
                        <li>Numbers squared -14 tips </li>
                        <li>Number cube - 5 tips</li>
                        <li>Cube roots - 1 tip</li>
                        <li>Multiplication tips - 48 </li>
                        <li>How to divide - 15 tips </li>
                        <li>General - 14 tips </li>
                    </ul>
                    </div>
                    <Link href='https://api.whatsapp.com/send?phone=919895237349&text=Book a free demo' passHref><button className={styles.button}>Book For Free Demo</button></Link>
                </div>
            </div>
            <div className={styles.iconBox2}>
                <div className={styles.plus2} style={{transform:`translateY(${offsetY * .5}px)`}}><Image src="/plus.svg" width={85} height={80} alt=""/></div>
                <div className={styles.triblue} style={{transform:`translateY(${offsetY * .5}px)`}}><Image src="/triblue.svg" width={39} height={39} alt=""/></div>
                <div className={styles.circle} style={{transform:`translateY(${offsetY * .5}px)`}}><Image src="/circle.svg" width={25} height={25} alt=""/></div>
                <div className={styles.trired2} style={{transform:`translateY(${offsetY * .5}px)`}}><Image src="/trired.svg" width={39} height={37} alt=""/></div>
            </div>
            <div className={styles.countBox}>
                <div className={styles.counter}>
                    <h1 className={styles.count}>1000+</h1>
                    <h2 className={styles.users}>Students</h2>
                </div>
                <div className={styles.counter}>
                    <h1 className={styles.count}>100+</h1>
                    <h2 className={styles.users}>Schools</h2>
                </div>
                <div className={styles.counter}>
                    <h1 className={styles.count}>70+</h1>
                    <h2 className={styles.users}>Batches</h2>
                </div>
            </div>
        </div>
    )
}

export default CourseIntro