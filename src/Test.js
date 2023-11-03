// export default function Test(props) {
//   console.log(props)
//   return (
//     <p>
//       {props.text}
//       {props.number}
//     </p>
//   )
// }

export default function Test({ text, number }) {
  const words = ['this', 'is', 'a', 'sentence']
  // console.log(props)
  return (
    <>
      <p>
        {text}
        {number}
      </p>
      {words.map((elem) => {
        return <p>{elem}</p>
      })}
    </>
  )
}
