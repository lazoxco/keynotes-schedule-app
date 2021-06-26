
const KeynoteDetails = (props) => {
  const id = props.match.params.id
  return (
    <h1>Keynote Details - { id }</h1>
  )
}

export default KeynoteDetails