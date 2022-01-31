import React from 'react'
import logo from '../img/logo.svg'
import { T} from '../internationalization'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footerBHM">
        <div className="wrapper">

        <div className="columnBHM">
          <img src={logo} alt="Black History Month Belgium" style={{ width: '100px' }} />
          <br/>
          <span>©2022</span>
        </div>
        <div className="columnBHM">
          <h1 className="footerTitle">Contact</h1>
          <a href="mailto:info@blackhistorymonth.be?subject=Hello&body=Hello BHM!...">
            info@blackhistorymonth.be
          </a>
        </div>

        <div className="columnBHM followUsFooter">
        <h1 className="footerTitle">  {T('followus')}</h1>
        <div className="social-list">
          <a className="social-item" title="facebook" href="https://www.facebook.com/blackhistorymonthbelgium/"><i className="iconSocial fal fa-thumbs-up"/></a>
          <a className="social-item" title="instagram" href="https://www.instagram.com/bhmbelgium/"><i className="iconSocial fab fa-instagram"/></a>
          <a className="social-item" title="twitter" href="https://twitter.com/BHMBelgium"><i className="iconSocial fab fa-twitter"/></a>
          <a className="social-item" title="linkedin" href="https://www.linkedin.com/company/black-history-month-belgium/"><i className="iconSocial fab fa-linkedin"/></a>
          <a className="social-item" title="youtube" href="https://www.youtube.com/channel/UCV6J0pC2e_P1F0qBc8MsetA/videos"><i className="iconSocial fab fa-youtube"/></a>
        </div>
        </div>

        </div>

      </footer>
    )
  }
}

export default Footer
