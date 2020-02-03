import React from "react"
import moment from 'moment'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { PostLink, LocalizedLink } from './Links'
import {T} from '../internationalization'

const News = (props) =>{
  const{
    blogs
  } = props;
  return(
    <section className="news">
      <div className="columns is-half-desktop is-full-tablet is-full-mobile news-wrapper">
        <div className="column blog">
          <h1 className="titleNewsSection">Blogs</h1>
          <div className="outside-wrapper">
            {blogs.slice(0,1).map((blog, key)=>(
              <article className="wrapper">
                <header>
                {blog.node.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: blog.node.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${blog.node.frontmatter.title}`,
                      }}
                    />
                  </div>
                ) : null}
                  <h1 className="blogTitle">
                    <PostLink post={blog.node}>{blog.node.frontmatter.title}</PostLink>
                  </h1>
                </header>
                <main>
                  <time>{moment(blog.node.frontmatter.date).format("DD-MMM-YYYY")}</time>
                  <p>
                    {blog.node.excerpt}
                    <PostLink post={blog.node}> <span className="readMore">read  more...</span></PostLink>
                  </p>
                </main>
              </article>
              ))}
              <LocalizedLink className="goToBlog" to="/blog">More news <i className="far fa-chevron-right"/> </LocalizedLink>
          </div>
        </div>
        <div className="column social-med">
          <h1 className="titleNewsSection">Social Media</h1>
          <div className="wrapper">
            <h2>{T("stayInformed")}</h2>
            <p>{T("stayInformedText")}</p>
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
                <a title="twitter" href="https://twitter.com/BHMBelgium">
                Twitter <i className="far fa-chevron-right"/>
                </a>
              </div>
            </div>
            <form>
              <p>
              {T("newsletterText")}
              </p>
              <br/>
              <label htmlFor="email">{T("newsletterInput")}</label>
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
}
export default News
