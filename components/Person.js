import styles from '../styles/Team.module.css'
import Image from 'next/image'
import React, { useState } from 'react'




const Person = (props) => (
    <div className={styles.box}>
        <p className={styles.role}>{props.role}</p>
        <div className={styles.photo}><Image src={props.path} width={150} height={150} alt="" /></div>
        <p className={styles.name}>{props.name}</p>
        
        {/*
        <div className={styles.finalRow}>
            <p className={styles.name}>{props.name}</p>
            <button className={styles.plus}></button>
        </div>
        */}
    </div>
)

export default Person