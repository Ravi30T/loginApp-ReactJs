// Write your code here

import {Component} from 'react'

import GetMessage from '../Message'

class Home extends Component {
  state = {login: false}

  render() {
    // const {message} = this.props

    const {login} = this.state

    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <GetMessage className={login} />
        </div>
      </div>
    )
  }
}

export default Home
