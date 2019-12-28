import React from 'react'
import PropTypes from 'prop-types'
import { AgendaPostTemplate } from '../../templates/agenda-post'

const AgendaPostPreview = ({ entry, widgetFor }) => (
  <AgendaPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

AgendaPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AgendaPostPreview
