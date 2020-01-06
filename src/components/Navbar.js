import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/bhm-logo.svg'
import { T, getCurrentLanguage } from '../internationalization'
import { getLocalizedUrl, getRelocalizedUrl } from '../helpers'
import { Location } from '@reach/router'
import { LocalizedLink } from './Links'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    const language = getCurrentLanguage();
    const { pathname } = this.props.location;
    return (
      <nav
        className="navbar is-black"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <LocalizedLink to='/' title="Logo">
              <img src={logo} alt="Black History Month Belgium" style={{ width: '100px' }} />
            </LocalizedLink>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <LocalizedLink className="navbar-item" to="/about">
                {T('about')}
              </LocalizedLink>
              <LocalizedLink className="navbar-item" to="/agenda">
                Agenda
              </LocalizedLink>
              <LocalizedLink className="navbar-item" to="/archives">
                Archives
              </LocalizedLink>
              <LocalizedLink className="navbar-item" to="/blog">
                Blog
              </LocalizedLink>
              <span className="languages">
                <Link to={getRelocalizedUrl(pathname, language, "en")}> en </Link>
                <span> / </span>
                <Link to={getRelocalizedUrl(pathname, language, 'nl')}> nl </Link>
                <span> / </span>
                <Link to={getRelocalizedUrl(pathname, language, 'fr')}> fr </Link>
              </span>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

const NavbarLocation = props => (
  <Location>
    {locationProps => <Navbar {...locationProps} {...props} />}
  </Location>
);

export default NavbarLocation;
