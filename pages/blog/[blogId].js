import { useRouter } from 'next/router'

function BlogContents(){
    const router = useRouter()
    const blogId = router.query.blogId
    return <h1>This is Blog Number { blogId }</h1>
}

export default BlogContents