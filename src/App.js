import ThreadInput from './components/ThreadInput'
import Thread from './components/Thread'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [username, setUsername] = useState('')
  const [threads, setThreads] = useState([
    {
      id: 'b9dea1a3-ff35-4d78-a799-8adfbd77d5ca',
      username: 'bztravis',
      text: "EECS, EECS, EECS at Michigan, EECS 281 is a class I'd take again",
      timestamp: Date.now(),
      liked: false,
    },
    {
      id: 'ba688c73-5a2d-4397-b928-6dc011e5c236',
      username: 'srsawant',
      text: 'React is a perfect framework with no flaws or room for improvement!',
      timestamp: Date.now(),
      liked: true,
    },
    {
      id: 'bb0b5d7b-5438-4756-8e1d-855e6ac95f37',
      username: 'urmom',
      text: 'Meme',
      timestamp: Date.now(),
      liked: true,
    },
  ])

  // get data from JSONbin.io
  useEffect(() => {
    const getData = async () => {
      // get data from jsonbin
      // set threads state to the results
      console.log('Pulling data...')
    }
    getData()
  }, [])

  // update data to JSONbin.io
  useEffect(() => {
    const postData = async () => {
      // on threads state chnage, update storage in JSONbin
      console.log('Posting data...')
    }
    postData()
  }, [threads])

  useEffect(() => {
    setUsername(prompt('Login with your username:'))
  }, [])

  return (
    <div className="appContainer">
      <nav>
        <img className="logo" src="/logo.png" alt="logo" />
      </nav>
      <ThreadInput
        threads={threads}
        setThreads={setThreads}
        username={username}
      />
      <div className="feed">
        {threads.map((thread) => (
          <Thread key={thread.id} data={thread} setThreads={setThreads} />
        ))}
      </div>
    </div>
  )
}

export default App
