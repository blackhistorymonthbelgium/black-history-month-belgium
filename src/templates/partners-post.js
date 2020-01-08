import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const PartnersPostTemplate = ({
  title,
  link,
  contentComponent
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section partners-post">
      <h1>{title}</h1>
    </section>
  )
}

PartnersPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  link: PropTypes.string,
}

const PartnersPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data

  return (
    <Layout language={pageContext.language}>
      <PartnersPostTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        helmet={
          <Helmet titleTemplate="%s | Archives">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.title}`}
            />
          </Helmet>
        }
        name={post.frontmatter.title}
        link={post.frontmatter.link}
      />
    </Layout>
  )
}

PartnersPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default PartnersPost

export const pageQuery = graphql`
  query PartnersPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html

      frontmatter {
        title
        link
      }
    }
  }
`
