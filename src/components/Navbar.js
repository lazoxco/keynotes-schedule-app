import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">DevCon</Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/keynotes" className="nav-link">Schedule</Link>
          </li>
          <li className="nav-item">
            <Link to="/keynotes/new" className="nav-link">New Keynote</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar