import Head from 'next/head'
import OurTool from '../components/OurTool'
import FeaturesTool from '../components/FeaturesTool'
import Practice from '../components/Practice'
import Evaluation from '../components/Evaluation'
import Extra from '../components/Extra'


function Tool() {
    return (
        <div>
            <Head>
                <title>Our tools | Maths Fitness Academy</title>
                <meta name="description" content="Maths Fitness Academy provides an environment to practice your mathematical calculations." />
                <meta name="keywords" content="practice mathematics, mathematics calculations, fast calculation, how to become quick in maths"></meta>
            </Head>
            <OurTool />
            <FeaturesTool />
            <Evaluation />
            <Practice />
            <Extra />
        </div>
    )
}

export default Tool