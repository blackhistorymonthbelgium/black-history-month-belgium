import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import {T} from '../internationalization'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {

  return (
    <section className="about">
      <div className="about-wrapper">
        <header>
          <h1 className="title">
            {T("about")}
          </h1>
        </header>
        <div>
          <h2>{T("whatIsBHMtitle")}</h2>
          <p dangerouslySetInnerHTML={{__html:T("whatIsBHMtext")}}></p>
          <br/>
          <h2>{T("purposeBHM")}</h2>
          <ul>
            <li><i className="fal fa-bullseye-arrow"></i> {T("purposeBHMText1")}</li>
            <li><i className="fal fa-bullseye-arrow"></i> {T("purposeBHMText2")}</li>
            <li><i className="fal fa-bullseye-arrow"></i> {T("purposeBHMText3")}</li>
            <li><i className="fal fa-bullseye-arrow"></i> {T("purposeBHMText4")}</li>
            <li><i className="fal fa-bullseye-arrow"></i> {T("purposeBHMText5")}</li>
            <li><i className="fal fa-bullseye-arrow"></i> {T("purposeBHMText6")}</li>
            <li><i className="fal fa-bullseye-arrow"></i> {T("purposeBHMText7")}</li>
            <li><i className="fal fa-bullseye-arrow"></i> {T("purposeBHMText8")}</li>
            <li><i className="fal fa-bullseye-arrow"></i> {T("purposeBHMText9")}</li>
          </ul>
          <br/>
          <h2>{T("team")}</h2>
          <p dangerouslySetInnerHTML={{__html:T("teamText")}}></p>
          <br/>

          <h2>{T("memberTitle")}</h2>
          <p>{T("memberName1")}: <span>Aminata Ndow & Mohamed Barrie</span></p>
          <p>{T("memberName2")}: <span>Jonelle Luzolele Nkakala</span></p>
          <p>{T("memberName3")}: <span>Jelaime Mayamba</span></p>
          <p>{T("memberName4")}: <span>Rachel Hansoul</span></p>
          <p>{T("memberName5")}: <span>Ama Kissi</span></p>
          <p>{T("memberName6")}: <span>Laura Ganza</span></p>
          <p>{T("memberName7")}: <span>Eyram Amavi</span></p>
          <p>{T("memberName8")}: <span>Rachel Hansoul & Stella Nyanchama</span></p>
          <br/>
          <p>{T("memberText")}</p>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  const { language } = pageContext;

  return (
    <Layout language={language}>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
