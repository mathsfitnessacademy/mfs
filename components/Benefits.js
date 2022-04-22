import SvgComponent from '../components/SvgComponent'
import styles from '../styles/Benefits.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Benefits() {
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[]);
    const nor = "M17.804 12.905c-.359.032-.717.065-1.073.1C8.223 13.864.815 19.059.079 28.121-.71 37.839 4.49 49.768 13.686 53.979c11.834 5.419 30.617 3.162 38.931-7.637 3.9-5.059 5.31-11.655 5.764-17.9.467-6.406.614-14.4-1.778-20.437-1.61-4.061-5.17-7.658-9.526-7.985-3.769-.282-7.287 1.86-10.2 4.272s-5.6 5.228-9.058 6.746c-3.123 1.376-6.6 1.567-10.015 1.867Z";
    return (
        <div className={styles.container}>
            <div className={styles.boxContainer}>
                <div className={styles.headBox}>
                    <h1 className={styles.header}>Benefits of the course</h1>
                    <p className={styles.desc}>
                        This program is designed to help individuals to develop their mathematical ability.
                        We will train you to do accurate and quick calculation in mind.
                        The techniques and ideas we teach will help you in speedy calculations.
                    </p>
                    <div className={styles.block}>
                        <div className={styles.box}>
                            <SvgComponent color="#fedf6d" line="#000" trans={nor} />
                            <h1 className={styles.boxHeader}>Improve academic performance</h1>
                        </div>
                        <div className={styles.box}>
                            <SvgComponent color="#febb8d" line="#000" trans={nor} />
                            <h1 className={styles.boxHeader}>Sharpen your mind</h1>
                        </div>
                        <div className={styles.box}>
                            <SvgComponent color="#d0f7ef" line="#000" trans={nor} />
                            <h1 className={styles.boxHeader}>Save time during examination</h1>
                        </div>
                        <div className={styles.box}>
                            <SvgComponent color="#c8dcc1" line="#000" trans={nor} />
                            <h1 className={styles.boxHeader}>Eradicating math problems</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.imageBox}>

                </div>
            </div>
            <div className={styles.boxContainer}>
                <Link href='/about' passHref><button className={styles.button}>Read More</button></Link>
            </div>
            <div className={styles.iconbox}>
                <div className={styles.triangular}  style={{transform:`translateY(${offsetY * .3}px)`}}><Image src="/triblue.svg" width={37} height={39} alt="" /></div>
                <div className={styles.plus}  style={{transform:`translateY(${offsetY * .2}px)`}}><Image src="/plus.svg" width={80} height={80} alt="" /></div>
            </div>
        </div>
    )
}

export default Benefits