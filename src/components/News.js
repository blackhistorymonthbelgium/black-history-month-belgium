import React from "react"
import { Link } from 'gatsby'
import eventImg from '../img/event.jpg'
const News = () => (
  <section className="news">
    <div className="columns is-half-desktop is-full-tablet is-full-mobile news-wrapper">
    <div className="column blog">
      <h1 className="titleNewsSection">Blogs</h1>
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
      <Link className="goToBlog" to="/blogs">More news <i className="far fa-chevron-right"/> </Link>
    </div>
    <div className="column social-med">
      <h1 className="titleNewsSection">Social Media</h1>
      <div className="wrapper">
        <h2>Stay up-to-date with our latest events!</h2>
        <div className="channel">
          <i className="iconSocial fal fa-thumbs-up"/> <a title="facebook" href="https://www.facebook.com/blackhistorymonthbelgium/">
            Like us on FB page <i className="far fa-chevron-right"/>
           </a>
        </div>
        <div className="channel">
          <i className="iconSocial fab fa-instagram"/> <a title="instagram" href="https://www.instagram.com/bhmbelgium/">
            Follow us on Instagram <i className="far fa-chevron-right"/>
          </a>
        </div>
        <div className="channel">
          <i className="iconSocial fab fa-twitter"/>  <a title="twitter" href="https://twitter.com/bhmantwerp">
            Follow us on Twitter <i className="far fa-chevron-right"/>
          </a>
        </div>
        <form>
          <label htmlFor="email">Register to our newsletter:</label>
          <input className="emailSubscribe" type="email" placeholder="name@address.com" />
          <input className="subscribe" type="submit" value="Subscribe" />
        </form>

      </div>
    </div>
    </div>
  </section>
)
export default News
