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
          <Link className="goToBlog" to="/blogs">More news <i className="far fa-chevron-right"/> </Link>
        </div>
      </div>
      <div className="column social-med">
        <h1 className="titleNewsSection">Social Media</h1>
        <div className="wrapper">
          <h2>Stay up-to-date with our latest events!</h2>
        </div>
      </div>
    </div>
  </section>
)
export default News
