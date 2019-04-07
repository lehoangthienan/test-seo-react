import React, { Component } from 'react';
import {Helmet} from "react-helmet";

class App extends Component {
  render() {
    return (
      <div>
      <meta charSet="utf-8" />
              <title>An Le</title>
              <link rel="canonical" href="http://mysite.com/example" />
              <meta name="description" content="An Le" />
              <meta property="og:title" content="An Le" />
              <meta property="og:image" content="https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/52450069_1244416252350097_4263800870111543296_o.jpg?_nc_cat=103&_nc_oc=AQmc0uC5YEtUj4Q26jR0zAlxjcK4s86rUyMFKoZqacxZ05ZCLBBjNv5pTnJD1SwknjH24axpjnqqDosZihwv-26y&_nc_ht=scontent.fsgn5-7.fna&oh=fd1da05c9b797a8fcb67189d8c5b0e78&oe=5D48EA49" />
        <Helmet>
                <meta charSet="utf-8" />
                <title>An Le</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="An Le" />
              <meta property="og:title" content="An Le" />
              <meta property="og:image" content="https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/52450069_1244416252350097_4263800870111543296_o.jpg?_nc_cat=103&_nc_oc=AQmc0uC5YEtUj4Q26jR0zAlxjcK4s86rUyMFKoZqacxZ05ZCLBBjNv5pTnJD1SwknjH24axpjnqqDosZihwv-26y&_nc_ht=scontent.fsgn5-7.fna&oh=fd1da05c9b797a8fcb67189d8c5b0e78&oe=5D48EA49" />
            </Helmet>
        <h1>Googlebot will always crawl</h1>
      </div>
    );
  }
}

export default App;
