import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/bhm-logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">

          <img className="content"
            src={logo}
            alt="BHM"
            style={{ width: '14em', height: '10em' }}
          />
          <div className="social">
            <a title="facebook" href="https://www.facebook.com/blackhistorymonthbelgium/">
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: '1em', height: '1em' }}
              />
            </a>
            <a title="twitter" href="https://twitter.com/bhmantwerp">
              <img
                className="fas fa-lg"
                src={twitter}
                alt="Twitter"
                style={{ width: '1em', height: '1em' }}
              />
            </a>
            <a title="instagram" href="https://www.instagram.com/bhmbelgium/">
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: '1em', height: '1em' }}
              />
            </a>
          </div>

      </footer>
    )
  }
}

export default Footer
