import React from 'react'
import PropTypes from 'prop-types'
import usePosts from '../hooks/usePosts'

//Individual Post
const Post = ({ title, date, url, desc}) => (
    <article>
        <a href={url} target='blank' rel='noopener noreferrer'>
            <h2>{title}</h2>
        </a>
        <p>
            <small>Posted on: {date}</small>
        </p>
        <p>{desc}</p>
        <hr />
    </article>
)

Post.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
}

//All of Dev posts
const Posts = () =>{
    const posts = usePosts()

    return (
        <div>
            <p><strong>My Recent Posts:</strong></p>
            {posts.map(post => (
                <Post
                    key={post.id}
                    title={post.title}
                    date={post.date}
                    url={post.url}
                    desc={post.desc}
                />
            ))}
        </div>
    )
}

export default Posts