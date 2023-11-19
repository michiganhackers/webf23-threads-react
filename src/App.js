import ThreadInput from "./components/ThreadInput";
import Thread from "./components/Thread";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState('')
  const [threads, setThreads] = useState([]);

  useEffect(() => {
   setUsername(prompt('Login in with username: ')) 
  }, [])

  useEffect(() => {
    // Get data from JSONBin
    const getData = async () => {
      console.log('Pulling Data')
      fetch("https://api.jsonbin.io/v3/b/6556bf190574da7622c7ba1c?meta=false", {
        headers: {
          "X-Master-Key": "$2a$10$agrRs/4khXuruBXgc4S7VO/qnrB48JnzBvN1Pf51CJ.XhYdHwI4pe"
        }
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data)
        setThreads(data.threads)
      })
    }
    getData()
  }, [])

  useEffect(() => {
    // Post data to JSONBin
    const postData = async () => {
      console.log('Posting Data')
      fetch("https://api.jsonbin.io/v3/b/6556bf190574da7622c7ba1c?meta=false", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": "$2a$10$agrRs/4khXuruBXgc4S7VO/qnrB48JnzBvN1Pf51CJ.XhYdHwI4pe"
        },
        body: JSON.stringify(threads),
      })
    }
    postData()
  }, [threads])

  return (
    <div className="appContainer">
      <nav>
        <img className="logo" src="/logo.png" alt="logo" />
      </nav>
      <ThreadInput threads={threads} setThreads={setThreads} username={username}/>
      <div className="feed">
        {threads && threads.map((thread) => (
          <Thread key={thread.id} data={thread} setThreads={setThreads} />
        ))}
      </div>
    </div>
  );
}

export default App;
