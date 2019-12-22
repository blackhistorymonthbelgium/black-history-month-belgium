import React from 'react'
import PropTypes from 'prop-types'
import { ArchivesPostTemplate } from '../../templates/archives-post'

const ArchivesPostPreview = ({ entry, widgetFor }) => (
  <ArchivesPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

ArchivesPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ArchivesPostPreview
