import React from "react"
import { Link } from 'gatsby'
import eventImg from '../img/event.jpg'
const events = [0,0,0];
const ComingUpEvents = () => (
  <section className="comingUpEvents">
    <h1>Upcoming Events</h1>
    <ul className="columns is-one-third-widescreen">
      {events.map((event, key)=>
      <li key={key} className="column">
        <div className="event-wrapper">
          <time>
            <span className="date-event">1-20</span>
            <span className="month-event">Mar</span>
          </time>
          <div className="coming-event">
          <img
          src={eventImg}
          title="Black History Month 2020"
          alt="Highlight event BHM 2020"
          />
          <div className="event-detail">
          <div className="performancer">
            <h1>Africa is/in the future 2019</h1>
            <p>Don Pandzou</p>
          </div>
            <div className="detail-btn-event">
              <div className="detail">
                <span className="tag-event"> <i className="fal fa-hashtag" />  music debate </span>
                <span className="location"><i className="fal fa-map-marker-alt"/> Antwerp</span>
                <span className="time"> <i className="fal fa-clock"/> 18:00</span>
              </div>
              <Link to="/special-event">
                Detail <i className="far fa-chevron-right"></i>
              </Link>
            </div>
          </div>
          </div>
        </div>
      </li>
    )}
    </ul>
    <Link to="/agenda">See more events <i className="far fa-chevron-right"></i></Link>
  </section>
)
export default ComingUpEvents
