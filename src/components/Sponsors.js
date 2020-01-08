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
          <div className="columns is-half-desktop is-full-tablet is-full-mobile ">
            <div className="column bePartner">
              <h1>Our Partners</h1>
              <h2>LOREM IPSUM GENERATOR</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="mailto:blackhistorymonth.belgium@gmail.com?subject=Become BHM Partner&body=Hello BHM! We'd like to be your partner...">
                  Be our partner
                </a>
            </div>
            <ul className="column partners">
              {posts.map((post, key)=>
                <li key={key}>
                  <Link to={post.node.frontmatter.link}>
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
                  </Link>
                </li>
              )}
            </ul>
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
