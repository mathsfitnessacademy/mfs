import styles from '../styles/FeaturesTool.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'


function FeaturesTool(){
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[]);
    return(
        <div className={styles.container}>
            <div className={styles.polydot} style={{transform:`translateY(${offsetY * .5}px)`}}><Image src="/polydot2.png" width={120} height={120} alt=""/></div>
            <div className={styles.tridot} style={{transform:`translateY(${offsetY * .3}px)`}}><Image src="/tridot.png" width={110} height={110} alt=""/></div>
            <div className={styles.tri} style={{transform:`translateY(${offsetY * .5}px)`}}><Image src="/trired.svg" width={39} height={37} alt=""/></div>
            <div className={styles.plus} style={{transform:`translateY(${offsetY * .5}px)`}}><Image src="/plus.svg" width={85} height={89} alt=""/></div>
            <h1 className={styles.title}>How it <span className={styles.redcolor}>works!</span></h1>
            <div className={styles.blockContainers}>
                <div className={styles.block}>
                    <div className={styles.box}>
                        <div className={styles.boxImage}><Image src="/register.png" width={70} height={60} alt="" /></div>
                        <div className={styles.boxHeader}>Login / Register</div>
                        <div className={styles.boxDesc}>Reach login page by clicking Login / Register button showed in website.</div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.boxImage}><Image src="/account.png" width={70} height={60} alt="" /></div>
                        <div className={styles.boxHeader}>Create account</div>
                        <div className={styles.boxDesc}>You can create an account by clicking on new user if you are a new user.</div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.boxImage}><Image src="/id_card.png" width={70} height={60} alt="" /></div>
                        <div className={styles.boxHeader}>Login to the account</div>
                        <div className={styles.boxDesc}>Existing students can login to the account using username and password. </div>
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.box}>
                        <div className={styles.boxImage}><Image src="/pencil2.png" width={70} height={60} alt="" /></div>
                        <div className={styles.boxHeader}>First Assessment</div>
                        <div className={styles.boxDesc}>After account creation is complete, you have to attend an assessment test.</div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.boxImage}><Image src="/practice.png" width={70} height={60} alt="" /></div>
                        <div className={styles.boxHeader}>Practices</div>
                        <div className={styles.boxDesc}>You can start daily practice after you mentor instructions. </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.boxImage}><Image src="/analyze.png" width={70} height={60} alt="" /></div>
                        <div className={styles.boxHeader}>Analysis</div>
                        <div className={styles.boxDesc}>You can analyze your performance of daily practice on our website.</div>
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.box}>
                        <div className={styles.boxImage}><Image src="/assessment.png" width={70} height={60} alt="" /></div>
                        <div className={styles.boxHeader}>Final Assessment</div>
                        <div className={styles.boxDesc}>A finall assessment will take place after your course completion.</div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.boxImage}><Image src="/improvement.png" width={70} height={60} alt="" /></div>
                        <div className={styles.boxHeader}>Check Improvement</div>
                        <div className={styles.boxDesc}>You can have a detailed view on your overall peformance in our tool.</div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.boxImage}><Image src="/certificate.png" width={70} height={60} alt="" /></div>
                        <div className={styles.boxHeader}>Download Certificate</div>
                        <div className={styles.boxDesc}>You can download your certificate after the entire duration of the course.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesTool