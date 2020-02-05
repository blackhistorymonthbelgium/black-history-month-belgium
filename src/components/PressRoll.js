import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { getPostsInLanguage } from '../helpers'

class PressRoll extends React.Component {
  render() {
    const { data, language } = this.props
    const { edges: allPosts } = data.allMarkdownRemark
    const posts = getPostsInLanguage(allPosts, language);
    const yearSet = new Set();
    posts.forEach(({ node: post }) => yearSet.add(post.frontmatter.yearPress));
    const years = [...yearSet];
    years.sort().reverse();

    return (
      <div>
        <ul>
        {years.map(year =>
          <li key={year}>
            <p className="year"><i className="fal fa-newspaper"></i> {year}</p>
            <ul className="columns">
            {posts &&
              posts
                .filter(({ node: post }) => post.frontmatter.yearPress === year)
                .map(({ node: post }) => (
                  <li key={post.frontmatter.link}>
                    <a target="_blank" href={post.frontmatter.link}> <i className="fal fa-link"></i> {post.frontmatter.title}</a>
                  </li>
                ))
              }
            </ul>
          </li>
        )}
        </ul>
      </div>
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
          sort: { order: DESC, fields: [frontmatter___yearPress] }
          filter: { frontmatter: {
            templateKey: { eq: "press-post" }
          } }
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
                yearPress
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
