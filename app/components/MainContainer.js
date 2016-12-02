//This is a stateless functional component
import React from 'react';

const styles = {
  transparentBg: {
    background: 'transparent'
  }
};


function MainContainer(props) {
  return (
    <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
      {props.children}
    </div>
  )
}

module.exports = MainContainer;
