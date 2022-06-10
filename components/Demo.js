import styles from '../styles/Demo.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Demo(){
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[]);
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Want a Free Demo?</h1>
            <Link  href='https://api.whatsapp.com/send?phone=919895237349&text=Book a free demo' passHref><button className={styles.button}>Book a free demo</button></Link>
            <div className={styles.iconBox}>
                <div className={styles.triblue}  style={{transform:`translateY(${offsetY * .1}px)`}}><Image src="/triblue.svg" width={39} height={39} alt=""/></div>
            </div>
        </div>
    )
}

export default Demo