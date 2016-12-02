//this is a stateless functional component
import React from 'react';
const PropTypes = React.PropTypes;

function UserDetailsWrapper(props) {
  return (
    <div className='col-sm-6'>
      <p className='lead'>{props.header}</p>
      {props.children}
    </div>
  )
}

UserDetailsWrapper.propTypes = {
  header: PropTypes.string.isRequired
}

module.exports = UserDetailsWrapper;
