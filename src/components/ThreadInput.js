import './ThreadInput.css'
import { useState } from 'react'

export default function ThreadInput({ threads, setThreads }) {
  const [text, setText] = useState('')
  console.log('threads', threads)
  return (
    <div className="threadInputContainer">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const newThread = {
            id: crypto.randomUUID(),
            username: 'bztravis',
            text: text,
            timestamp: Date.now(),
            liked: false,
          }
          setThreads([...threads, newThread])
        }}
      >
        <input
          type="text"
          placeholder="Start a thread..."
          name="thread"
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  )
}
