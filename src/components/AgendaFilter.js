import React from "react"
import { Link } from 'gatsby'
import poster from '../img/poster.jpg'
import event from '../img/event.jpg'

const AgendaFilter = () => (
  <form className="agenda-filter">
  <h2>
    Filter
  </h2>
    <label className="dropdown-wrapper">

      <div className="select selectArrow">
        <select defaultValue="date">
          <option value="date" disabled>Date
          </option>
          <option value="18/2">18/2</option>
          <option value="19/2">19/2</option>
          <option value="20/2">20/2</option>
          <option value="1/3">1/3</option>
        </select>
      </div>
      <div className="select selectArrow">
        <select defaultValue="type">
          <option value="type" disabled>Type</option>
          <option value="18/2">18/2</option>
          <option value="19/2">19/2</option>
          <option value="20/2">20/2</option>
          <option value="1/3">1/3</option>
        </select>
      </div>
      <div className="select selectArrow">
        <select defaultValue="location">
          <option  value="location" disabled>Location</option>
          <option value="18/2">18/2</option>
          <option value="19/2">19/2</option>
          <option value="20/2">20/2</option>
          <option value="1/3">1/3</option>
        </select>
      </div>
    </label>

  </form>
)
export default AgendaFilter
