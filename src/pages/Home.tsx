import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'

interface CatData {
  id: string
  url: string
  width: number
  height: number
}

const Home = () => {
  const [catData, setCatData] = useState<CatData[]>([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)

  const fetchCats = useCallback(async (pageNum: number, append = false) => {
    try {
      if (pageNum === 1) setLoading(true)
      else setLoadingMore(true)
      
      const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=6&page=${pageNum}`)
      const json = await response.json()
      
      console.log(`Fetched page ${pageNum}:`, json)
      
      if (append) {
        setCatData(prev => [...prev, ...json])
      } else {
        setCatData(json)
      }
      
      setLoading(false)
      setLoadingMore(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch cats')
      setLoading(false)
      setLoadingMore(false)
    }
  }, [])

  useEffect(() => {
    fetchCats(1)
  }, [fetchCats])

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 1000
      ) {
        if (!loadingMore && !loading) {
          const nextPage = page + 1
          setPage(nextPage)
          fetchCats(nextPage, true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [page, loadingMore, loading, fetchCats])
  return (
    <div className={`home ${catData.length > 0 ? 'has-cats' : ''}`}>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">EliasL</span>
          </h1>
          <div className="hero-actions">
            <Link to="/about" className="btn btn-primary">
              Shoot for the stars
            </Link>
          </div>          <div className="api-data">
            {loading && <p className="loading">Fetching cute cats from space...</p>}
            {error && <p className="error">Error: {error}</p>}
            {catData.length > 0 && (
              <div className="cat-display">
                <h3>Infinite Cats from Space 🐱✨</h3>
                <div className="cat-grid">
                  {catData.map((cat, index) => (
                    <div key={`${cat.id}-${index}`} className="cat-item">
                      <img 
                        src={cat.url} 
                        alt={`Random cat ${index + 1}`} 
                        className="cat-image"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                {loadingMore && (
                  <div className="loading-more">
                    <p>Loading more space cats... 🚀</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
