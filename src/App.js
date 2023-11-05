import ThreadInput from './components/ThreadInput'
import Thread from './components/Thread'
import './App.css'
import { useState } from 'react'

function App() {
  const [threads, setThreads] = useState([
    {
      id: 'b9dea1a3-ff35-4d78-a799-8adfbd77d5ca',
      username: 'bztravis',
      text: "EECS, EECS, EECS at Michigan, EECS 281 is a class I'd take again",
      timestamp: Date.now(),
    },
    {
      id: 'ba688c73-5a2d-4397-b928-6dc011e5c236',
      username: 'srsawant',
      text: 'React is a perfect framework with no flaws or room for improvement!',
      timestamp: Date.now(),
    },
    {
      id: 'bb0b5d7b-5438-4756-8e1d-855e6ac95f37',
      username: 'urmom',
      text: 'Meme',
      timestamp: Date.now(),
    },
  ])
  console.log('threads', threads)

  return (
    <div className="appContainer">
      <nav>
        <img className="logo" src="/logo.png" alt="logo" />
      </nav>
      <ThreadInput threads={threads} setThreads={setThreads} />
      <div className="feed">
        {threads.map((thread) => (
          <Thread key={thread.id} data={thread} />
        ))}
      </div>
    </div>
  )
}

export default App
