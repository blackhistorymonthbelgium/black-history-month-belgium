import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import {T} from '../internationalization'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="about">
      <div className="about-wrapper">
        <header>
          <h1 className="title">
            About BHM
          </h1>
        </header>
        <div>
          <h2>{T("whatIsBHMtitle")}</h2>
          <p dangerouslySetInnerHTML={{__html:T("whatIsBHMtext")}}></p>
          <br/>
          <h2>{T("purposeBHM")}</h2>
          <ul>
            <li><i className="fal fa-bullseye-arrow"></i> De participatie, het besef en de zichtbaarheid van Black History Month vergroten en verankeren in de zwarte gemeenschap (Black History Month aantrekkelijk maken voor vrijwilligers) </li>
            <li><i className="fal fa-bullseye-arrow"></i> Nationale en internationale netwerken vormen</li>
            <li><i className="fal fa-bullseye-arrow"></i> Documenteren en gegevens verzamelen over de zwarte gemeenschap in België</li>
            <li><i className="fal fa-bullseye-arrow"></i> Inbedding/nabijheid creëren in de gemeenschap</li>
            <li><i className="fal fa-bullseye-arrow"></i> Mensen uit de gemeenschap empoweren, dit wil zeggen, ze in staat stellen om creatief en inventief te zijn en hen helpen om hun potentieel te ontwikkelen, binnen een institutioneel kader te werken en groepsbeslissingen te nemen.</li>
            <li><i className="fal fa-bullseye-arrow"></i> Duurzaam engagement bewerkstelligen</li>
            <li><i className="fal fa-bullseye-arrow"></i> Bewustzijn bevonden onder de zwarte gemeenschap van hun sociaal, economisch en politiek potentieel.</li>
            <li><i className="fal fa-bullseye-arrow"></i> Het vergroten of coördineren van mogelijkheden voor leden van de zwarte gemeenschap om met dienstverleners samen te werken en om deze aanbieders in staat te stellen diensten aan te passen om beter tegemoet te komen aan de behoeften van de gemeenschap.</li>
            <li><i className="fal fa-bullseye-arrow"></i> Een professioneel maar toch toegankelijke werking creëren</li>
          </ul>
          <br/>
          <h2>{T("team")}</h2>
          <p>
          Black History Month is gestart vanuit de studentenvereniging <span>AYO (African Youth Organization)</span> in Antwerpen, waar in 2017 Aminata Ndow en Mohamed Barrie vanuit hun bestuursfuncties het concept van Black History Month wilden introduceren in België. Richting de tweede editie van BHM is er besloten om de algemene coördinatie van BHM los te koppelen van AYO, om de verder groei te bevorderen. Sinds 2019 maakt BHM deel uit van O.S.U. vzw.
          <br/>
          <br/>
          <span>O.S.U. (Our Stories Uncensored)</span> is een nieuwe vzw die gevormd is door Antwerpse jongeren met Afrikaanse roots, met jarenlange ervaring in jeugd- cultuur- en sportwerkingen. Momenteel zet de vzw zich in op het organiseren van evenementen (African Royal Ball & Kroeshaar festival) en langlopende projecten (Shoot For Dreams & Black History Month). Deze zijn bedoeld om de eigenwaarde, het zelfbewustzijn en de zichtbaarheid te vergroten van mensen die deel uitmaken van de Afrikaanse diaspora en zoals in het geval van Shoot For Dreams, meisjes die participatiedrempels ondervinden wegens hun sociaal-economische positie. Via deze wegen trachten we kansen voor bepaalde groepen om deel te nemen aan de samenleving te vergroten en sociale solidariteit, sociale mobiliteit en zelfredzaamheid te bevorderen.
          <br/>
          <br/>
          Vanuit de noodzaak die er was om vanuit een geworteld grassroots-project naar een structuur te gaan die duurzaam is, is een dynamische kerngroep ontstaan die via opgedane ervaringen en vormingen het project draagt. Uit persoonlijke ervaringen, rapporten en wetenschappelijk onderzoek is vastgesteld dat mensen met Afrikaanse roots in Vlaanderen ongeacht hun opleidingsniveau nog altijd tegen hoge drempels botsen inzake participatie, racisme, ongelijke loopbaanperspectieven, mismatch diploma en huidig beroep etc… (cf. Onderzoek KBS 2019, FOD Werkgelegenheid 2019). Daarom willen we zelf ruimtes creëren waar vrijwilligers a.d.h.v. hun engagement tot het project hun competenties kunnen versterken en hun netwerk kunnen uitbreiden. De kerngroep en de vrijwilligers zullen op deze manier intens betrokken zijn om de doelstellingen van het project (die dynamisch zijn) steeds te (her)definiëren en uit te dragen.
          <br/>
          <br/>
          Na de tweede editie van BHM Antwerp met 28 events, happenings en tentoonstellingen in voornamelijk Antwerpen, Vilvoorde en Schaerbeek was het tijd om de ambitie om van BHM een nationale viering te maken kenbaar te maken met de aankondiging van Black History Month Belgium. In 2020 zijn we trots om te zeggen dat er in <span>Antwerpen, Gent, Brussel, Schaerbeek, Vilvoorde, Mechelen en Limburg</span> door samenwerkingen met partners, lokale teams en vrijwilligers de eerste grote stap is gezet om van BHM Belgium een people's history te maken.
          <br/>
          <br/>
          Momenteels bestaat het Black History Month Belgium team uit een nationale kerngroep versterkt met lokale teams in Antwerpen, Brussel en Gent. Onze ambitie is om te groeien naar een horizontale bottom up werkingen met linken in zoveel mogelijk steden in België.
          </p>
          <br/>

          <h2>Onze nationale kerngroep bestaat uit:</h2>
          <p>Algemene coördinatie: <span>Aminata Ndow & Mohamed Barrie</span></p>
          <p>PR & Communicatie: <span>Jonelle Luzolele</span></p>
          <p>Social media en content creator: <span>Jelaime Mayamba</span></p>
          <p>Grafisch ontwerp: <span>Rachel Hansoul</span></p>
          <p>Project leider Gent: <span>Ama Kissi</span></p>
          <p>Project leider Brussel: <span>Laura Ganza</span></p>
          <p>Project leider Antwerpen: <span>Eyram Amavi</span></p>
          <p>Project leider Limburg: <span>Rachel Hansoul & Stella Nyanchama</span></p>
          <br/>
          <p>Verder doen we beroep op het werk en de inzet van talloze vrijwilligers en gemeenschapsorganisaties die Black History Month Belgium mee mogelijk maken.</p>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  const { language } = pageContext;

  return (
    <Layout language={language}>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
