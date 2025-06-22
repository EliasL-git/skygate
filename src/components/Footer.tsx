const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} EliasL. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/eliasL" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/eliasL" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:elias@example.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
