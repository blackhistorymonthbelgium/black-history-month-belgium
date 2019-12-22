import React from "react"
import { Link } from 'gatsby'
import eventImg from '../img/event.jpg'
const News = () => (
  <section className="news">
    <div className="columns is-half-desktop is-full-tablet is-full-mobile news-wrapper">
      <div className="column blog">
        <h1 className="titleNewsSection">Blogs</h1>
        <div className="outside-wrapper">
          <article className="wrapper">
            <header>
              <img
              src={eventImg}
              alt="Highlight event BHM 2020"
              />
              <h1 className="blogTitle">Zwarte kunst als verzet en als weg naar bevrijding</h1>
            </header>
            <main>
              <time>30 Jan 2019</time>
              <p>Zwarte kunst is geen monoliet. Het is divers, expressief en biedt weerstand tegen eenvoudige categorisering. Het bestaat overal. In musea en galerijen, op gebouwen en in de straten, op blogs en digitale platforms en op de canvassen van onze lichamen
                <Link> <span className="readMore">read  more...</span></Link>
              </p>
            </main>
          </article>
          <Link className="goToBlog" to="/blog">More news <i className="far fa-chevron-right"/> </Link>
        </div>
      </div>
      <div className="column social-med">
        <h1 className="titleNewsSection">Social Media</h1>
        <div className="wrapper">
          <h2>Stay up-to-date with our latest events!</h2>

          <div className="channel">
            <i className="iconSocial fal fa-thumbs-up"/>
            <div className="detail-link">
              <a title="facebook" href="https://www.facebook.com/blackhistorymonthbelgium/">
              FB page <i className="far fa-chevron-right"/>
              </a>
            </div>
          </div>
          <div className="channel">
            <i className="iconSocial fab fa-instagram"/>
            <div className="detail-link">
              <a title="instagram" href="https://www.instagram.com/bhmbelgium/">
              Instagram <i className="far fa-chevron-right"/>
              </a>
            </div>
          </div>
          <div className="channel">
            <i className="iconSocial fab fa-twitter"/>
            <div className="detail-link">
              <a title="twitter" href="https://twitter.com/bhmantwerp">
              Twitter <i className="far fa-chevron-right"/>
              </a>
            </div>
          </div>
          <form>
            <label htmlFor="email">Register to our newsletter:</label>
            <div className="inputs">
              <input className="emailSubscribe" type="email" placeholder="name@address.com" />
              <input className="subscribe" type="submit" value="Subscribe" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
)
export default News
