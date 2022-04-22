import styles from '../styles/About.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'



function AboutUs() {
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[]);
    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <div className={styles.bgimg1} style={{transform:`translateY(${offsetY * .5}px)`}}><Image src="/img2.svg" width={560} height={410} alt="" /></div>
                <div className={styles.dots1} style={{transform:`translateY(${offsetY * .5}px)`}}><Image src="/polydot2.png" width={135} height={125} alt="" /></div>
                <div className={styles.card1}>
                    <h1 className={styles.title}>
                        About Us
                    </h1>
                    <p className={styles.description}>Math is a subject that most students would rather avoid, or they would rather be weak at math or slow at math. Most students lack basic mathematical skills. In response to this problem, we have developed a training program that increases students&quot; interest in the subject, improves their calculation speed, efficiency, and enhances their overall mathematical skills.</p>
                </div>
                <div className={styles.card2}>
                    <div className={styles.bgimg} style={{transform:`translateY(${offsetY * .5}px)`}}><Image src="/img2.svg" width={560} height={410} alt="" /></div>
                    <div className={styles.dots} style={{transform:`translateY(${offsetY * .5}px)`}}><Image src="/polydot2.png" width={135} height={125} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs