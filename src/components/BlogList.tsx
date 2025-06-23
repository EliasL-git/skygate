import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

const BlogList = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok) {
          throw new Error('Failed to fetch posts')
        }
        const data = await response.json()
        // Get first 10 posts to avoid too many
        setPosts(data.slice(0, 10))
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="blog-list">
        <div className="loading">Loading posts...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="blog-list">
        <div className="error">Error: {error}</div>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="blog-list">
        <div className="blog-empty">
          <p>No posts yet... but stay tuned!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-list">
      <div className="posts-grid">
        {posts.map((post) => (
          <article key={post.id} className="blog-card">
            <h2 className="blog-card-title">
              <Link to={`/blog/${post.id}`}>
                {post.title}
              </Link>
            </h2>
            <p className="blog-card-excerpt">
              {post.body.length > 150 
                ? `${post.body.substring(0, 150)}...` 
                : post.body
              }
            </p>
            <div className="blog-card-footer">
              <Link to={`/blog/${post.id}`} className="read-more">
                Read More →
              </Link>
              {post.id === 1 && (
                <span className="special-post">🐱 miawoooo</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default BlogList
