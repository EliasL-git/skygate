import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()
  
  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          EliasL
        </Link>
        <ul className="nav-menu">
          <li>
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/blog" 
              className={`nav-link ${isActive('/blog') ? 'active' : ''}`}
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
