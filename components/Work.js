import styles from '../styles/Work.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'



function Work() {
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[]);
    return (
        <div className={styles.container}>
            <div className={styles.polydot} style={{transform:`translateY(${offsetY * .4}px)`}}><Image src="/polydot1.png" width={135} height={128} alt="" /></div>
            <div className={styles.trired} style={{transform:`translateY(${offsetY * .2}px)`}}><Image src="/trired.svg" width={40} height={40} alt="" /></div>
            <div className={styles.plus} style={{transform:`translateY(${offsetY * .5}px)`}}><Image src="/plus.svg" width={85} height={80} alt="" /></div>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    How Do We <span className={styles.redcolor}>Work</span>
                </h1>
                <p className={styles.description}>
                Math fitness requires a math trainer. The trainer should be compatible with users at a variety of skill levels and should guide them. An accurate assessment of a user&apos;s strengths and weaknesses should be available, as well as useful feedback on where to concentrate one&apos;s efforts. 
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.weeklybg}></div>
                <div className={styles.weekly}>
                    <h1 className={styles.intitle}>Weekly Classes</h1>
                    <p className={styles.indesc}>During the live interactive weekly class, the trainer demonstrates the techniques and then students are given questions to practice, the mentor monitors student attentiveness and takes live feedback throughout the session, in addition to posting answers in the chatbox, the trainer and students speak about the questions verbally, so students can frame real-time questions based on what they have learned, creating an activity-based learning environment that helps students become engaged and retain what they have learned. If a student has questions, he or she may stay back to ask. Trainers and mentors leave only after answering all the questions.</p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.daily}>
                    <h1 className={styles.intitle}>Daily Practice</h1>
                    <p className={styles.indesc}>We forget about 50% of what we learn in the first 8 hours and the remaining 50% in a week. By the next class, what the students have learned in the live interactive weekly class will almost be forgotten unless they are engaged in daily exercise. Students simply need to log into the web application to complete the daily assignment. The questions are based on what they have learned each week. A running timer makes them aware of how long it takes them to solve the calculations, which triggers their subconscious minds to enhance their abilities.</p>
                    <button className={styles.button}>Read More</button>                  
                </div>
                <div className={styles.dailybg}></div>
            </div>
        </div>
    )
}

export default Work