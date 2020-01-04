import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ArchivesPostPreview from './preview-templates/ArchivesPostPreview'
import AgendaPostPreview from './preview-templates/AgendaPostPreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import PartnersPostPreview from './preview-templates/PartnersPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('archives', ArchivesPostPreview)
CMS.registerPreviewTemplate('partners', PartnersPostPreview)
CMS.registerPreviewTemplate('agenda', AgendaPostPreview)
