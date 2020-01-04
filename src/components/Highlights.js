import React from "react"
import { Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { kebabCase } from 'lodash'
import moment from 'moment'

const Highlights = (props) => {
  const{
    archives,
    events
  } = props;

  return(
    <section className="highlights">
      <div className="columns is-half-desktop is-full-mobile">
        <div className="column column-poster">
          <div className="poster">
            {archives.map((archive, key)=> (
              <div key={key} className="event-detail">
              {archive.node.frontmatter.featuredimage ? (
                <div className="featured-thumbnail img-inside">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: archive.node.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${archive.node.frontmatter.title}`,
                    }}
                  />
                </div>
              ) : null}
                  <Link to={archive.node.fields.slug}>
                  Read more <i className="far fa-chevron-right"></i>
                  </Link>
              </div>

          ))}
          </div>
        </div>
        <div className="column column-event">
        {events.slice(0,1).map((event, key)=> (
          <div className="title-wrapper">
            <span className="tag-event"> <i className="fal fa-hashtag" />{event.node.frontmatter.tags.map(tag => (<Link key={tag} to={`/tags/${kebabCase(tag)}/`}> {tag} </Link>))}</span>
            <div className="special-event">
              <time>
                <span className="date-event">{moment(event.node.frontmatter.datestart).format("DD")}</span>
                <span className="month-event">{moment(event.node.frontmatter.datestart).format("MMM")}</span>
              </time>
            </div>
            {event.node.frontmatter.featuredimage ? (
              <div className="featured-thumbnail">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: event.node.frontmatter.featuredimage,
                    alt: `featured image thumbnail for post ${event.node.frontmatter.title}`,
                  }}
                />
              </div>
            ) : null}
            <h1><Link to={event.node.fields.slug}>{event.node.frontmatter.title} <i className="far fa-chevron-right"></i></Link> </h1>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
export default Highlights
