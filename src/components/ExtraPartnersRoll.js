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
    posts.forEach(({ node: post }) => yearSet.add(post.frontmatter.yearPartner));
    const years = [...yearSet];
    years.sort().reverse();

    return (
      <div className="partnersList">
        <ul>
        {years.map(year =>
          <li key={year}>
            <h1 className="blogs-title">{year}</h1>
            <ul>
            {posts &&
              posts
                .filter(({ node: post }) => post.frontmatter.yearPartner === year)
                .map(({ node: post }) => (
                  <li key={post.id}>
                    <a target="_blank" href={post.frontmatter.link}> &#8226; {post.frontmatter.title}</a>
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
          sort: { order: ASC, fields: [frontmatter___title] }
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
                yearPartner
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
