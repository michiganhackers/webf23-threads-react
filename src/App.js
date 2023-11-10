import ThreadInput from "./components/ThreadInput";
import Thread from "./components/Thread";
import { useState } from 'react';
import "./App.css";

function App() {
  const [threads, setThreads] = useState([
    {
      id: 0,
      username: "bztravis",
      text: "EECS is cool",
      timestamp: Date.now(),
    },
    {
      id: 1,
      username: "srsawant",
      text: "React is the perfect framework",
      timestamp: Date.now(),
    },
    {
      id: 2,
      username: "urmom",
      text: "Meme",
      timestamp: Date.now(),
    }
  ])

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
  );
}

export default App;
