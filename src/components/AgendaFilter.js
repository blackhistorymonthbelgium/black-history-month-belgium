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
      <div className="dropdown-wrapper">
        <label className="label-wrapper">
          <div className="select selectArrow">
            <select value={filterDate} onChange={onFilterDateChanged}>
              <option value="any">{T('date')}
              </option>
              {dates.map(date => <option key={date} value={date}>{date}</option>)}
              <optgroup disabled hidden></optgroup>
            </select>
          </div>
        </label>
        <label className="label-wrapper">
          <div className="select selectArrow">
            <select value={filterType} onChange={onFilterTypeChanged}>
              <option value="any">{T('type')}
              </option>
              {types.map(type => <option key={type} value={type}>{type}</option>)}
              <optgroup disabled hidden></optgroup>
            </select>
          </div>
        </label>
        <label className="label-wrapper">
          <div className="select selectArrow">
            <select value={filterLocation} onChange={onFilterLocationChanged}>
              <option  value="any">{T('location')}</option>
              {locations.map(location => <option key={location} value={location}>{location}</option>)}
              <optgroup disabled hidden></optgroup>
            </select>
          </div>
        </label>
      </div>
    </form>
  );
};
export default AgendaFilter
