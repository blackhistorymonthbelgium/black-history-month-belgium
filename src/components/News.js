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
            <p>
            {T("newsletterText")}
            </p>
            <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
            <div id="mc_embed_signup">
              <form action="https://blackhistorymonth.us4.list-manage.com/subscribe/post?u=c1d7bead0df2b5f05cd385477&amp;id=999730b5cc" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                <label htmlFor="email">{T("newsletterInput")}</label>
                  <div id="mc_embed_signup_scroll">
                    <input type="email" name="EMAIL" className="emailSubscribe" id="mce-EMAIL" placeholder="name@address.com" required />
                    <div style={{position: "absolute", left: -5000}} aria-hidden="true">
                      <input type="text" name="b_c1d7bead0df2b5f05cd385477_999730b5cc" tabIndex="-1" value="" />
                    </div>
                    <div className="clear">
                      <input className="subscribe buttonForm" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" />
                    </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default News
