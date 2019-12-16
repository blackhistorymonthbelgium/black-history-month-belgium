import React from "react"
import { Link } from 'gatsby'
const Highlights = () => (
  <section className="highlights">
    <h1>Highlights</h1>
    <div className="poster">
        <h2>Poster</h2>
        <Link to="/poster">
          Read more
        </Link>
    </div>
    <div className="special-event">
    <h2>Special Event</h2>
    <Link to="/special-event">
      Detail
    </Link>
    </div>

    <p>Event</p>
  </section>
)
export default Highlights
