import { useRouter } from 'next/router';
import Link from "next/link"
import styles from '../styles/Layout.module.css';
import Image from 'next/image'
import { useEffect, useState } from 'react'


function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const openmenu = () => setIsOpen(!isOpen);
    const router = useRouter();

    const [navbar,setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= screen.height-200){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => window.removeEventListener('scroll',changeBackground);
    },[]);

    return (
        <nav className={navbar ? styles.navbar+" "+styles.active : styles.navbar}>
            <div className={styles.logocontainer}>
                <Link href='/' passHref>
                    <a className={styles.navlogo}><Image src="/Logo.svg" width={180} height={50} alt="" /></a>
                </Link>
            </div>
            <div className={styles.menucontainer}>
                <div className={styles.navCol}>

                    <ul className={isOpen === false ? styles.navmenu : styles.navmenu + ' ' + styles.active}>
                    
                        <li className={styles.navitem}>
                            <Link href='/' passHref>
                                <a className={router.pathname == "/" ? styles.navlink + " " + styles.selectednav : styles.navlink}>Home</a>
                            </Link>
                        </li>
                        <li className={styles.navitem}>
                            <Link href='/about' passHref>
                                <a className={router.pathname == "/about" ? styles.navlink + " " + styles.selectednav : styles.navlink}>About</a>
                            </Link>
                        </li>
                        <li className={styles.navitem}>
                            <Link href='/course' passHref>
                                <a className={router.pathname == "/course" ? styles.navlink + " " + styles.selectednav : styles.navlink}>Courses</a>
                            </Link>
                        </li>
                        <li className={styles.navitem}>
                            <Link href='/tool'>
                                <a className={router.pathname == "/tool" ? styles.navlink + " " + styles.selectednav : styles.navlink}>Our Tool</a>
                            </Link>
                        </li>
                        <li className={styles.navitem}>
                            <Link href='/contact' passHref>
                                <a className={router.pathname == "/contact" ? styles.navlink + " " + styles.selectednav : styles.navlink}>Contact</a>
                            </Link>
                        </li>
                        <div className={styles.roundBtns}>
                        <Link href='https://students.mathsfitnessacademy.com/home' passHref>
                            <button className={styles.roundBtn1}><Image src="/register_login.png" width={50} height={50} alt="" /></button>
                        </Link>
                        
                        <Link href='/contact' passHref>
                            <button className={styles.roundBtn2}><Image src="/contactus.png" width={50} height={50} alt="" /></button>
                        </Link>
                    </div>
                    </ul>
                </div>

                
                <div className={styles.navCol}>
                    <Link href='https://students.mathsfitnessacademy.com/home' passHref>
                        <button className={styles.bluebtn}>Register/Login</button>
                    </Link>

                    <Link href='/contact' passHref>
                        <button className={styles.btn}>Call us: +91 9544138443</button>
                    </Link>
                </div>
                <button className={isOpen === false ?
                    styles.hamburger : styles.hamburger + ' ' + styles.active}
                    onClick={openmenu}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>

            </div>
        </nav>
    )
}

export default Header