import React from "react"
import { Link } from 'gatsby'
import poster from '../img/poster.jpg'
import event from '../img/event.jpg'
const Highlights = () => (
  <section className="highlights">
    <div className="poster">
        <img
        src={poster}
        title="Black History Month 2020"
        alt="Poster BHM 2020"
        />
        <Link to="/poster">
          Read more
        </Link>
    </div>
    <div className="special-event">
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
        Detail
      </Link>
    </div>
  </section>
)
export default Highlights
