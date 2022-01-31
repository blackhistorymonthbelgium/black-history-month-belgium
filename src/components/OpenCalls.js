import React from "react"


class OpenCalls extends React.Component {
  render(){
    return (
      <section className="openCalls">
        <div className="openCalls-wrapper">
          <div className="openCallsBe">
            <h1 className="openCallsTitle">Freestyle Contemporary Workshop</h1>
            <div className="openCallsText">
              We are organizing a trajectory in Opera Ballet Vlaanderen for two groups of young dance lovers from the entourage of BHMB. The workshops link up with the dance performance Noétic / Le Sacre du printemps. Some choreographic elements and themes will be touched upon and there will be a show moment for friends and family of the participants.
            </div>
            <a className="linkOpenCalls" href="https://www.eventbrite.be/e/workshops-freestyle-contemporary-tickets-258517872917">
              Register Now
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default OpenCalls;
