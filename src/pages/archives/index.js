import React from 'react'
import Layout from '../../components/Layout'
import ArchivesRoll from '../../components/ArchivesRoll'


export default class ArchivesIndexPage extends React.Component {
  render() {
    const { language } = this.props.pageContext;
    return (
      <Layout language={language}>
        <section className="blogs">
          <h1 className="blogs-title">
            Archives
          </h1>
          <div className="container">
            <div className="content">
              <ArchivesRoll language={language} />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
