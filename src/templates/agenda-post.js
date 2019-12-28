import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AgendaPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  year,
  artists,
  location
 }) => {
  const PostContent = contentComponent || Content

  return (
    <section className="agenda">
      <h1>{title}</h1>
      {helmet || ''}

      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p><b>Thema :</b> {description}</p>
            <p><b>Year:</b> {year}</p>
            <p><b>Location:</b> {location}</p>
            <p><b>Artists:</b>{artists.map(artist => (
              <Link key={artist} to={`/artists/${kebabCase(artist)}/`}>{artist} </Link>))}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
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
  year: PropTypes.string,
  artists: PropTypes.array,
  location: PropTypes.string,
}

const AgendaPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
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
      year={post.frontmatter.year}
      artists={post.frontmatter.artists}
      location={post.frontmatter.location}
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
        year
        artists
        location
      }
    }
  }
`
