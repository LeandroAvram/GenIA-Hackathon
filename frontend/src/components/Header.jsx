import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-main">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <svg width="100" height="32" viewBox="0 0 100 32">
                <rect width="100" height="32" fill="#0066cc" rx="2"/>
                <text x="50" y="20" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Personal</text>
              </svg>
            </div>
            <nav className="nav">
              <a href="#" className="nav-link">Planes</a>
              <a href="#" className="nav-link">Servicios</a>
              <a href="#" className="nav-link active">Ayuda</a>
              <a href="#" className="nav-link">Mi Personal</a>
            </nav>
            <div className="header-actions">
              <button className="btn-login">Ingresar</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header