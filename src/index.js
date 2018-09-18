import React from 'react'
import types from 'prop-types'

class App extends React.Component {
  static propTypes = {
    message: types.string
  }

  static defaultProps = {
    message: '⚛ Happy Packages!'
  }

  render () {
    const { message } = this.props
    return (
      <div>
        <h1>Hey its works! ✨</h1>
        <hr />
        <h2>{ message }</h2>
      </div>
    )
  }
}

export default App
