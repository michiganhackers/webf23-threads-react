import './Thread.css'

export default function Thread( {data, setThreads, postData} ) {
    return (
    <div className="threadContainer">
        <b>{data.username}</b>
        <p>{data.text}</p>
        <button 
            onClick={() => {
                setThreads((prev) =>
                    prev.map((elem) => ({
                        ...elem, 
                        liked: elem.id === data.id ? !elem.liked : elem.liked,
                    }))
                    )
            }}
            
        >{data.liked ? "Unlike" : "Like"}</button>
        <button
            // onClick={() => {
            //     setThreads((prev)=> prev.filter((elem) => elem.id !== data.id))
            // }}
            onClick={() => {
                console.log('deleting')
                setThreads((prev) => {

                    const newThreads = prev.filter(
                    (elem) => elem.id !== data.id
                    )
                    postData(newThreads)
                    setThreads(newThreads)
                })
            }}
        >Delete</button>
    </div>
    )
}
