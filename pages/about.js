import Head from 'next/head'
import AboutUs from '../components/AboutUs'
import Features from '../components/Features'
import Founder from '../components/Founder'
import NoTime from '../components/NoTime'
import Team from '../components/Team'



function About() {
    return (
        <div>
            <Head>
                <title>About | Maths Fitness Academy</title>
                <meta name="description" content="Maths Fitness Academy is an academy provides fitness training to be best in mathematical calculations." />
                <meta name="keywords" content="practice mathematics, mathematics calculations, fast calculation, how to become quick in maths"></meta>
            </Head>
            <AboutUs />
            <Founder />
            <Features />
            <Team />
        </div>
    )
}

export default About