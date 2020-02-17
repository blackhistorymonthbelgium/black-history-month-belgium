import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import {T} from '../internationalization'

export const AgendaPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  artists,
  location,
  datestart,
  dateend,
 }) => {
  const PostContent = contentComponent || Content
  const dateStart = moment(datestart).format("DD");
  const dateEnd = moment(dateend).format("DD");

  return (
    <section className="agenda">
      <h1>{title}</h1>
      {helmet || ''}

      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <p><b>{T('date')}: </b>{dateStart} {dateStart !== dateEnd ? `- ${dateEnd}/` : "/"}{moment(dateend).format("MM/YY")} </p>
            <p><b>{T('time')}: </b>{moment(datestart).format("HH:mm")}</p>
            <p><b>{T('location')}: </b> {location}</p>
            <p><b>{T('description')} : </b> {description}</p>
            <p><b>{T('artist')}: </b>{artists.map(artist => (artist))}</p>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

AgendaPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  artists: PropTypes.array,
  location: PropTypes.string,
}

const AgendaPost = (props) => {
  const { data } = props;
  const { markdownRemark: post } = data

  return (
    <Layout language={props.pageContext.language}>
      <AgendaPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={
        <Helmet titleTemplate="%s | Agenda">
          <title>{`${post.frontmatter.title}`}</title>
          <meta
            name="description"
            content={`${post.frontmatter.description}`}
          />
        </Helmet>
      }
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      artists={post.frontmatter.artists}
      location={post.frontmatter.location}
      datestart={post.frontmatter.datestart}
      dateend={post.frontmatter.dateend}
      />
    </Layout>
  )
}

AgendaPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default AgendaPost

export const pageQuery = graphql`
  query AgendaPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html

      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        artists
        location
        datestart
        dateend
      }
    }
  }
`
