import './ThreadInput.css'
import { useState } from 'react'

export default function ThreadInput({ threads, setThreads, username }) {
  const [text, setText] = useState('')

  return (
    <div className="threadInputContainer">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (!text) return
          const newThread = {
            id: crypto.randomUUID(),
            username: username,
            text: text,
            timestamp: Date.now(),
            liked: false,
          }
          setThreads([newThread, ...threads])
          setText('')
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
