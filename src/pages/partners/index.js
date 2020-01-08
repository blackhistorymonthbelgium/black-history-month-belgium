import React from 'react'
import Layout from '../../components/Layout'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

const PartnersIndexPage = ({
  data: {
    site: {
      siteMetadata: { title },
    },
    allMarkdownRemark: {
      edges
    }
  },
  pageContext
}) => {
  console.log(edges);
  return <Layout language={pageContext.language}>
    <section className="Partners">
      <Helmet title={`Partners | ${title}`} />
      <h1 className="title">
        Our Partners
      </h1>
      {edges.map((edge, index) => <p key={index}>{edge.node.frontmatter.title}</p>)}
    </section>
  </Layout>
}

export default PartnersIndexPage

export const partnerPageQuery = graphql`
  query ParnersQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          frontmatter {
            title
            link
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
`
