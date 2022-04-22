
import Head from 'next/head'
import Intro from '../components/Intro'
import Welcome from '../components/Welcome'
import CourseIntro from '../components/CourseIntro'
import Benefits from '../components/Benefits'
import Training from '../components/Training'
import Demo from '../components/Demo'
import Tracking from '../components/Tracking'
import Testimonial from '../components/Testimonial'



function Home(){
    return (
        <div>
            <Head>
            <title>Maths Fitness Academy</title>
                <meta name="Maths Fitness Academy" content="Maths Fitness Academy is an academy provides fitness training to be best in mathematical calculations."/>
                <meta name="keywords" content="practice mathematics, mathematics calculations, fast calculation, how to become quick in maths"></meta>
            </Head>
            <Intro/>
            <Welcome/>
            <CourseIntro/>
            <Benefits/>
            <Training/>
            <Demo/>
            <Tracking/>
            <Testimonial/>
        </div>
    )
}

export default Home