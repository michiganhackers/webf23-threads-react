import logo from './logo.svg'
import './App.css'
import Test from './Test'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello world!! JSX!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        1 + 1<p>{1 + 1}</p>
        <Test text={'hello'} number={2} />
        <Test text={'world'} number={3000} />
      </header>
    </div>
  )
}

export default App
