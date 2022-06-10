import SvgComponent from '../components/SvgComponent'
import styles from '../styles/Training.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'

function Training() {
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[]);
    const nor = "M17.804 12.905c-.359.032-.717.065-1.073.1C8.223 13.864.815 19.059.079 28.121-.71 37.839 4.49 49.768 13.686 53.979c11.834 5.419 30.617 3.162 38.931-7.637 3.9-5.059 5.31-11.655 5.764-17.9.467-6.406.614-14.4-1.778-20.437-1.61-4.061-5.17-7.658-9.526-7.985-3.769-.282-7.287 1.86-10.2 4.272s-5.6 5.228-9.058 6.746c-3.123 1.376-6.6 1.567-10.015 1.867Z";
    return (
        <div className={styles.container}>
            <h2 className={styles.welcomeHeader}>Training</h2>
            <h1 className={styles.header}>A training program that is scientifically designed.</h1>
            <p className={styles.desc}>
            We offer a live interactive weekly online class where you learn the right techniques and ideas to make calculations faster. we provide an online platform for practising those techniques and mastering them. these tools offer you a better understanding of your progress.
            </p>
            <div className={styles.bgcircle} style={{transform:`translateY(${offsetY * .2}px)`}}><Image src="/bgcircle.svg" width={600} height={500} alt=""/></div>
            <div className={styles.block}>
                <div className={styles.box}>
                    <h2 className={styles.boxHeader}>quality control checklist for the online classes.</h2>
                    <SvgComponent color="#fedf6d" line="#000" trans={nor} />
                    <p className={styles.boxDesc}>Mentors are available for you regardless of time to support you in your mathematics. </p>
                    <ul className={styles.listItems}>
                        <li>Maximum 30 students in a batch.</li>
                        <li>A mentor is assigned along with the faculty for handling class.</li>
                        <li>Students Video should be on and mentor always observing students.</li>
                        <li>Clearing doubts from previous sessions.</li>
                        <li>Class starts with a recap of the last session and last week&apos;s practice review.</li>
                        <li>After explaining new tips, Practice questions are given to students.</li>
                        <li>If anyone fails to give the answer, the tip is explained again.</li>
                        <li>Faculty and mentor leaves only after clearing the doubts of all students.</li>
                        <li>Mentor checks the class notes for any corrections.</li>
                        <li>Weekly class report shared with parents.</li>
                    </ul>
                </div>
                <div className={styles.box}>
                    <h1 className={styles.boxHeader}>quality control checklist for the daily practice.</h1>
                    <SvgComponent color="#c8dcc1" line="#000" trans={nor} />
                    <p className={styles.boxDesc}>We assure you the best that our trainers are qualified and offer you quality support.</p>
                    <ul className={styles.listItems}>
                        <li>Students can log in and do their daily practice.</li>
                        <li>The performance report pops up as they finish up their daily practice.</li>
                        <li>Students self-evaluate their performance and identify areas of improvement.</li>
                        <li>The first three to complete daily practice from the batches are given a virtual medal/trophy.</li>
                        <li>Reminder 1; those who fail to complete after 9 hrs. an email reminder is sent.</li>
                        <li>Reminder 2; those who fail to complete after 12 hrs. Are reminded through Whatsapp,</li>
                        <li>Reminder 3; those who fail to do after 2 hrs. is called upon by the mentor.</li>
                    </ul>
                </div>
                {/*<div className={styles.box}>
                    <h2 className={styles.boxHeader}>Mentoring</h2>
                    <SvgComponent color="#d0f7ef" line="#000" trans={nor} />
                    <p className={styles.boxDesc}>Mentors are available for you regardless of time to support you in your mathematics. </p>
                    <ul className={styles.listItems}>
                        <li>Each users and mentor can analyse the progess through tool.</li>
                        <li>The tool provides a dashboard to know students status.</li>
                        <li>A final report by comparing first and final assessment test.</li>
                        <li>A course completion certificate will be provided to users.</li>
                    </ul>
                </div>!*/}
            </div>
            <div className={styles.iconBox}>
                <div className={styles.circle} style={{transform:`translateY(${offsetY * .2}px)`}}><Image src="/circle.svg" width={25} height={25} alt=""/></div>
            </div>
        </div>
    )
}

export default Training