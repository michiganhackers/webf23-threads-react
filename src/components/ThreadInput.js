import './ThreadInput.css'

export default function ThreadInput() {
  return (
    <div className="threadInputContainer">
      <form>
        <input type="text" placeholder="Start a thread..." name="thread" />
        <button type="submit">Post</button>
      </form>
    </div>
  )
}
