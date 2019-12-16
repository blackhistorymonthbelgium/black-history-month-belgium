import React from "react"
import { Link } from 'gatsby'
import logo from '../img/bhm-logo.svg'
const partners = [0,0,0,0,0,0,0,0];
const Sponsors = () => (
  <section className="sponsors">
    <div className="bePartner">
      <h1>Our Partners</h1>
      <p>
        LOREM IPSUM GENERATOR
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <a href="mailto:blackhistorymonth.belgium@gmail.com?subject=Become BHM Partner&body=Hello BHM! We'd like to be your partner...">Be our partner</a>
    </div>
    <ul className="partners">
      {partners.map((partner, key)=>
        <li key={key}>
          <a href="https://www.facebook.com/blackhistorymonthbelgium/">
            <img
            src={logo}
            alt="BHM"
            style={{height: '3em' }}
            />
          </a>
        </li>
      )}
    </ul>
  </section>
)
export default Sponsors
