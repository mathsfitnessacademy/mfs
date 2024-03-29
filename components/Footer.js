import Link from "next/link"
import Image from 'next/image'
import styles from '../styles/Layout.module.css';


function Footer() {

    return (
        <div className={styles.footer}>
            <div className={styles.contact_footer}>
                <div className={styles.icon}>
                    <div className={styles.iconImage1}>
                        <Image className={styles.icon1}  src="/mobile.svg" width={22} height={40} alt=""/>
                    </div>
                    <div className={styles.footTexts}>
                        <h3 className={styles.caption}>Call</h3>
                        <h3 className={styles.contact}>+91 9895230914</h3>
                    </div>
                </div>
                <div className={styles.icon}>
                    <div className={styles.iconImage2}>
                        <Image className={styles.icon2} src="/mail.svg" width={41} height={29} alt=""/>
                    </div>
                    <div className={styles.footTexts}>
                        <h3 className={styles.caption}>Mail</h3>
                        <h3 className={styles.contact}>info&#64;mathsfitnessacademy&#183;com</h3>
                    </div>
                </div>
                <div className={styles.icon}>
                    <Link  href='https://api.whatsapp.com/send?phone=919895237349&text=Book a free demo' passHref><button className={styles.footbtn}>BOOK A FREE DEMO</button></Link>
                </div>
                <div className={styles.icon}>
                    <Image src="/iso.jpeg" width={100} height={100}/>
                </div>
            </div>
            <div style={{ borderTop: "2px solid #eee ", marginLeft: 60, marginRight: 60 }}></div>
            <div className={styles.footnav}>
                <ul className={styles.footitems}>
                    <li><Link href='/' passHref><a className={styles.footnavlink}>Home</a></Link></li>
                    <li><Link href='/about' passHref><a className={styles.footnavlink}>About</a></Link></li>
                    <li><Link href='/course' passHref><a className={styles.footnavlink}>Courses</a></Link></li>
                    <li><Link href='/tool'><a className={styles.footnavlink}>Our Tool</a></Link></li>
                    <li><Link href='/contact' passHref><a className={styles.footnavlink}>Contact</a></Link></li>
                </ul>
                <div className={styles.social_icons}>
                    <Link href='https://www.facebook.com/mathsfitnessacademy' passHref><a className={styles.iconLink}><div className={styles.socialIcon}><Image src="/fb.svg" width={35} height={35} alt=""/></div></a></Link>
                    <Link href='https://www.instagram.com/mathsfitnessacademy' passHref><a className={styles.iconLink}><div className={styles.socialIcon}><Image src="/insta.svg" width={35} height={35} alt=""/></div></a></Link>
                    <Link href='https://www.linkedin.com/company/maths-fitness-academy/' passHref><a className={styles.iconLink}><div className={styles.socialIcon}><Image src="/linkedin-blue.svg" width={35} height={35} alt=""/></div></a></Link>
                    <Link href='https://api.whatsapp.com/send?phone=919895237349' passHref><a className={styles.iconLink}><div className={styles.socialIcon}><Image src="/whatsapp.svg" width={35} height={35} alt=""/></div></a></Link>
                </div>
            </div>
            <div style={{ borderTop: "2px solid #eee ", marginLeft: 60, marginRight: 60 }}></div>
            <div className={styles.copyright}><p>Copyright © 2022 Maths Fitness Academy. All Rights Reserved. Privacy Statement , Terms &amp; Conditions</p></div>
        </div>
    )
}

export default Footer