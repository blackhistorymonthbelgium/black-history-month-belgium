import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import AgendaFilter from '../components/AgendaFilter'
import AgendaRoll from '../components/AgendaRoll'
import {graphql, StaticQuery } from 'gatsby'
import { getPostsInLanguage } from '../helpers'

class AgendaIndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterDate: 'any',
      filterType: 'any',
      filterLocation: 'any'
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
    const { data, pageContext } = this.props;
    const { language } = pageContext;
    const { edges: allPosts } = data.allMarkdownRemark;
    const { filterDate, filterType, filterLocation } = this.state;
    const posts = getPostsInLanguage(allPosts, language);
    const filteredPosts = posts.filter(post => {
      return (filterType === 'any' || post.node.frontmatter.tags.includes(filterType))
        && (filterDate === 'any' || moment(post.node.frontmatter.datestart).format('DD/MM') === filterDate)
        && (filterLocation === 'any' || post.node.frontmatter.location === filterLocation);
    });
    const dates = [...new Set(posts.map(post => moment(post.node.frontmatter.datestart).format('DD/MM')))];
    dates.sort();
    const tagArray = [];
    posts.forEach(post => {
      post.node.frontmatter.tags.forEach(tag => tagArray.push(tag));
    });
    const types = [...new Set(tagArray)];
    types.sort();
    const locations = [...new Set(posts.map(post => post.node.frontmatter.location))];
    locations.sort();
    return (
      <Layout language={language}>
        <section className="agenda">
          <h1 className="blogs-title">
            Agenda
          </h1>
          <div className="container">
            <div className="content">
              <AgendaFilter
                dates={dates}
                types={types}
                locations={locations}
                filterDate={filterDate}
                filterType={filterType}
                filterLocation={filterLocation}
                onFilterDateChanged={this.handleFilterDateChanged}
                onFilterTypeChanged={this.handleFilterTypeChanged}
                onFilterLocationChanged={this.handleFilterLocationChanged}
              />
              <AgendaRoll
                posts={filteredPosts}
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

export default ({ pageContext }) => (
  <StaticQuery
    query={graphql`
      query AgendaRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___datestart] }
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
                language
                slug
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
    render={(data, count) => <AgendaIndexPage data={data} count={count} pageContext={pageContext} />}
  />
)
