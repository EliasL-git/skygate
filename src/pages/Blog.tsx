import BlogList from '../components/BlogList'

const Blog = () => {
  return (
    <div className="blog">      <section className="blog-hero">
        <h1>Blog</h1>
        <p>This feature is 100% coming soon its not like i forgot to implement it RIGHT? righttttt??????</p>
        <p className="blog-confession">
          // Yeah... i forgot
        </p>
      </section>

      <section className="blog-content">
        <BlogList />
      </section>
    </div>
  )
}

export default Blog
