import './Thread.css'

export default function Thread({ data, setThreads }) {
  return (
    <div className="threadContainer">
      <b>{data.username}</b>
      <p>{data.text}</p>
      <button
        onClick={() => {
          setThreads((prev) => prev.filter((elem) => elem.id !== data.id))
        }}
      >
        Delete
      </button>
    </div>
  )
}
