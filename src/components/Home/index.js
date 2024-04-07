// Write your code here

import {Component} from 'react'

import GetMessage from '../Message'

import Login from '../Login'

import Logout from '../Logout'

class Home extends Component {
  state = {login: false}

  onLogin = () => {
    this.setState({login: true})
  }

  onLogout = () => {
    this.setState({login: false})
  }

  render() {
    const {login} = this.state

    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <GetMessage className={login} />
          <div>
            {login ? (
              <Logout onClickLogout={this.onLogout} />
            ) : (
              <Login onClickLogin={this.onLogin} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
