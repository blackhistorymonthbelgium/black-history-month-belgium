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
              <h2>VOOR POTENTIËLE PARTNERS</h2>
              <p>
              Black History Month Belgium streeft inclusie na door, vanuit een sterk gevormde en verankerde kern, samenwerkingen aan te gaan met partners in de culturele, educatieve en sociale sector voor het organiseren van onze evenementen. Via deze partnerschappen hebben we reeds bewezen samen te kunnen werken met partners uit het Vlaams gesubsidieerde cultuur, kunst en onderwijsveld (zie evenementen BHM) en een tal van organisaties uit het hele sociaal-demografische spectrum. Velden die nu nog steeds moeilijkheden ondervinden om onze doelgroep, via hun regulier aanbod, te bereiken.
              <br/>
              <br />
              Samenwerken met organisaties die de streefdoelen van BHM ten harte nemen, speelt een belangrijke rol in het uitbouwen en voortzetten van onze werking. Deze pagina vertegenwoordigt een kleine fractie van de vele organisaties die betrokken zijn bij Black History Month Belgium.
              <br/>
              <br />
              Als je interesse hebt om als organisatie Black History Month Belgium structureel te steunen of als je interesse hebt om als individu, collectief, zwarte organisatie of gemeenschapsorganisatie mee Black History Month inhoudelijk vorm te geven stuur dan een mail met onderstande knop.</p>
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
