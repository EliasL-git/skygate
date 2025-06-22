import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

interface User {
  id: number
  name: string
  email: string
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>()
  const [post, setPost] = useState<Post | null>(null)
  const [author, setAuthor] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPostAndAuthor = async () => {
      if (!id) return

      try {
        const [postResponse, userResponse] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
          fetch(`https://jsonplaceholder.typicode.com/users/1`) // Using user 1 for demo
        ])

        if (!postResponse.ok || !userResponse.ok) {
          throw new Error('Failed to fetch data')
        }

        const [postData, userData] = await Promise.all([
          postResponse.json(),
          userResponse.json()
        ])

        setPost(postData)
        setAuthor(userData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchPostAndAuthor()
  }, [id])

  if (loading) {
    return <div className="loading">Loading post...</div>
  }

  if (error) {
    return <div className="error">Error: {error}</div>
  }

  if (!post) {
    return <div className="error">Post not found</div>
  }

  return (
    <div className="blog-post">
      <div className="blog-post-header">
        <Link to="/blog" className="back-link">← Back to Blog</Link>
        <h1 className="blog-post-title">{post.title}</h1>
        {author && (
          <div className="blog-post-meta">
            <span>By {author.name}</span>
            <span>•</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
        )}
      </div>

      <div className="blog-post-content">
        <p>{post.body}</p>
        
        {/* Adding some extra content to make it look more like a real blog post */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris.
        </p>
        
        <h3>Key Points</h3>
        <ul>
          <li>Modern web development practices</li>
          <li>Performance optimization techniques</li>
          <li>User experience considerations</li>
          <li>Code maintainability and testing</li>
        </ul>

        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="blog-post-footer">
        <Link to="/blog" className="btn btn-secondary">
          Read More Posts
        </Link>
      </div>
    </div>
  )
}

export default BlogPost
