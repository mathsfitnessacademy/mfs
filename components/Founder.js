import styles from '../styles/Founder.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'



function Founder() {
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[]);
    return (
        <div className={styles.container}>
            <div className={styles.card1}>
                <div className={styles.bgimg}><Image src="/tridot.png" width={128} height={135} alt="" /></div>
            </div>
            <div className={styles.card2}>
                <h1 className={styles.title}>
                    Founder Message
                </h1>
                <div className={styles.bgimg1}></div>
                <div className={styles.quote}><Image src="/quotes.png" width={57} height={45} alt="" /></div>
                <div className={styles.quotes}>
                    <p className={styles.description}>I have been training students for various competitive exams from engineering entrance to CAT examinations
                        and have found that students are missing out opportunities for higher studies or employment as they lack mathematical skills.
                        This program ensures that the students calculations are much faster and overall mathematical skills are improved.</p>
                </div>
                <h1 className={styles.name}>yousef c t</h1>
                <h2 className={styles.role}>founder-director</h2>
                <div className={styles.tri} style={{transform:`translateY(${offsetY * .4}px)`}}></div>
            </div>
            <div className={styles.trired} style={{transform:`translateY(${offsetY * .3}px)`}}></div>
            <div className={styles.triblue} style={{transform:`translateY(${offsetY * .5}px)`}}></div>
            <div className={styles.plus} style={{transform:`translateY(${offsetY * .2}px)`}}></div>
        </div>
    )
}

export default Founder