import React from "react"
import PreviewCompatibleImage from './PreviewCompatibleImage'
import moment from 'moment'
import { T } from '../internationalization';
import { PostLink, TagLink } from './Links';

const Highlights = (props) => {
  const{
    archives,
    events
  } = props;

  return(
    <section className="highlights container">
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
                  <PostLink post={(archive.node)}>
                    {T('readMore')} <i className="far fa-chevron-right"></i>
                  </PostLink>
              </div>

          ))}
          </div>
        </div>
        <div className="column column-event">
        {events.slice(0,1).map((event, key)=> (
          <div className="title-wrapper">
            <span className="tag-event"> <i className="fal fa-hashtag" />{event.node.frontmatter.tags.map(tag => (<TagLink key={tag} tag={tag}> {tag} </TagLink>))}</span>
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
            <h1><PostLink post={event.node}>{event.node.frontmatter.title} <i className="far fa-chevron-right"></i></PostLink> </h1>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
export default Highlights
