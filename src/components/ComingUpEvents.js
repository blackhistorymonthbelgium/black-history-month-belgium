import React from "react"
import { Link } from 'gatsby'
import moment from 'moment'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { kebabCase } from 'lodash'

const ComingUpEvents = (props) => {
  const{
    events
  } = props;
  console.log(events);
  return(
    <section className="comingUpEvents">
      <h1>Upcoming Events</h1>
      <ul className="columns is-one-third-widescreen">
        {events.map((event, key)=>
        <li key={key} className="column">
          <div className="event-wrapper">
            <div className="event-wrapper-insider">
              <time>
                <span className="date-event">{moment(event.node.frontmatter.datestart).format("DD")}</span>
                <span className="month-event">{moment(event.node.frontmatter.datestart).format("MMM")}</span>
              </time>
              <div className="performancer">
                <h1><Link to={event.node.fields.slug}>{event.node.frontmatter.title}</Link></h1>
                <p>{event.node.frontmatter.artists.join(", ")}</p>
              </div>
              <div className="event-detail">
              {event.node.frontmatter.featuredimage ? (
                <div className="featured-thumbnail" style={{width: 180}}>
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: event.node.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${event.node.frontmatter.title}`,
                    }}
                  />
                </div>
              ) : null}
                <div className="detail">
                  <span className="tag-event"> <i className="fal fa-hashtag" />{event.node.frontmatter.tags.map(tag => (<Link key={tag} to={`/tags/${kebabCase(tag)}/`}> {tag} </Link>))}</span>
                  <span className="location"><i className="fal fa-map-marker-alt"/> {event.node.frontmatter.location}</span>
                  <span className="time"> <i className="fal fa-clock"/> {moment(event.node.frontmatter.datestart).format("HH:mm")}</span>
                </div>
              </div>
            </div>
          </div>
          <div className='detail-wrapper'>
            <div className='detail-spacer' />
            <div className='detail-link'>
              <Link to={event.node.fields.slug}>
                Detail <i className="far fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </li>
      )}
      </ul>
      <Link className="goToAgenda" to="/agenda">See more events <i className="far fa-chevron-right"></i></Link>
    </section>
  );

}
export default ComingUpEvents
