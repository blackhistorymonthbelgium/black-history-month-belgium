import React from "react"
import {T} from '../internationalization'

class Top40Songs extends React.Component {
  render(){
    return (
      <section className="sponsors">
        <div className="sponsors-wrapper">
          <div className="bePartner">
            <h1>TOP 40 Black Belgian Music</h1>
            <div className="top40Songs">
              Which songs made by black Belgian artist’s have settled down over the years in the collective memory and cultural archive of us all? Join us in March during Black History Month to see what songs made it to the  top 40. During the live online shows, you will be able to enjoy the music and stories behind the music.
              <span className="top40Songstext"> Voting is possible tilll 28.02.2021 #BHM # BBM40</span>
            </div>
            <a className="emailPartner" href="https://forms.gle/Q4ws6MSRnVs5DKqf9">
              Vote your favourites
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default Top40Songs;
