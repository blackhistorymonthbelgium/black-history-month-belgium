import React from "react"
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { T } from '../internationalization';
import { PostLink} from './Links';

const Highlights = (props) => {
  const{
    archives,
  } = props;

  return(
    <section className="highlights container">
      <div className="columns is-half-desktop is-full-mobile">
        <div className="column column-poster">
          <div className="poster">
            {archives.map((archive, key)=> (
              <div key={key} className="event-detail">
              {archive.node.frontmatter.bannerimage ? (
              <div>
              <div className="featured-thumbnail img-inside landscapeBanner">

                <PreviewCompatibleImage
                  imageInfo={{
                    image: archive.node.frontmatter.bannerimage,
                    alt: `featured image thumbnail for post ${archive.node.frontmatter.title}`,
                  }}
                />
              </div>
              <div className="featured-thumbnail img-inside potraitBanner">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: archive.node.frontmatter.featuredimage,
                    alt: `featured image thumbnail for post ${archive.node.frontmatter.title}`,
                  }}
                />
              </div>
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
