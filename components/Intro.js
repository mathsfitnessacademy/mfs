import styles from '../styles/Intro.module.css'
import Image from 'next/image'
import Link from "next/link"
import { useEffect, useState } from 'react'



function Intro() {
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[]);

    return (
        <div className={styles.container}>
            <div className={styles.card1}>
                <div className={styles.extraimages} style={{transform:`translateY(${offsetY * .5}px)`}}>
                    <Image src="/img2.svg" width={560} height={418} alt="" />
                </div>
                <div className={styles.banner}>
                    <h1 className={styles.title}>Get math fit</h1>
                    <p className={styles.desc}>By learning the right techniques and practising daily, you will become math-fit.</p>
                    <Link href='/about' passHref><button className={styles.button}>Explore</button></Link>
                </div>
                
            </div>
            <div className={styles.card2}>
            </div>
        </div>
    )
}

export default Intro