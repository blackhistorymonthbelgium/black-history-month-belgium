import React from 'react'
import Layout from '../../components/Layout'
import {T, setCurrentLanguage} from '../../internationalization'
import ExtraPartnersRoll from '../../components/ExtraPartnersRoll'

export default class ExtraPartnersIndexPage extends React.Component {
  render() {
    const { language } = this.props.pageContext;
    setCurrentLanguage(language); // for some reason the setCurrentLanguage in Layout is not enough
    return (
      <Layout language={language}>
        <section className="blogs">
          <h1 className="blogs-title">{T("extraPartnersTitle")}</h1>
          <div className="container">
            <div className="content extrapartners">
              <p dangerouslySetInnerHTML={{__html:T("extraPartnersText")}}>
              </p>
              <a className="emailPartner" href="mailto:info@blackhistorymonth.be?subject=Become BHM Partner&body=Hello BHM! We'd like to be your partner...">
                  {T("beOurPartner")}
              </a>
              <br/>
              <br/>
              <ExtraPartnersRoll />
              <br/>
              <br/>
              <a className="emailPartner" target="_blank" href="https://ko-fi.com/bhmbelgium">
                  {T("extraPartnersDonateButton")}
              </a>
              <br/>
              <p dangerouslySetInnerHTML={{__html:T("extraPartnersDonateText")}}>
              </p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
