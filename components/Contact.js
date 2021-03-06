import styles from '../styles/Contact.module.css'
import Link from "next/link"
import React, { useState } from "react";


function Contact() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [mfs, setMfs] = useState("");
    const [message, setMessage] = useState("");
    async function handleSubmit(e){
        e.preventDefault();
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
            if (!field.name) return;
            formData[field.name]=field.value;
        });
        //const msg = JSON.stringify(formData);
        var msg = 'Hai, I am '+formData.fname+' '+formData.lname+'. You can contact me by \"'+formData.mail+'\" or by phone through \"'+formData.phone+'\". ';
        var purpose = ''
        if (formData.mfs=='demo'){
            purpose = 'I would like to book a demo course. '
        }else if(formData.mfs=='job'){
            purpose = 'I would like to know if you have any job opportunity. '
        }else if(formData.mfs=='idea'){
            purpose = 'I have an idea to share with you. '
        }else if(formData.mfs=='course'){
            purpose = 'I would like to know more about available courses. '
        }else{

        }
        const text = msg+purpose+'\"'+formData.message+'\"';
        location="https://api.whatsapp.com/send?phone=919895237349&text="+text+"";
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    Contact Us
                </h1>
                <p className={styles.description}>
                    Maths fitness academy helps you to do quick and accurate mathematical calculations. With the training and tool we offer, students will be able to become a master in mathematics. 
                    If you are interested to be a part in our journey feel free to contact through the below form.
                </p>
            </div>
            <div className={styles.contact}>
                <div className={styles.details}>
                    <h1 className={styles.subtitle}>Contact Information</h1>
                    <p className={styles.desc}>You can contact us to book an appointment or to join any of our course. We are also happy to hear your valuable opinions.</p>
                    <div className={styles.icon}>
                        <div className={styles.iconImage1}></div>
                        <h3 className={styles.text}>+91 9895237349</h3>
                    </div>
                    <div className={styles.icon}>
                        <div className={styles.iconImage2}></div>
                        <h3 className={styles.text}>Info@mathsfitnessacademy&middot;com</h3>
                    </div>
                    <div className={styles.icon}>
                        <div className={styles.iconImage3}></div>
                        <h3 className={styles.text}>C.M Mathew Brothers Arcade, West Nadakkave, Kozhikode, Kerala 673006 </h3>
                    </div>
                    <div className={styles.social_icons}>
                        <Link href='https://www.facebook.com/mathsfitnessacademy'><a className={styles.iconLink}><div className={styles.socialIcon1}></div></a></Link>
                        <Link href='https://www.instagram.com/mathsfitnessacademy'><a className={styles.iconLink}><div className={styles.socialIcon2}></div></a></Link>
                        <Link href='https://www.linkedin.com/company/maths-fitness-academy/'><a className={styles.iconLink}><div className={styles.socialIcon3}></div></a></Link>
                        <Link href='https://api.whatsapp.com/send?phone=919895237349'><a className={styles.iconLink}><div className={styles.socialIcon4}></div></a></Link>
                    </div>
                </div>
                <div className={styles.forms}>
                    <form onSubmit={handleSubmit} className={styles.form} autoComplete="off" >
                        <div className={styles.textFiles}>
                            <div className={styles.combo}>
                                <label htmlFor="fname">First Name</label><br />
                                <input autoComplete="off" autofill="off" name="fname" id="fname" type="text" />
                            </div>
                            <div className={styles.combo}>
                                <label htmlFor="lname">Last Name</label><br />
                                <input autoComplete="off" autofill="off" name="lname" id="lname" type="text" />
                            </div>
                            <div className={styles.combo}>
                                <label htmlFor="mail">Mail</label><br />
                                <input autoComplete="off" autofill="off" name="mail" id="mail" type="text" />
                            </div>
                            <div className={styles.combo}>
                                <label htmlFor="phone">Phone</label><br />
                                <input autoComplete="off" autofill="off" id="phone" type="text" name="phone"/>
                            </div>
                        </div>
                        <h1 className={styles.innerHead}>How do you want to collaborate?</h1>
                        <div className={styles.radioButtons}>
                            <label htmlFor="demo" className={styles.radioLabel}>
                                <input type="radio" id="demo" name="mfs" value="demo" className={styles.defaultRadio}/>
                                <div className={styles.customRadio}></div>
                                Book a demo
                            </label>
                            <label htmlFor="course" className={styles.radioLabel}>
                                <input type="radio" id="course" name="mfs" value="course" className={styles.defaultRadio} />
                                <div className={styles.customRadio}></div>
                                Join a Course
                            </label>
                            <label htmlFor="idea" className={styles.radioLabel}>
                                <input type="radio" id="idea" name="mfs" value="idea" className={styles.defaultRadio} />
                                <div className={styles.customRadio}></div>
                                Share Your Idea
                            </label>
                            <label htmlFor="job" className={styles.radioLabel}>
                                <input type="radio" id="job" name="mfs" value="job" className={styles.defaultRadio} />
                                <div className={styles.customRadio}></div>
                                Work with us
                            </label>
                        </div>
                        <div className={styles.textArea}>
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" placeholder="Enter your message..."/>
                        </div>
                        <button type="submit" className={styles.button}>Send</button>
                    </form>
                </div>
            </div >
        </div >


    )
}

export default Contact