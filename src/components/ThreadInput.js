import { useState } from 'react'
import "./ThreadInput.css";

export default function ThreadInput({ threads, setThreads, username }) {
  const [text, setText] = useState('')
  return (
    <div className="threadInputContainer">
      <form onSubmit={(e) => {
        e.preventDefault();
        const newThread = {
            id: crypto.randomUUID(),
            username: username,
            text: text,
            timestamp: Date.now()

        }
        setThreads([newThread, ...threads])
      }}>
        <input type="text" placeHolder="Start a thread..." name="thread" value={text} onChange={(e) => {
            setText(e.target.value)
        }}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
