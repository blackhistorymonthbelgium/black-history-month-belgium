import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Highlights from '../components/Highlights'
import ComingUpEvents from '../components/ComingUpEvents'
import News from '../components/News'
import Sponsors from '../components/Sponsors'

export const IndexPageTemplate = ({
  language,
  events,
  archives,
  blogs,
}) => (
  <>
    <Highlights archives={archives} events={events}/>
    <ComingUpEvents events={events} language={language} />
    <News blogs={blogs}/>
    <Sponsors />
  </>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data, pageContext }) => {
  const events = data
    .allMarkdownRemark
    .edges
    .filter(post => post.node.frontmatter.templateKey === 'agenda-post'&& post.node.frontmatter.language === pageContext.language);
  const archives = data
    .allMarkdownRemark
    .edges
    .filter(post => post.node.frontmatter.templateKey === 'archives-post' && post.node.frontmatter.language === pageContext.language);
  const blogs = data
    .allMarkdownRemark
    .edges
    .filter(post => post.node.frontmatter.templateKey === 'blog-post' && post.node.frontmatter.language === pageContext.language);

  return (
    <Layout language={pageContext.language}>
      <IndexPageTemplate
        events={events}
        archives={archives}
        blogs={blogs}
        language={pageContext.language}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___datestart] }
      filter: { frontmatter: {
        featuredpost: { eq: true}
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
            language
            slug
            date
            templateKey
            location
            datestart
            dateend
            featuredpost
            artists
            tags
            bannerimage {
              childImageSharp {
                fluid(maxWidth: 1680, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 960, quality: 100) {
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
