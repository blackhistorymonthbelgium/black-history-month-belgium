import React from "react"
import { Link } from 'gatsby'
import poster from '../img/poster.jpg'
import event from '../img/event.jpg'
const Highlights = () => (
  <section className="columns is-half-desktop is-full-mobile highlights">
    <div className="column poster">
        <img
        src={poster}
        title="Black History Month 2020"
        alt="Poster BHM 2020"
        />
        <Link to="/poster">
          Read more <i className="far fa-chevron-right"></i>
        </Link>
    </div>
    <div className="column special-event">
      <span>#music #debate</span>
      <p>
        <time>
          <span className="date-event">1-20</span>

          <span className="month-event">Mar</span>
        </time>
      </p>
      <img
      src={event}
      title="Black History Month 2020"
      alt="Highlight event BHM 2020"
      />
      <h1>Africa is/in the future 2019</h1>
      <Link to="/special-event">
        Detail <i className="far fa-chevron-right"></i>
      </Link>
    </div>
  </section>
)
export default Highlights
