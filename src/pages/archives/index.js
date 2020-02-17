import React from 'react'
import Layout from '../../components/Layout'
import ArchivesRoll from '../../components/ArchivesRoll'
import {T, setCurrentLanguage} from '../../internationalization'


export default class ArchivesIndexPage extends React.Component {
  render() {
    const { language } = this.props.pageContext;
    setCurrentLanguage(language); // for some reason the setCurrentLanguage in Layout is not enough
    return (
      <Layout language={language}>
        <section className="blogs">
          <h1 className="blogs-title">
            {T("archives")}
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
