import React, { Component } from 'react'

class Users extends Component {
  state = {
    users: [
    { id: '1', 
      login: 'mojobmo', 
      avatar_url: 'htpps://avatars0.githubusercontent.com/u/1?v=4', 
      html_url: 'https://github.com/mojombo'
    }, 
    users: {
      id: '', 
      login: '', 
      avatar_url: 'htpps://avatars0.githubusercontent.com/u/2?v=4', 
      html_url: 'https://github.com/defunkt'
    }, 
    users: {
      id: '', 
      login: '', 
      avatar_url: 'htpps://avatars0.githubusercontent.com/u/3?v=4', 
      html_url: 'https://github.com/'
    }
  ]
}
  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <div>{user.login}</div>
        ))}
      </div>
    )
  }
}

export default Users
