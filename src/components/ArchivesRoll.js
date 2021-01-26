import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { getPostsInLanguage} from '../helpers'
import { PostLink } from './Links'

class ArchivesRoll extends React.Component {
  render() {
    const { data, language } = this.props
    const { edges: allPosts } = data.allMarkdownRemark
    const posts = getPostsInLanguage(allPosts, language);
    console.log(posts);

    return (
      <div className="columns is-one-third-widescreen archivesRoll">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="column" key={post.id}>
              <article
                className={`archivesRoll-article ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <div className="post-meta">
                  <PostLink className="title" post={post}>
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
                  </PostLink>
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

export default ({ language }) => (
  <StaticQuery
    query={graphql`
      query ArchivesRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___year] }
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
                language
                slug
                date(formatString: "MMMM DD, YYYY")
                year
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
    render={(data, count) => <ArchivesRoll language={language} data={data} count={count} />}
  />
)
