import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { TagLink } from '../components/Links'
import { createPagePath } from '../helpers'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  date,
  author,
  path,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  const url = `https://blackhistorymonth.be${path}`;
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  return (
    <section className="section blog-post">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column">
            <h1 className="title">
              {title}
            </h1>
            <p>Written by: {author}</p>
            <p>{date}</p>
            <div className="fb-share-button" data-href={url} data-layout="button_count" data-size="small"><a target="_blank" href={shareUrl} className="fb-xfbml-parse-ignore">Share on FB</a></div>
            <p>{description}</p>
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

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  helmet: PropTypes.object,
  path: PropTypes.string
}

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  const { language } = pageContext;
  const path = createPagePath(post, language);

  return (
    <Layout language={language}>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        author={post.frontmatter.author}
        date={post.frontmatter.date}
        path={path}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        author
        description
        tags
      }
    }
  }
`
