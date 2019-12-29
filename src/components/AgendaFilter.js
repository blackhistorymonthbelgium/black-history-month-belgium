import React from "react"

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
          <select value={filterDate} onChange={onFilterDateChanged}>
            <option value="any">Date
            </option>
            {dates.map(date => <option key={date} value={date}>{date}</option>)}
          </select>
        </div>
        <div className="select selectArrow">
          <select value={filterType} onChange={onFilterTypeChanged}>
            <option value="any">Type
            </option>
            {types.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>
        <div className="select selectArrow">
          <select value={filterLocation} onChange={onFilterLocationChanged}>
            <option  value="any">Location</option>
            {locations.map(location => <option key={location} value={location}>{location}</option>)}
          </select>
        </div>
      </label>
    </form>
  );
};
export default AgendaFilter
