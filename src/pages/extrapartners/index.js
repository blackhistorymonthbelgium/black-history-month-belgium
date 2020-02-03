import React from 'react'
import Layout from '../../components/Layout'

export default class ExtraPartnersIndexPage extends React.Component {
  render() {
    const { language } = this.props.pageContext;
    return (
      <Layout language={language}>
        <section className="blogs">
          <h1 className="blogs-title">
            Partners
          </h1>
          <div className="container">
            <div className="content">
              <h2>VOOR POTENTIËLE PARTNERS</h2>
              <p>
                Black History Month Belgium streeft inclusie na door, vanuit een sterk gevormde en verankerde kern, samenwerkingen aan te gaan met partners in de culturele, educatieve en sociale sector voor het organiseren van onze evenementen. Via deze partnerschappen hebben we reeds bewezen samen te kunnen werken met partners uit het Vlaams gesubsidieerde cultuur, kunst en onderwijsveld (zie evenementen BHM) en een tal van organisaties uit het hele sociaal-demografische spectrum. Velden die nu nog steeds moeilijkheden ondervinden om onze doelgroep, via hun regulier aanbod, te bereiken.
                <br/>
                <br />
                Samenwerken met organisaties die de streefdoelen van BHM ten harte nemen, speelt een belangrijke rol in het uitbouwen en voortzetten van onze werking. Deze pagina vertegenwoordigt een kleine fractie van de vele organisaties die betrokken zijn bij Black History Month Belgium.
                <br/>
                <br />
                Als je interesse hebt om als organisatie Black History Month Belgium structureel te steunen of als je interesse hebt om als individu, collectief, zwarte organisatie of gemeenschapsorganisatie mee Black History Month inhoudelijk vorm te geven stuur dan een mail met onderstande knop.
              </p>
              <a className="emailPartner" href="mailto:blackhistorymonth.belgium@gmail.com?subject=Become BHM Partner&body=Hello BHM! We'd like to be your partner...">
                  Be our partner
              </a>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
