import React from 'react'
import Layout from '../../components/Layout'

export default class ExtraPartnersIndexPage extends React.Component {
  render() {
    const { language } = this.props.pageContext;
    return (
      <Layout language={language}>
        <section className="blogs">
          <h1 className="blogs-title">
            Our Partners
          </h1>
          <div className="container">
            <div className="content">

            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
