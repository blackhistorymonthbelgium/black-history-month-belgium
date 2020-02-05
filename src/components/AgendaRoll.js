import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { PostLink, TagLink } from './Links'

export default class AgendaRoll extends React.Component {

  render() {
    const { posts } = this.props
    return (
        <ul className=" columns agendaRoll agenda-results">
        {posts &&
          posts.map(({ node: post }) => (
            <li key={post.id} className={`column is-one-third ${post.frontmatter.featuredpost ? 'is-featured' : ''}`}>
              <div className="event-wrapper-outside">
                <div className="event-wrapper">
                  <div className="event-wrapper-insider">
                    <time>
                      <span className="date-event">{moment(post.frontmatter.datestart).format("DD")}</span>
                      <span className="month-event">{moment(post.frontmatter.datestart).format("MMM")}</span>
                    </time>
                    <div className="performancer">
                      <h1><PostLink post={post}>{post.frontmatter.title}</PostLink></h1>
                      <p>{post.frontmatter.artists.join(", ")}
                      </p>
                    </div>
                    <div className="event-detail">
                    {post.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail" style={{width: 180}}>
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          }}
                        />
                      </div>
                    ) : null}

                      <div className="detail">
                        <span className="tag-event"> <i className="fal fa-hashtag" />{post.frontmatter.tags.map(tag => (<TagLink key={tag} tag={tag}> {tag} </TagLink>))}</span>
                        <span className="location"><i className="fal fa-map-marker-alt"/> {post.frontmatter.location}</span>
                        <span className="time"> <i className="fal fa-clock"/> {moment(post.frontmatter.datestart).format("HH:mm")}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='detail-wrapper'>
                  <div className='detail-spacer' />
                  <div className='detail-link'>
                    <PostLink post={post}>
                      Detail <i className="far fa-chevron-right"></i>
                    </PostLink>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    )
  }
}

AgendaRoll.propTypes = {
  posts: PropTypes.array,
}
