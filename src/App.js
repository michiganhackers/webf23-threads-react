import ThreadInput from "./components/ThreadInput";
import Thread from "./components/Thread";
import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [threads, setThreads] = useState([]);
  const pageRendered = useRef(false);

  // get data from JSONbin.io
  useEffect(() => {
    const getData = async () => {
      // get data from jsonbin
      // set threads state to the results
      console.log("Pulling data...");
      fetch("https://api.jsonbin.io/v3/b/65510fa80574da7622c5b73c", {
        headers: {
          "X-Master-Key":
            "$2a$10$agrRs/4khXuruBXgc4S7VO/qnrB48JnzBvN1Pf51CJ.XhYdHwI4pe", // Your secret key
        },
      })
        .then((response) => response.json())
        .then((data) => setThreads(data.record));
    };
    getData();
  }, []);

  // update data to JSONbin.io
  useEffect(() => {
    const postData = async () => {
      // on threads state chnage, update storage in JSONbin
      console.log("Posting data...");
      fetch("https://api.jsonbin.io/v3/b/65510fa80574da7622c5b73c", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": "$2a$10$agrRs/4khXuruBXgc4S7VO/qnrB48JnzBvN1Pf51CJ.XhYdHwI4pe", // Your secret key
        },
        body: JSON.stringify(threads),
      })
    };
    if (pageRendered.current) {
      postData();
    }
    pageRendered.current = true;
  }, [threads]);

  useEffect(() => {
    setUsername(prompt("Login with your username:"));
  }, []);

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
        {threads &&
          threads.map((thread) => (
            <Thread key={thread.id} data={thread} setThreads={setThreads} />
          ))}
      </div>
    </div>
  );
}

export default App;
