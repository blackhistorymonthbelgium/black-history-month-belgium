import React from 'react'
import Layout from '../../components/Layout'
import PressRoll from '../../components/PressRoll'

export default class PressIndexPage extends React.Component {
  render() {
    const { language } = this.props.pageContext;
    return (
      <Layout language={language}>
        <section className="blogs">
          <h1 className="blogs-title">
            Press
          </h1>
          <div className="container press">
            <div className="content">
            <PressRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
