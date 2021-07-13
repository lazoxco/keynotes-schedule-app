import { Link } from 'react-router-dom';
import Search from '../components/Search';

const Keynotes = ({ keynotes }) => {
  const renderKeynotes = keynotes.map((keynote) => (
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
  return (
    <div>
      <Search />
      {renderKeynotes}
    </div>
  );
};

export default Keynotes;
