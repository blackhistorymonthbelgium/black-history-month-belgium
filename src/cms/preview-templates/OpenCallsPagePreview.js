import React from 'react'
import PropTypes from 'prop-types'
import { OpencallsPageTemplate } from '../../templates/opencalls-page'

const OpencallsPagePreview = ({ entry, widgetFor }) => (
  <OpencallsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

OpencallsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default OpencallsPagePreview
