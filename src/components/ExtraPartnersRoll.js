import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { getPostsInLanguage, createPagePath } from '../helpers'

class ExtraPartnersRoll extends React.Component {
  render() {
    const { data, language } = this.props
    const { edges: allPosts } = data.allMarkdownRemark
    const posts = getPostsInLanguage(allPosts, language);
    const yearSet = new Set();
    posts.forEach(({ node: post }) => yearSet.add(post.frontmatter.year));
    const years = [...yearSet];
    years.sort().reverse();

    return (
      <div>
        <ul>
        {years.map(year =>
          <li key={year}>
            <p className="year"><i class="fal fa-newspaper"></i> {year}</p>
            <ul className="columns">
            {posts &&
              posts
                .filter(({ node: post }) => post.frontmatter.year === year)
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

ExtraPartnersRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default ({ language }) => (
  <StaticQuery
    query={graphql`
      query ExtraPartnersRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___year] }
          filter: { frontmatter: {
            templateKey: { eq: "extraPartners-post" }
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
                year
                slug
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ExtraPartnersRoll language={language} data={data} count={count} />}
  />
)
