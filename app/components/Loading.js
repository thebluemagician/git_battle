//making a reusable React component using getDefaultProps
import React from 'react';

const PropTypes = React.PropTypes;

const styles = {
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: '55px'
  },
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '30px',
  }
};

const Loading = React.createClass({
  propTypes: {
    text: PropTypes.string,
    speed: PropTypes.number
  },
  getDefaultProps() {
    return {
      text: 'Loading',
      speed: 300
    }
  },
  getInitialState() {
    this.originalText = this.props.text;
    return {
      text: this.originalText
    }
  },
  componentDidMount() {
    const stopper = this.originalText + '...';
    this.interval = setInterval( () => {
      if(this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }, this.props.speed)
  },
  componentWillUnmount() {
    clearInterval(this.interval);
  },
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.content}>{this.state.text}</h1>
      </div>
    )
  }
});

module.exports = Loading;
