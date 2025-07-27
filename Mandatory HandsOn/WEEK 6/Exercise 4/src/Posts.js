// src/Posts.js
import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            hasError: false
        };
    }

    loadPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            const postList = data.map(p => new Post(p.id, p.title, p.body));
            this.setState({ posts: postList });
        } catch (error) {
            this.setState({ hasError: true });
        }
    };

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert('Something went wrong while loading posts.');
    }

    render() {
        if (this.state.hasError) {
            return <h2>Error occurred while loading posts.</h2>;
        }

        return (
            <div>
                <h1>Blog Posts</h1>
                {this.state.posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;
