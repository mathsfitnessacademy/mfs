import React, { useState } from 'react'
import styles from '../styles/Biography.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Biography(){
    const [showBiography,setShowBiography] = useState(false);
    return(
    <div className={styles.box}>
        <h1 className={styles.name}>Full Name</h1>
        <h2 className={styles.position}>Role</h2>
        <h2 className={styles.education}>MSC dadsadsadas</h2>
        <p className={styles.biography}>During the live interactive weekly class, the trainer demonstrates the techniques and then students are given questions to practice, the mentor monitors student attentiveness and takes live feedback throughout the session, in addition to posting answers in the chatbox, the trainer and students speak about the questions verbally, so students can frame real-time questions based on what they have learned, creating an activity-based learning environment that helps students become engaged and retain what they have learned. If a student has questions, he or she may stay back to ask. Trainers and mentors leave only after answering all the questions.</p>
    </div>
    )
}

export default Biography