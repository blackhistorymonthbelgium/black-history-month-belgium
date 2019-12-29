import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/bhm-logo.svg'

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
    return (
      <nav
        className="navbar is-black"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" title="Logo">
              <img src={logo} alt="Black History Month Belgium" style={{ width: '100px' }} />
            </Link>
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
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/agenda">
                Agenda
              </Link>
              <Link className="navbar-item" to="/archives">
                Archives
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <span className="languages">
                <Link to="/"> en </Link>
                <span> / </span>
                <Link to="/"> nl </Link>
                <span> / </span>
                <Link to="/"> fr </Link>
              </span>
            </div>

          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
