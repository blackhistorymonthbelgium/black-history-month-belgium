import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ArchivesRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns archivesRoll">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="column" key={post.id}>
              <article
                className={`tile archivesRoll-article ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <div className="post-meta">
                  <Link
                    className="title"
                    to={post.fields.slug}
                  >
                    <header>
                      <h1>
                          {post.frontmatter.title} <i className="far fa-chevron-right"/>
                      </h1>
                      <span className="subtitle">
                        {post.frontmatter.year}
                      </span>
                    </header>
                    {post.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          }}
                        />
                      </div>
                    ) : null}
                  </Link>
                </div >
              </article>
            </div>
          ))}
      </div>
    )
  }
}

ArchivesRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ArchivesRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "archives-post" } } }
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
                date(formatString: "MMMM DD, YYYY")
                year
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
    render={(data, count) => <ArchivesRoll data={data} count={count} />}
  />
)
