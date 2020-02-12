import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { getPostsInLanguage } from '../helpers'
import { PostLink } from './Links'

class BlogRoll extends React.Component {
  render() {
    const { data, language } = this.props
    const { edges: allPosts } = data.allMarkdownRemark
    const posts = getPostsInLanguage(allPosts, language);

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
                      <PostLink className="title" post={post}>
                        {post.frontmatter.title}
                      </PostLink>
                    </h1>

                  </header>
                </div >
                <span className="extra-info">
                  {post.frontmatter.date}
                </span>
                <span className="extra-info">
                  Written by: {post.frontmatter.author}
                </span>
                <p>
                  {post.excerpt}
                  <br />
                  <PostLink className="keepReading" post={post}>
                     Keep Reading <i className="far fa-chevron-right"/>
                  </PostLink>
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

export default ({ language }) => (
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
                language
                author
                slug
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 480, quality: 100) {
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
    render={(data, count) => <BlogRoll language={language} data={data} count={count} />}
  />
)
