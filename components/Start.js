import styles from '../styles/Start.module.css'
import Step from '../components/TextBox'

function Start(){
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    How to start the course
                </h1>
                <p className={styles.description}>
                The course begins with an assessment, which serves as a benchmark to gauge a student&apos;s skill level after registering. After learning new techniques, students master them through practice.
                </p>    
            </div>
            <div className={styles.flow}>
                <h1 className={styles.startText}>Start</h1>
                <div className={styles.startarrow}></div>
                <div className={styles.steps}>
                    <Step first='Registration' second='Creating Student Profile' />
                    <div className={styles.arrow}></div>
                    <Step first='Maths Fitness Benchmark Test' second='Know Your Current Preformance Level' />
                    <div className={styles.arrow}></div>
                    <Step first='Weekly Class' second='Learn New Techniques' />
                    <div className={styles.arrow}></div>
                </div>
            </div>
            <div className={styles.flow}>
                <div className={styles.steps1}>
                    <Step first='Daily Practice' second='practice makes it permanent' />
                    <div className={styles.arrow}></div>
                    <Step first='Final Assessment' second='measure your progress' />
                    <div className={styles.arrow}></div>
                    <Step first='Evaluation and certification' second='performance report and E-certificate issued' />
                </div>
                <div className={styles.finisharrow}></div>
                <h1 className={styles.finishText}>Finish</h1>
            </div>
        </div>
    )
}

export default Start
