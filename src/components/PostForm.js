import React, { Component } from 'react'
import axios from 'axios';
import { connect } from "react-redux";

import { createPost } from "../actions/postActions";

class PostForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: '',
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body,
        };

        this.props.createPost(post);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <br />
                    <div>
                        <label>Title: </label><br />
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Body: </label><br />
                        <input type="text" name="body" value={this.state.body} onChange={this.handleChange} />
                    </div>
                    <br />
                    <button type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}


// const mapStateToProps = state => ({
//     posts: state.posts.items
// })

export default connect(null, { createPost })(PostForm);
