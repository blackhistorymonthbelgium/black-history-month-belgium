import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { TagLink } from '../components/Links'

export const ArchivesPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  year,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section archives-post">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p><b>Thema :</b> {description}</p>
            <p><b>Year:</b> {year}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <TagLink tag={tag}>{tag}</TagLink>
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

ArchivesPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  year: PropTypes.string,
}

const ArchivesPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data;
  const { language } = pageContext;

  return (
    <Layout language={language}>
      <ArchivesPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Archives">
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
      />
    </Layout>
  )
}

ArchivesPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ArchivesPost

export const pageQuery = graphql`
  query ArchivesPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html

      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        year
      }
    }
  }
`
