import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">EliasL</span>
          </h1>
          <div className="hero-actions">
            <Link to="/about" className="btn btn-primary">
              Shoot for the stars
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
