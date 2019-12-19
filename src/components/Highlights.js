import React from "react"
import { Link } from 'gatsby'
import poster from '../img/poster.jpg'
import event from '../img/event.jpg'
const Highlights = () => (
  <section className="highlights">
    <div className="columns is-half-desktop is-full-mobile">
      <div className="column column-poster">
        <div className="poster">
        <img
        src={poster}
        title="Black History Month 2020"
        alt="Poster BHM 2020"
        />
        <Link to="/poster">
          Read more <i className="far fa-chevron-right"></i>
        </Link>
        </div>
      </div>
      <div className="column column-event">
        <div className="special-event">
          <span className="genre">#music #debate</span>
          <time>
            <span className="date-event">1-20</span>
            <span className="month-event">Mar</span>
          </time>

            <div className="img-wrapper">
              <img
              src={event}
              title="Black History Month 2020"
              alt="Highlight event BHM 2020"
              />
              <h1><Link to="/special-event">Africa is/in the future 2019 shdxwehafgqwagxuqwg sjdsjhadj <i className="far fa-chevron-right"></i>  </Link></h1>
          </div>
        </div>
      </div>
    </div>
  </section>
)
export default Highlights
