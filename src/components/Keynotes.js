import { Link } from 'react-router-dom';

const Keynotes = ({ keynotes, term }) => {
  const filterKeynotes = keynotes.filter((keynote) => {
    return keynote.title.toLowerCase().includes(term.toLowerCase());
  });

  const renderKeynotes = filterKeynotes.map((keynote) => (
    <div className="card" key={keynote.id}>
      <div className="card-body">
        <h3 className="card-title">Topic: {keynote.title}</h3>
        <p className="card-text">Presenter: {keynote.speaker}</p>
        <p className="card-text">Time: {keynote.date_time}</p>
        <Link to={`/keynotes/${keynote.id}`} className="btn btn-primary">
          More Details
        </Link>
      </div>
    </div>
  ));

  return <div>{renderKeynotes}</div>;
};

export default Keynotes;
