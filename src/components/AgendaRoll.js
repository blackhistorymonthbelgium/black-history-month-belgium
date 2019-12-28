import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { kebabCase } from 'lodash'

class AgendaRoll extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    console.log(posts)
    return (
        <ul className=" columns agendaRoll agenda-results">
        {posts &&
          posts.map(({ node: post }) => (
            <li key={post.id} className={`column ${post.frontmatter.featuredpost ? 'is-featured' : ''}`}>

              <div className="event-wrapper">
                <div className="event-wrapper-insider">
                  <time>
                    <span className="date-event">{post.frontmatter.year}</span>
                    <span className="month-event">{post.frontmatter.year}</span>
                  </time>
                  <div className="performancer">
                    <h1>{post.frontmatter.title}</h1>
                    <p>{post.frontmatter.artists.map(artist => (
                      <Link key={artist} to={`/artists/${kebabCase(artist)}/`}>{artist} </Link>))}
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
                      <span className="tag-event"> <i className="fal fa-hashtag" />{post.frontmatter.tags.map(tag => (<Link key={tag} to={`/tags/${kebabCase(tag)}/`}> {tag} </Link>))}</span>
                      <span className="location"><i className="fal fa-map-marker-alt"/> {post.frontmatter.location}</span>
                      <span className="time"> <i className="fal fa-clock"/> 18:00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='detail-wrapper'>
                <div className='detail-spacer' />
                <div className='detail-link'>
                  <Link to={post.fields.slug}>
                    Detail <i className="far fa-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </li>
          ))}
      </ul>
    )
  }
}

AgendaRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query AgendaRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "agenda-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                artists
                date(formatString: "MMMM DD, YYYY")
                year
                location
                tags
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <AgendaRoll data={data} count={count} />}
  />
)
