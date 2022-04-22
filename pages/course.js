import Head from 'next/head'
import CourseList from '../components/CourseList'
import Goal from '../components/Goal'
import Start from '../components/Start'
import Work from '../components/Work'

function Courses() {
    return (
        <div>
            <Head>
                <title>Courses | Maths Fitness Academy</title>
                <meta name="description" content="Maths Fitness Academy is an academy provides fitness training to be best in mathematical calculations." />
            </Head>

            <Goal />
            <Work />
            <CourseList />
            <Start />
        </div>
    )
}

export default Courses