import React from 'react';
import Prompt from '../components/Prompt';

const PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      username: ''
    }
  },
  handleUpdateUser(e) {
    this.setState({
      username: e.target.value
    });
  },
  handleSubmitUser(e) {
    e.preventDefault();
    let userName = this.state.username;
    this.setState({
      username: ''
    });

    if(this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: userName
        }
      });
    } else {
      this.context.router.push('/playerTwo/'+ userName);
    }
  },
  render() {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username}/>
    )
  }
});

module.exports = PromptContainer;
