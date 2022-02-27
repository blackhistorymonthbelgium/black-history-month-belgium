import React from "react"


class Top40Songs extends React.Component {
  render(){
    return (
      <section className="sponsors">
        <div className="sponsors-wrapper">
          <div className="bePartner">
            <h1>BHM Book Fair</h1>
            <div className="top40Songs">
              As part of the fifth edition of Black History Month (BHM) Belgium, this year we will organize a bookfair in Antwerp (11-13 March 2022) focusing on black literature and oral traditions.
              <span className="top40Songstext">#BHM #BHMBoekenbeurs</span>
            </div>
            <a className="emailPartner" href="https://blackhistorymonth.be/agenda/boekenbeursantwerp">
              Details
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default Top40Songs;
