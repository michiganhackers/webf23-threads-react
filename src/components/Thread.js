import './Thread.css'

export default function Thread({ data }) {
  return (
    <div className="threadContainer">
      <b>{data.username}</b>
      <p>{data.text}</p>
    </div>
  )
}
