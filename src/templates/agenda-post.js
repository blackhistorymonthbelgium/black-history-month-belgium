import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { LocalizedLink, TagLink } from '../components/Links'

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

  return (
    <section className="agenda">
      <h1>{title}</h1>
      {helmet || ''}

      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <p><b>Date: </b>{moment(datestart).format("MM-DD-YYYY")}</p>
            <p><b>Time: </b>{moment(datestart).format("HH:mm")}</p>
            <p><b>Location: </b> {location}</p>
            <p><b>Description : </b> {description}</p>
            <p><b>Guests: </b>{artists.map(artist => (
              <LocalizedLink key={artist} to={`/artists/${kebabCase(artist)}/`}>{artist} </LocalizedLink>))}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>{tag}</li>
                  ))}
                </ul>
              </div>
            ) : null}
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
