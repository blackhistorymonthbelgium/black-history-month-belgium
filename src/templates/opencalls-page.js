import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import {T} from '../internationalization'

export const OpencallsPageTemplate = ({ title, content, contentComponent }) => {

  return (
    <section className="about">
      <div className="about-wrapper">
        <header>
          <h1 className="title">
            Open Calls
          </h1>
        </header>
        <section className="openCalls">
          <div className="openCalls-wrapper">
            <div className="openCallsBe">
              <h1 className="openCallsTitle">Freestyle Contemporary Workshop</h1>
              <div className="openCallsText">
                We are organizing a trajectory in Opera Ballet Vlaanderen for two groups of young dance lovers from the entourage of BHMB. The workshops link up with the dance performance Noétic / Le Sacre du printemps. Some choreographic elements and themes will be touched upon and there will be a show moment for friends and family of the participants.
              </div>
              <a className="linkOpenCalls" href="https://www.eventbrite.be/e/workshops-freestyle-contemporary-tickets-258517872917">
                Register Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

OpencallsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const OpencallsPage = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  const { language } = pageContext;

  return (
    <Layout language={language}>
      <OpencallsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

OpencallsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default OpencallsPage
export const opencallsPageQuery = graphql`
  query OpencallsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
