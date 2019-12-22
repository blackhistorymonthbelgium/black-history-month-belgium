import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import AgendaFilter from '../components/AgendaFilter'
import AgendaResults from '../components/AgendaResults'
import Content, { HTMLContent } from '../components/Content'

export const AgendaPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="agenda">
      <h1>{title}</h1>
      <AgendaFilter />
      <AgendaResults />
      <PageContent className="content" content={content} />
    </section>
  )
}

AgendaPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AgendaPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AgendaPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AgendaPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AgendaPage

export const agendaPageQuery = graphql`
  query AgendaPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
