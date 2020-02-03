import React from 'react'
import PropTypes from 'prop-types'
import { ExtraPartnersPostTemplate } from '../../templates/extrapartners-post'

const ExtraPartnersPostPreview = ({ entry, widgetFor }) => (
  <ExtraPartnersPostTemplate
    content={widgetFor('body')}
    link={entry.getIn(['data', 'link'])}
    title={entry.getIn(['data', 'title'])}
  />
)

ExtraPartnersPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ExtraPartnersPostPreview
