import React, {Component} from 'react';

class UserForm extends Component {

  state = {
    username: ''
  };

  render() {
    return (
      <div>
        Username: <input value={this.state.username} onChange={this.handleChange}/>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }
}

export default UserForm;