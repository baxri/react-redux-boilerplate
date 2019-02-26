import React, { Component } from 'react'

import Header from "../components/Header";
import PostForm from "../components/PostForm";
import PostsList from "../components/Posts";

export default class Posts extends Component {
    render() {
        return (
            <div>
                <Header />
                <h3>Posts</h3>
                <PostForm />
                <PostsList />
            </div>
        )
    }
}
