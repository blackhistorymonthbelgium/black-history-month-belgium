import React from 'react'
import Layout from '../../components/Layout'
import ArchivesRoll from '../../components/ArchivesRoll'


export default class ArchivesIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="blogs">
          <h1 className="blogs-title">
            Archives
          </h1>
          <div className="container">
            <div className="content">
              <ArchivesRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
