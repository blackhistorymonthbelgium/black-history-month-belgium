import React from 'react'
import Layout from '../../components/Layout'

export default class PressIndexPage extends React.Component {
  render() {
    const { language } = this.props.pageContext;
    return (
      <Layout language={language}>
        <section className="press">
          <h1 className="press-title">
            Press
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
