import React from 'react';
import { Link } from 'react-router';
import MainContainer from './MainContainer'


const Home = React.createClass({
  render() {
    return (
      <MainContainer>
        <h1>GitHub Battle</h1>
        <p className='lead'><code>git set go</code></p>
        <Link to='/playerOne'>
          <button
            className='btn btn-large btn-success'
            type='button'>
            Get Started
          </button>
        </Link>
      </MainContainer>
    )
  }
});

module.exports = Home;
