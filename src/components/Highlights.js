import React from "react"
import PreviewCompatibleImage from './PreviewCompatibleImage'
import moment from 'moment'
import { T } from '../internationalization';
import { PostLink, TagLink } from './Links';

const Highlights = (props) => {
  const{
    archives,
    events
  } = props;

  return(
    <section className="highlights container">
      <div className="columns is-half-desktop is-full-mobile">
        <div className="column column-poster">
          <div className="poster">
            {archives.map((archive, key)=> (
              <div key={key} className="event-detail">
              {archive.node.frontmatter.featuredimage ? (
                <div className="featured-thumbnail img-inside">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: archive.node.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${archive.node.frontmatter.title}`,
                    }}
                  />
                </div>
              ) : null}
                  <PostLink post={(archive.node)}>
                    {T('readMore')} <i className="far fa-chevron-right"></i>
                  </PostLink>
              </div>

          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Highlights
