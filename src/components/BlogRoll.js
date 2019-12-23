import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns blogRoll">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="column" key={post.id}>
              <article
                className={`tile blogRoll-article ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >

                <div className="post-meta">
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
                  <header>
                    <h1>
                      <Link
                        className="title"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                    </h1>

                  </header>
                </div >
                <p>
                  <span className="subtitle">
                    {post.frontmatter.date}
                  </span>

                  <br />
                  {post.excerpt}
                  <br />
                  <Link className="keepReading" to={post.fields.slug}>
                     Keep Reading <i className="far fa-chevron-right"/>
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 250)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
