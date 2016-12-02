//this is a stateless functional component
import React from 'react';
import { Link } from 'react-router';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import MainContainer from './MainContainer';
import Loading from './Loading';

const styles = {
  space: {
    marginTop: '25px'
  }
};

const PropTypes = React.PropTypes;
/*
function puke(obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}
*/
function ConfirmBattle(props) {
  return (
    props.isLoading ?
    <Loading text='Preparing for Battle' /> :
    <MainContainer>
      <h1>Confirm Players</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Player One'>
          <UserDetails info={props.playersInfo[0]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Player Two'>
          <UserDetails info={props.playersInfo[1]} />
        </UserDetailsWrapper>
      </div>
      <div className='col-sm-8 col-sm-offset-2'>
        <div className='col-sm-12'>
          <button type='button' className='btn btn-success btn-lg' onClick={props.onInitiateBattle} style={styles.space}>
            Initiate Battle!
          </button>
        </div>
        <div className='col-sm-12'>
          <Link to='/playerOne'>
            <button type='button' className='btn btn-danger btn-lg' style={styles.space}>
              Reselect Players?
            </button>
          </Link>
        </div>
      </div>
    </MainContainer>
  )
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
};

module.exports = ConfirmBattle;
