import React from 'react'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    const { language } = this.props.pageContext;
    return (
      <Layout language={language}>
        <section className="blogs">
          <h1 className="blogs-title">
            Blogs
          </h1>
          <div className="container">
            <div className="content">
              <BlogRoll language={language} />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
