import React from "react"
import { Link } from 'gatsby'

const AgendaFilter = (props) => {
  const {
    dates,
    types,
    locations,
    filterDate,
    filterType,
    filterLocation,
    onFilterDateChanged,
    onFilterTypeChanged,
    onFilterLocationChanged
  } = props;

  return (
    <form className="agenda-filter">
      <h2>
        Filter
      </h2>
      <label className="dropdown-wrapper">
        <div className="select selectArrow">
          <select value={filterDate || 'date'} onChange={onFilterDateChanged}>
            <option value="date" disabled>Date
            </option>
            {dates.map(date => <option key={date} value={date}>{date}</option>)}
          </select>
        </div>
        <div className="select selectArrow">
          <select value={filterType || 'type'} onChange={onFilterTypeChanged}>
            <option value="type" disabled>Type
            </option>
            {types.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>
        <div className="select selectArrow">
          <select value={filterLocation || 'location'} onChange={onFilterLocationChanged}>
            <option  value="location" disabled>Location</option>
            {locations.map(location => <option key={location} value={location}>{location}</option>)}
          </select>
        </div>
      </label>
    </form>
  );
};
export default AgendaFilter
