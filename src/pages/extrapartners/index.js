import React from 'react'
import Layout from '../../components/Layout'

export default class ExtraPartnersIndexPage extends React.Component {
  render() {
    const { language } = this.props.pageContext;
    return (
      <Layout language={language}>
        <section className="blogs">
          <h1 className="blogs-title">
            VOOR POTENTIËLE PARTNERS
          </h1>
          <div className="container">
            <div className="content extrapartners">
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
              <br/>
              <br/>
              <div className="partnersList">
                <h1 className="blogs-title">2020</h1>
                <div>
                  &#8226; AfroYoga
                  &#8226; Arenberg
                  &#8226; ASCOM
                  &#8226; AYO
                  &#8226; BIB Schaerbeek
                  &#8226; BINABI
                  &#8226; Cc Berchem
                  &#8226; City Pirates
                  &#8226; De Cinema
                  &#8226; De Roma
                  &#8226; FAQ(For All Queens)
                  &#8226; FoMu?
                  &#8226; Karibu
                  &#8226; Kolamela
                  &#8226; KULeuven
                  &#8226; Mama's Open Mic
                  &#8226; Middelheim Museum
                  &#8226; Rataplan?
                  &#8226; Recognition
                  &#8226; Rwanda enz meer
                  &#8226; Shakuma Fitness
                  &#8226; MAS
                  &#8226; UA
                  &#8226; UMOJA
                  &#8226; Undivided KUL
                  &#8226; Urban Woorden
                  &#8226; VUB-Crosstalks
                  &#8226; VUB-RHEA
                  &#8226; Kapow vzw
                  &#8226; Voem vzw
                  &#8226; EVA vzw
                </div>
              </div>
              <div className="partnersList">
                <h1 className="blogs-title">2019</h1>
                <div>
                  &#8226; FOMU: Foto Museum
                  &#8226; DE ROMA
                  &#8226; ARENBERG
                  &#8226; KDG SINT-LUCAS
                  &#8226; FAMEUS
                  &#8226; CC BERCHEM
                  &#8226; CINEMA ZUID
                  &#8226; BIBLIOTHEEK SCHAARBEEK
                  &#8226; KONINKLIJKE ACADEMIE VOOR SCHONE KUNSTEN
                  &#8226; CAFé au LAIT
                  &#8226; DE STUDIO
                  &#8226; MAMA’S OPEN MIC
                  &#8226; Het PALEIS
                  &#8226; Het Bos
                  &#8226; Permeke
                  &#8226; Bibliotheek Vilvoorde
                  &#8226; Kolamela
                  &#8226; Waka Waka Generation
                  &#8226; CONGO Travel DRc
                </div>
              </div>
              <div className="partnersList">
                <h1 className="blogs-title">2018</h1>
                <div>
                  &#8226; MAS
                  &#8226; Universiteit van Antwerpen Departement geschiedenis
                  &#8226; Universiteit van Antwerpen Cultuur
                  &#8226; AYO
                  &#8226; KDG STUVO
                  &#8226; KDG A-RAAD
                  &#8226; DE ROMA
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
