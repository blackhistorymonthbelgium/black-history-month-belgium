import React from "react"
import { Link } from 'gatsby'
import eventImg from '../img/event.jpg'
const events = [0,0,0];
const ComingUpEvents = () => (
  <section className="comingUpEvents">
    <h1>Upcoming Events</h1>
    <ul className="columns is-one-third-widescreen">
      {events.map((event, key)=>
      <li className="column">
      <span>#music #debate</span>
      <p>
        <time>
          <span className="date-event">1-20</span>
          <span className="month-event">Mar</span>
        </time>
      </p>
      <img
      src={eventImg}
      title="Black History Month 2020"
      alt="Highlight event BHM 2020"
      />
      <h1>Africa is/in the future 2019</h1>
      <p>Don Pandzou</p>
      <div className="detail">
        <span className="tag">music</span>
        <span className="location">Antwerp</span>
        <span className="time">18:00</span>
      </div>
      <Link to="/special-event">
        Detail <i class="far fa-chevron-right"></i>
      </Link>
      </li>
    )}
    </ul>
    <Link to="/agenda">See more events <i class="far fa-chevron-right"></i></Link>
  </section>
)
export default ComingUpEvents
