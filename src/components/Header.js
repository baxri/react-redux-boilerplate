import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/posts">Topics</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
