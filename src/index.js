import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/Hello'

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Hello></Hello>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
