import React from "react"
import { Link } from 'gatsby'
import eventImg from '../img/event.jpg'
const events = [0,0,0, 0, 0, 0];
const AgendaResults = () => (
  <ul className="agenda-results">
    {events.map((event, key)=>
      <li key={key} className="column">
        <div className="event-wrapper">
          <div className="event-wrapper-insider">
            <time>
              <span className="date-event">1-20</span>
              <span className="month-event">Mar</span>
            </time>
            <div className="performancer">
              <h1>Africa is/in the future 2019</h1>
              <p>Don Pandzou</p>
            </div>
            <div className="event-detail">
              <img
              src={eventImg}
              title="Black History Month 2020"
              alt="Highlight event BHM 2020"
              />
              <div className="detail">
                <span className="tag-event"> <i className="fal fa-hashtag" />  music debate </span>
                <span className="location"><i className="fal fa-map-marker-alt"/> Antwerp</span>
                <span className="time"> <i className="fal fa-clock"/> 18:00</span>
              </div>
            </div>
          </div>
        </div>
        <div className='detail-wrapper'>
          <div className='detail-spacer' />
          <div className='detail-link'>
            <Link to="/special-event">
              Detail <i className="far fa-chevron-right"></i>
            </Link>
          </div>
        </div>
      </li>
    )}
  </ul>
)
export default AgendaResults
