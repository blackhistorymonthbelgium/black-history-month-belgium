import React from "react"
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { graphql, StaticQuery, Link } from 'gatsby'

class Sponsors extends React.Component {
  render(){
    const {data} = this.props
    const {edges : posts} = data.allMarkdownRemark
    return (
      <section className="sponsors">
        <div className="sponsors-wrapper">
          <div className="bePartner">
            <h1>Our Partners</h1>
            <ul className="column partners">
                {posts.map((post, key)=>
                  <li key={key}>
                    <a href={post.node.frontmatter.link}>
                    {post.node.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail" style={{width:`${post.node.frontmatter.width}px`}}>
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.node.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.node.frontmatter.title}`,
                          }}
                        />
                      </div>
                    ) : null}
                    </a>
                  </li>
                )}
            </ul>
            <a className="emailPartner" href="mailto:blackhistorymonth.belgium@gmail.com?subject=Become BHM Partner&body=Hello BHM! We'd like to be your partner...">
              Be our partner
            </a>
          </div>
        </div>
      </section>
    )
  }
}

Sponsors.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query PartnersRollQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "partners-post" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                templateKey
                link
                width
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Sponsors data={data} count={count} />}
  />
)
