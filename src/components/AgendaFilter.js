import React from "react"
import { T } from '../internationalization'

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
        {T('filter')}
      </h2>
      <label className="dropdown-wrapper">
        <div className="select selectArrow">
          <select value={filterDate} onChange={onFilterDateChanged}>
            <option value="any">{T('date')}
            </option>
            {dates.map(date => <option key={date} value={date}>{date}</option>)}
          </select>
        </div>
        <div className="select selectArrow">
          <select value={filterType} onChange={onFilterTypeChanged}>
            <option value="any">{T('type')}
            </option>
            {types.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>
        <div className="select selectArrow">
          <select value={filterLocation} onChange={onFilterLocationChanged}>
            <option  value="any">{T('location')}</option>
            {locations.map(location => <option key={location} value={location}>{location}</option>)}
          </select>
        </div>
      </label>
    </form>
  );
};
export default AgendaFilter
