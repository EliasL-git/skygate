import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* Main layout route with all nested routes */}
        <Route path="/" element={<Layout />}>
          {/* Home route - index route renders at "/" */}
          <Route index element={<Home />} />
          
          {/* About section */}
          <Route path="about" element={<About />} />
          
          {/* Projects section */}
          <Route path="projects" element={<Projects />} />
          
          {/* Blog section with nested routes */}
          <Route path="blog">
            <Route index element={<Blog />} />
            <Route path=":id" element={<BlogPost />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
