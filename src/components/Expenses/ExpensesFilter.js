import React from "react";

import "./ExpensesFilter.css";

export default function ExpensesFilter(props) {
  const filterChangeHandler = (event) => {
    console.log(event.target.value);
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by month</label>
        <input type="month" onChange={filterChangeHandler} />
        <select value={props.defaultMonth} onChange={filterChangeHandler}>
          <option value="Jan">Jan</option>
          <option value="Feb">Feb</option>
          <option value="Mar">Mar</option>
          <option value="Apr">Apr</option>
          <option value="May">May</option>
          <option value="Jun">Jun</option>
          <option value="Jul">Jul</option>
          <option value="Aug">Aug</option>
          <option value="Sep">Sep</option>
          <option value="Oct">Oct</option>
          <option value="Nov">Nov</option>
          <option value="Dec">Dec</option>
        </select>
      </div>
    </div>
  );
}
