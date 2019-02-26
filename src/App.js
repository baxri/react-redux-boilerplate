import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";

import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import PrivateRoute from "./routes/PrivateRoute";

import store from './store/index';

import index from "./pages/index";
import about from "./pages/about";
import posts from "./pages/posts";
import login from "./pages/login";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path='/' component={index} />
              <Route exact path='/about' component={about} />
              <Route exact path='/login' component={login} />
              <PrivateRoute exact path='/posts' component={posts} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
