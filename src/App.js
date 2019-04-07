import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Helmet} from "react-helmet";

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>An Le</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <h1>Googlebot will always crawl</h1>
      </div>
    );
  }
}

export default App;
