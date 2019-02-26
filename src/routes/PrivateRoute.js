import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

export default class PrivateRoute extends Component {

    constructor(props) {
        super(props)

        this.state = {
            auth: false,
        }
    }


    render() {
        if (this.state.auth) {
            return (
                <Route {...this.props} />
            )
        } else {
            return (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: this.props.location }
                    }}
                />
            )
        }
    }
}
