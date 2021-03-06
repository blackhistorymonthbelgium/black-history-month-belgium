import React from "react"
import moment from 'moment'
import { T } from '../internationalization';
import { PostLink, TagLink, LocalizedLink } from './Links'

function formatDateEvent(event){
  const dateStart = moment(event.node.frontmatter.datestart).format("DD");
  const dateEnd = moment(event.node.frontmatter.dateend).format("DD");
  return dateStart
    + " " + (dateStart !== dateEnd ? `- ${dateEnd}` : "");
}


const ComingUpEvents = (props) => {

  let { events } = props;
  const now = moment();
  events = events.filter(event => now.isBefore(event.node.frontmatter.datestart));
  const noEvents = events.length === 0;

  return(
    <section className="comingUpEvents">
      <h1>{T('upcomingEvents')}</h1>
      {noEvents && <h2 className="noEventNotification">We will post our upcoming events shortly</h2>}
      <ul className="columns container is-one-third-widescreen">
      {events.slice(0,3).map((event, key)=>
      <li key={key} className="column is-one-third">
        <div className="event-wrapper-outside">
          <div className="event-wrapper">
            <div className="event-wrapper-insider">
              <time>
                <span className="date-event">{formatDateEvent(event)}</span>
                <span className="month-event">{moment(event.node.frontmatter.datestart).format("MMM")}</span>
              </time>
              <div className="performancer">
                <div className="headerlines"><PostLink post={event.node}>{event.node.frontmatter.title}</PostLink></div>
                <p>{event.node.frontmatter.artists.join(", ")}</p>
              </div>
              <div className="event-detail">
                <div className="detail">
                  <span className="tag-event"> <i className="fal fa-hashtag" />{event.node.frontmatter.tags.map(tag => (<TagLink key={tag} tag={tag}> {tag} </TagLink>))}</span>
                  <div className="highlightloc">
                    <span className="location"><i className="fal fa-map-marker-alt"/> {event.node.frontmatter.location}</span>
                    <span className="time"> <i className="fal fa-clock"/> {moment(event.node.frontmatter.datestart).format("HH:mm")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="detail-wrapper">
            <div className='detail-spacer' />
            <div className='detail-link'>
              <PostLink post={event.node}>
                {T('details')} <i className="far fa-chevron-right"></i>
              </PostLink>
          </div>
          </div>
        </div>
      </li>
      )}
      </ul>
      {!noEvents && <LocalizedLink className="goToAgenda" to="/agenda">{T("seeMoreEvents")} <i className="far fa-chevron-right"></i></LocalizedLink>}
    </section>
  );
}
export default ComingUpEvents
