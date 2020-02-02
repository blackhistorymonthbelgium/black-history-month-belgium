import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { getPostsInLanguage, createPagePath } from '../helpers'

class PressRoll extends React.Component {
  render() {
    const { data, language } = this.props
    const { edges: allPosts } = data.allMarkdownRemark
    const posts = getPostsInLanguage(allPosts, language);

    return (
      <ul className="columns">
        {posts &&
          posts.map(({ node: post }) => (
            <li>
              <a target="_blank" href={post.frontmatter.link}><i className="fal fa-link"></i>{post.frontmatter.title}</a>
            </li>
          ))}
      </ul>
    )
  }
}

PressRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default ({ language }) => (
  <StaticQuery
    query={graphql`
      query PressRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "press-post" } } }
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
                link
                slug
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PressRoll language={language} data={data} count={count} />}
  />
)
