import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require('../main.css');

const Main = React.createClass({
  render() {
    return (
      <div className='container'>
        <ReactCSSTransitionGroup
          transitionName='appear'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
});

module.exports = Main;
