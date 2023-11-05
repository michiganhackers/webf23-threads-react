import './ThreadInput.css'
import { useState } from 'react'

export default function ThreadInput() {
  const [text, setText] = useState('')
  return (
    <div className="threadInputContainer">
      <form>
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
