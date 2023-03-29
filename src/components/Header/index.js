import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const onClickLogo = () => {
    const {history} = props
    history.replace('/')
  }
  return (
    <>
      <nav className="nav-container">
        <ul className="list-items-container">
          <li className="list-nav-logo-item">
            <Link to="/">
              <button className="button" type="button" onClick={onClickLogo}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
                  alt="website logo"
                  className="website-logo"
                />
              </button>
            </Link>
          </li>
          <li className="list-nav-item">
            <div className="links-container">
              <Link to="/" className="nav-link">
                <p className="link">Home</p>
              </Link>

              <Link to="/jobs" className="nav-link">
                <p className="link">Jobs</p>
              </Link>
            </div>
          </li>
          <li className="list-btn-item">
            <button
              className="logout-btn"
              type="button"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default withRouter(Header)
