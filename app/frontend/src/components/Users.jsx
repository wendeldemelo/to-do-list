import React, { Component } from 'react';
import getUsers from '../services/requests';

class Users extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };

  }

  componentDidMount() {
    getUsers()
      .then((user) => this.setState({
        users: user,
      }));
      console.log(getUsers());
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <ol>
          { users.map((user) => (
            <li>
              { user.firstName }
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Users;
