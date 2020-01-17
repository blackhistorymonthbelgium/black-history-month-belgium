import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight } from '@fortawesome/pro-regular-svg-icons'
import { faThumbsUp, faMapMarkerAlt, faHashtag, faClock, faChevronDown} from '@fortawesome/pro-light-svg-icons'
import { faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { setCurrentLanguage } from '../internationalization';

library.add(faChevronRight, faThumbsUp, faInstagram, faTwitter, faMapMarkerAlt, faHashtag, faClock, faChevronDown );
dom.watch();

const TemplateWrapper = (props) => {
  const { children, language } = props;
  setCurrentLanguage(language);

  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content= 'african, bhm, black history, cultural events' />
        <meta name="author" content= 'Alfi Yusrina' />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
        <div id="fb-root"></div>
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v5.0"></script>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
      <Footer />
    </>
  )
}

export default TemplateWrapper
