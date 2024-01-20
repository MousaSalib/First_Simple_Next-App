
export default function title(props) {
    console.log(props)
  return (
    <div>
      <h1>Show Articles Page</h1>
      <h1>{props.params.title}</h1>
    </div>
  )
}
