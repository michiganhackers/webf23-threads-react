import ThreadInput from './components/ThreadInput'
import Thread from './components/Thread'
import './App.css'

function App() {
  return (
    <div className="appContainer">
      <nav>
        <img className="logo" src="/logo.png" alt="logo" />
      </nav>
      <ThreadInput />
      <div className="feed">
        <Thread />
        <Thread />
        <Thread />
      </div>
    </div>
  )
}

export default App
