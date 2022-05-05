import styles from '../styles/Team.module.css'
import Person from '../components/Person'
import Image from 'next/image'



function Team() {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>OUR TEAM</h1>
            <div className={styles.block}>
                <Person role="Founder Director" path="/face.png" name="Yousef .c.t"></Person>
                <Person role="Head of Mentoring" path="/face.png" name="Dr. Sameena"></Person>
                <Person role="Technical Lead" path="/face.png" name="Hisham .U"></Person>
                <div className={styles.box2}>
                    <h1 className={styles.boxHead}>HAVE A QUESTION?</h1>
                    <p className={styles.desc}>Feel free to contact us if you would like to learn more about us.</p>
                </div>
            </div>
        </div>
    )
}

export default Team