import ThreadInput from './components/ThreadInput'
import Thread from './components/Thread'
import './App.css'
import { useState } from 'react'

function App() {
  const [threads, setThreads] = useState([
    {
      id: 0,
      username: 'bztravis',
      text: "EECS, EECS, EECS at Michigan, EECS 281 is a class I'd take again",
      timestamp: Date.now(),
    },
    {
      id: 1,
      username: 'srsawant',
      text: 'React is a perfect framework with no flaws or room for improvement!',
      timestamp: Date.now(),
    },
    {
      id: 2,
      username: 'urmom',
      text: 'Meme',
      timestamp: Date.now(),
    },
  ])

  return (
    <div className="appContainer">
      <nav>
        <img className="logo" src="/logo.png" alt="logo" />
      </nav>
      <ThreadInput />
      <div className="feed">
        {threads.map((thread) => (
          <Thread data={thread} key={thread.id} />
        ))}
      </div>
    </div>
  )
}

export default App
