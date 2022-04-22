import styles from '../styles/Testimonial.module.css'
import Image from 'next/image'
import Link from "next/link";
import Card from '../components/Card'


function Testimonial() {
    return (
        <div className={styles.container}>
            <h2 className={styles.welcomeHeader}>Testimonial</h2>
            <h1 className={styles.header}>Our Clients Say</h1>
            <div className={styles.block}>
                <div className={styles.testimonial}>
                    <div id="slide-1" name="slide-1"><Card fullName='Akshay P Raj' role='Student' quote='The classes are informative and I learned a lot. Maths Fitness Academy team has been very supportive and friendly. Thank you for the classes.'/></div>
                    <div id="slide-1" name="slide-1"><Card fullName='Haaniya' role='Student' quote='After joining &quot;MATHS FITNESS ACADEMY&quot; I think I have improved a lot in maths by solving questions faster than that I was earlier. It is an excellent class that I have to say. Thank you.'/></div>
                    <div id="slide-1" name="slide-1"><Card fullName='Maisa Sameer' role='Student' quote='Maths fitness academy had helped me a lot to do my calculations easier and faster than before. Now I can do my calculations in seconds with this maths tips.'/></div>
                    <div id="slide-1" name="slide-1"><Card fullName='Misha' role='Student' quote='After taking this course I have improved a lot on my mathematical skills, I thank MFA Academy for their amazing tips and support.'/></div>
                    <div id="slide-1" name="slide-1"><Card fullName='Zeshan' role='Student' quote='The classes were really good. It helped me in doing basic and advanced math faster.'/></div>
                </div>
                <Link href="#slide-1" scroll={false}>
                    <a><span className={styles.pointer} /></a>
                </Link>
                <Link href="#slide-2" scroll={false}>
                    <a><span className={styles.pointer} /></a>
                </Link>
                <Link href="#slide-3" scroll={false}>
                    <a><span className={styles.pointer} /></a>
                </Link>
                <Link href="#slide-4" scroll={false}>
                    <a><span className={styles.pointer} /></a>
                </Link>
                <Link href="#slide-5" scroll={false}>
                    <a><span className={styles.pointer} /></a>
                </Link>
            </div>
        </div>
    )
}

export default Testimonial