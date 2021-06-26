
const Keynotes = ({ keynotes }) => {
  // console.log(keynotes)
  const renderKeynotes = keynotes.map(keynote => (
    <div className="card" key={keynote.id}>
      <div className="card-body">
      <h3 className="card-title">Topic: {keynote.title }</h3>
      <p className="card-text">Presenter: {keynote.speaker}</p>
      <p className="card-text">Time: {keynote.date_time} </p>
      </div>
    </div>
  ))
  return (
    <div>
      { renderKeynotes }
    </div>
  )
}

export default Keynotes