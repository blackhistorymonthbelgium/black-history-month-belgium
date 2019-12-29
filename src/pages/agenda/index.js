import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import Layout from '../../components/Layout'
import AgendaFilter from '../../components/AgendaFilter'
import AgendaRoll from '../../components/AgendaRoll'
import { Link, graphql, StaticQuery } from 'gatsby'


class AgendaIndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterDate: undefined,
      filterType: undefined,
      filterLocation: undefined
    };
  }

  handleFilterDateChanged = (e) => {
    this.setState({ filterDate: e.currentTarget.value });
  }

  handleFilterTypeChanged = (e) => {
    this.setState({ filterType: e.currentTarget.value });
  }

  handleFilterLocationChanged = (e) => {
    this.setState({ filterLocation: e.currentTarget.value });
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const { filterDate, filterType, filterLocation } = this.state;
    console.log(posts);
    const dates = [...new Set(posts.map(post => moment(post.node.frontmatter.datestart).format('DD/MM')))];
    dates.sort();

    return (
      <Layout>
        <section className="agenda">
          <h1 className="blogs-title">
            Agenda
          </h1>
          <div className="container">
            <div className="content">
              <AgendaFilter
                dates={dates}
                filterDate={filterDate}
                filterType={filterType}
                filterLocation={filterLocation}
                onFilterDateChanged={this.handleFilterDateChanged}
                onFilterTypeChanged={this.handleFilterTypeChanged}
                onFilterLocationChanged={this.handleFilterLocationChanged}
              />
              <AgendaRoll
                posts={posts}
              />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

AgendaIndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query AgendaRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "agenda-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                artists
                location
                tags
                datestart
                dateend
                featuredpost
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
    render={(data, count) => <AgendaIndexPage data={data} count={count} />}
  />
)
