import React from 'react'
import logo from '../img/logo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footerBHM">
        <div className="wrapper">

        <div className="columnBHM">
          <img src={logo} alt="Black History Month Belgium" style={{ width: '100px' }} />
          <br/>
          <span>©2020</span>
        </div>
        <div className="columnBHM">
          <h1 className="footerTitle">Contact</h1>
          <a href="mailto:blackhistorymonth.belgium@gmail.com?subject=Hello&body=Hello BHM!...">
            blackhistorymonth.belgium@gmail.com
          </a>
        </div>

        <div className="columnBHM followUsFooter">
        <h1 className="footerTitle">Follow Us</h1>
        <div className="social-list">
          <a className="social-item" title="facebook" href="https://www.facebook.com/blackhistorymonthbelgium/"><i className="iconSocial fal fa-thumbs-up"/></a>
          <a className="social-item" title="instagram" href="https://www.instagram.com/bhmbelgium/"><i className="iconSocial fab fa-instagram"/></a>
          <a className="social-item" title="twitter" href="https://twitter.com/bhmantwerp"><i className="iconSocial fab fa-twitter"/></a>
        </div>
        </div>

        </div>

      </footer>
    )
  }
}

export default Footer
