import Link from "next/link"
import { useRouter } from "next/router"
import Start from '../components/Start'
import ContactUs from '../components/Contact'
import Head from 'next/head'


function Contact(){
    const router = useRouter()
    const handleClick = () => {
        console.log
        router.push('/success')
    }
    return (
        <div>
            <Head>
                <title>Contact | Maths Fitness Academy</title>
                <meta name="description" content="Maths Fitness Academy is an academy provides fitness training to be best in mathematical calculations." />
            </Head>
            <ContactUs />
        </div>
    )
}

export default Contact