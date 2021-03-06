import React from 'react'
import Layout from '../../components/Layout'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
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
    allMarkdownRemark(
      limit: 1000
      sort: { order: DESC, fields: [frontmatter___title]}
    ) {
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
