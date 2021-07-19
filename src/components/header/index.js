import React from 'react'
import { Link } from 'gatsby'
import Brand from '../brand/'
import './index.scss'

const Header = () => {
  if (typeof window !== 'undefined') {
    window.addEventListener('click', function () {
      handleCloseNav()
    })
  }

  function handleToggleNav(e) {
    e.stopPropagation()
    handleCloseNav()
    const menuItem = e.currentTarget
    menuItem.classList.toggle('isActive')
  }

  function handleCloseNav(e) {
    var navItem = document.querySelectorAll('.hasChild')
    for (var i = 0; i < navItem.length; ++i) {
      if (navItem[i].classList.contains('isActive')) {
        navItem[i].classList.remove('isActive')
      }
    }
  }

  return (
    <header className="primaryHeader" aria-label="Main heading">
      <div>
        <button className="hamburger" aria-label="Open and Close navigation menu"></button>

        <Link className="brand" to="/" aria-label="Link to homepage" title="Link to homepage">
          <Brand />
        </Link>

        <nav className="primaryNav " aria-label="Main navigation" role="navigation">
          <ul>
            <li
              role="presentation"
              className="hasChild"
              onClick={handleToggleNav}
              onKeyDown={handleToggleNav}
            >
              <span>
                Features
                <i className="material-icons-round" aria-hidden="true">
                  expand_more
                </i>
              </span>
              <ul>
                <li>
                  <Link to="/" activeClassName="activeNavItem">
                    Performance
                  </Link>
                </li>
                <li>
                  <Link to="/" activeClassName="activeNavItem">
                    Dividends
                  </Link>
                </li>
                <li>
                  <Link to="/" activeClassName="activeNavItem">
                    Tax reporting
                    <i className="material-icons-round" aria-hidden="true">
                      chevron_right
                    </i>
                  </Link>
                </li>
                <li>
                  <Link to="/" activeClassName="activeNavItem">
                    Supported Investments
                  </Link>
                </li>
                <li>
                  <Link to="/" activeClassName="activeNavItem">
                    Supported exchanges
                  </Link>
                </li>
                <li>
                  <Link to="/" activeClassName="activeNavItem">
                    Supported brokers
                  </Link>
                </li>
              </ul>
            </li>
            <li
              role="presentation"
              className="hasChild"
              onClick={handleToggleNav}
              onKeyDown={handleToggleNav}
            >
              <span>
                Benefits
                <i className="material-icons-round" aria-hidden="true">
                  expand_more
                </i>
              </span>
              <ul>
                <li>
                  <Link to="/" activeClassName="activeNavItem">
                    Great benefits
                  </Link>
                </li>
                <li>
                  <Link to="/" activeClassName="activeNavItem">
                    More good links here
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/" activeClassName="activeNavItem">
                Pricing
              </Link>
            </li>
            <li>
              <span>
                Resources
                <i className="material-icons-round" aria-hidden="true">
                  expand_more
                </i>
              </span>
            </li>
          </ul>
          <span className="sign-in">
            <button className="btn btnSecondary">Log in</button>
            <button className="btn btnPrimary">Sign up for free</button>
          </span>
        </nav>
      </div>
    </header>
  )
}

export default Header
