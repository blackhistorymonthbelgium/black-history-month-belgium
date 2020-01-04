import React from 'react'
import PropTypes from 'prop-types'
import { PartnersPostTemplate } from '../../templates/partners-post'

const PartnersPostPreview = ({ entry, widgetFor }) => (
  <PartnersPostTemplate
    content={widgetFor('body')}
    link={entry.getIn(['data', 'link'])}
    title={entry.getIn(['data', 'title'])}
  />
)

PartnersPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PartnersPostPreview
