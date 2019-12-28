import React from 'react'
import Layout from '../../components/Layout'
import AgendaFilter from '../../components/AgendaFilter'
import AgendaResults from '../../components/AgendaResults'
import AgendaRoll from '../../components/AgendaRoll'


export default class AgendaIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="agenda">
          <h1 className="blogs-title">
            Agenda
          </h1>
          <div className="container">
            <div className="content">
              <AgendaFilter />
              <AgendaResults />
              <AgendaRoll />

            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
