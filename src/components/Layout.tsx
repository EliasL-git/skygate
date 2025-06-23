import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className="layout">
      <Navigation />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
