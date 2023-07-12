import Post from "./Post";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from 'react'

const url = 'http://localhost:7070/posts'

export default function Posts() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
    }, [])

    const onClick = (id, content) => {
        navigate('/posts/' + id, {state: {content: content, id: id}})
    }

    return (
        <>
            <div className={'top'}>
                <div className={'top__menu'}>
                    <Link to={'/posts/new'}>
                        <button className={'top__menu-btn'}> Создать пост</button>
                    </Link>
                </div>
            </div>
            <div className={'posts'}>
                {posts.map(post => {
                    return <Post key={post.id} content={post.content} id={post.id} cbFunc={onClick}/>
                })}
            </div>
        </>
    )
}