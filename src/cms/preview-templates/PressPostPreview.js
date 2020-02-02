import React from 'react'
import PropTypes from 'prop-types'
import { PressPostTemplate } from '../../templates/press-post'

const PressPostPreview = ({ entry, widgetFor }) => (
  <PressPostTemplate
    content={widgetFor('body')}
    link={entry.getIn(['data', 'link'])}
    title={entry.getIn(['data', 'title'])}
  />
)

PressPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PressPostPreview
