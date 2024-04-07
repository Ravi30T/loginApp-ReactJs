// import Home from '../Home'

const GetMessage = props => {
  const {className} = props

  if (className === true) {
    return <h1> Welcome User </h1>
  }
  return <h1> Please Login </h1>
}

export default GetMessage
