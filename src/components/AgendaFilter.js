import React from "react"
import { Link } from 'gatsby'
import poster from '../img/poster.jpg'
import event from '../img/event.jpg'
const AgendaFilter = () => (
  <form className="agenda-filter">
    <h1>
      Filter
    </h1>
    <label className="dropdown-wrapper">
      <select>
        <option selected disabled>Date
        </option>
        <option value="18/2">18/2</option>
        <option value="19/2">19/2</option>
        <option value="20/2">20/2</option>
        <option value="1/3">1/3</option>
      </select>
      <select>
        <option selected disabled>Type</option>
        <option value="18/2">music</option>
        <option value="19/2">theater</option>
        <option value="20/2">drama</option>
        <option value="1/3">concert</option>
      </select>
      <select>
        <option selected disabled>Location</option>
        <option value="18/2">Antwerp</option>
        <option value="19/2">Ghent</option>
        <option value="20/2">Brussels</option>
        <option value="1/3">Leuven</option>
      </select>
    </label>

  </form>
)
export default AgendaFilter
