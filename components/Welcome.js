import { useEffect,useState } from 'react';
import styles from '../styles/Welcome.module.css'
import SvgComponent from '../components/SvgComponent'
import Image from 'next/image'




function Welcome(){

    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[]);

    const [isHovering1,setIsHovering1] = useState(false);
    const [isHovering2,setIsHovering2] = useState(false);
    const [isHovering3,setIsHovering3] = useState(false);
    const [isHovering4,setIsHovering4] = useState(false);
    const [isHovering5,setIsHovering5] = useState(false);
    const rot = "M40.855 43.91c.359-.032.717-.065 1.073-.1 8.508-.859 15.916-6.054 16.652-15.116.789-9.718-4.411-21.647-13.607-25.858C33.139-2.583 14.356-.326 6.042 10.473c-3.9 5.059-5.31 11.655-5.764 17.9-.467 6.406-.614 14.4 1.778 20.437 1.61 4.061 5.17 7.658 9.526 7.985 3.769.282 7.287-1.86 10.2-4.272s5.6-5.228 9.058-6.746c3.123-1.376 6.6-1.567 10.015-1.867Z";
    const nor = "M17.804 12.905c-.359.032-.717.065-1.073.1C8.223 13.864.815 19.059.079 28.121-.71 37.839 4.49 49.768 13.686 53.979c11.834 5.419 30.617 3.162 38.931-7.637 3.9-5.059 5.31-11.655 5.764-17.9.467-6.406.614-14.4-1.778-20.437-1.61-4.061-5.17-7.658-9.526-7.985-3.769-.282-7.287 1.86-10.2 4.272s-5.6 5.228-9.058 6.746c-3.123 1.376-6.6 1.567-10.015 1.867Z";
    return (
        <div className={styles.container}>
            <h2 className={styles.welcomeHeader}>Welcome to Maths Fitness Academy</h2>
            <h1 className={styles.header}>Would you like to be fit in math?</h1>
            <p className={styles.desc}>Bringing about change is determined by three factors: learning better techniques, fostering a positive mindset, and regular practice. Through our interactive live online sessions, we motivate and teach them the necessary techniques. We provide them with a web application that allows them to practice on a daily basis.</p>
            <h2 className={styles.exp}>Be fit in an art of problem solving.</h2>
            <div className={styles.block}>
                <div className={styles.box} onMouseEnter={()=>setIsHovering1(true)} onMouseLeave={()=>setIsHovering1(false)}>
                    <h1 className={styles.boxHeader}>24/7</h1>
                    <h1 className={styles.boxHeader}>Contact Support</h1>
                    <SvgComponent color="#95d6e8" line={isHovering1 ? "#FFF" : "#000"} trans={isHovering1 ? rot : nor}/>
                    <p className={styles.boxDesc}>Mentors are available for you regardless of time to support you in your mathematics. </p>        
                </div>
                <div className={styles.box} onMouseEnter={()=>setIsHovering2(true)} onMouseLeave={()=>setIsHovering2(false)}>
                    <h1 className={styles.boxHeader}>Qualified</h1>
                    <h1 className={styles.boxHeader}>Personal Trainers</h1>
                    <SvgComponent color="#fedf6d" line={isHovering2 ? "#FFF" : "#000"} trans={isHovering2 ? rot : nor}/>
                    <p className={styles.boxDesc}>We assure you the best that our trainers are well qualified and offer you quality support.</p>        
                </div>
                <div className={styles.box} onMouseEnter={()=>setIsHovering3(true)} onMouseLeave={()=>setIsHovering3(false)}>
                    <h1 className={styles.boxHeader}>Easy</h1>
                    <h1 className={styles.boxHeader}>Techniques</h1>
                    <SvgComponent color="#febb8d" line={isHovering3 ? "#FFF" : "#000"} trans={isHovering3 ? rot : nor}/>
                    <p className={styles.boxDesc}>We train you to use the proper techniques for easy and fast calculations.</p>        
                </div>
                <div className={styles.box} onMouseEnter={()=>setIsHovering4(true)} onMouseLeave={()=>setIsHovering4(false)}>
                    <h1 className={styles.boxHeader}>User</h1>
                    <h1 className={styles.boxHeader}>Friendly Tool</h1>
                    <SvgComponent color="#d0f7ef" line={isHovering4 ? "#FFF" : "#000"} trans={isHovering4 ? rot : nor}/>
                    <p className={styles.boxDesc}>We offer an environment where you can practice and develop your skills in mathematics.</p>        
                </div>
                <div className={styles.box} onMouseEnter={()=>setIsHovering5(true)} onMouseLeave={()=>setIsHovering5(false)}>
                    <h1 className={styles.boxHeader}>Track</h1>
                    <h1 className={styles.boxHeader}>your progress</h1>
                    <SvgComponent color="#c8dcc1" line={isHovering5 ? "#FFF" : "#000"} trans={isHovering5 ? rot : nor}/>
                    <p className={styles.boxDesc}>The tool help to track and analysis your performence and improvement.</p>        
                </div>
                <div className={styles.dotbg} style={{transform:`translateY(${offsetY * .3}px)`}}></div>
            </div>
        </div>
    )
}

export default Welcome