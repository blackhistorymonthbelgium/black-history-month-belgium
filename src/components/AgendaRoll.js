import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { PostLink, TagLink } from './Links'

export default class AgendaRoll extends React.Component {

  render() {
    const { posts } = this.props
    return (
        <ul className=" columns agendaRoll agenda-results">
        {posts &&
          posts.map(({ node: post }) => (
            <li key={post.id} className={`column is-one-third ${post.frontmatter.featuredpost ? 'is-featured' : ''} ${post.frontmatter.tags ? post.frontmatter.tags.map(tag => "tag-" + tag).join(" ") : ''}`}>
              <div className="event-wrapper-outside">
                <div className={`event-wrapper`}>
                  <div className="event-wrapper-insider">
                    <time>
                      <span className="date-event">{moment(post.frontmatter.datestart).format("DD")}</span>
                      <span className={`month-event`}>{moment(post.frontmatter.datestart).format("MMM")}</span>
                    </time>
                    <div className="performancer">
                      <div className="headerlines"><PostLink post={post}>{post.frontmatter.title}</PostLink></div>
                      <div className="event-detail">
                        <div className="detail">
                          <span className="hostname">{post.frontmatter.artists.join(", ")}</span>
                          <span className={`tag-event`}> <i className="fal fa-hashtag" />{post.frontmatter.tags.map(tag => (<TagLink className="tag" key={tag} tag={tag}> {tag} </TagLink>))}</span>
                          <div className='highlightloc'>
                            <span className="location"><i className="fal fa-map-marker-alt"/> {post.frontmatter.location}</span>
                            <span className="time texttag-game"> <i className="fal fa-clock"/> {moment(post.frontmatter.datestart).format("HH:mm")}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='detail-wrapper'>
                  <div className='detail-spacer' />
                  <div className='detail-link'>
                    <PostLink post={post} className="detail-link">
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
