import React, { useState, useEffect } from 'react'
import Container from '../components/Container'
import PostForm from '../components/PostForm'
import appWriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

const EditPost = () => {
    const [posts, setPosts] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appWriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])


    return posts ? (
        <div className='py-8'>
            <Container>
                <PostForm post={posts} />
            </Container>
        </div>
    ) : null
}

export default EditPost