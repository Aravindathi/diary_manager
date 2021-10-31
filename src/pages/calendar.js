import moment from "moment";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./calendar.css";
import { useHistory } from "react-router";

const Calendars = (props) => {
  const history = useHistory()
  let weekdayshort = moment.weekdaysShort();
  const [dateObject, setDateObject] = useState(moment());

// Date parameters obatining code 
  let allMonths = moment.months();
  let firstDay = moment(dateObject).startOf("month").format("d");
  let currentDay = moment(dateObject).format("D");
 
  
  let year = moment(dateObject).format("YYYY");
  let month = moment(dateObject).format("MMMM")
// code ends here

// next and previous click handlers 
  const prevClickHandler = () => {
    let currentMonth = allMonths.indexOf(moment(dateObject).format("MMMM"));
    console.log(currentMonth)
    setDateObject(moment(dateObject).set("month", currentMonth-1));
  };
  const nextClickHandler = () => {
    let currentMonth = allMonths.indexOf(moment(dateObject).format("MMMM"));
    setDateObject(moment(dateObject).set("month", currentMonth+1));
  };
  // code ends here

  const dateClickHandler =(obj) => {
    let date = obj.target.innerText
    
    props.setDate(date)
    props.setMonth(month);
    let path = `/schedule/${month}/${date}`
    props.setPathUrl(path)
    history.push(`schedule/${props.month}/${props.date}`)
    history.push(path)
  };
  
  

// mapping of obtained dates to an array and mapping it to dome table 
  let monthDays = [];
  // creating individual cells before mapping  
  for (let i = 0; i < firstDay; i++) {
    monthDays.push(<td>{""}</td>);
  }
  let currentDayClass;
  for (let i = 1; i <= dateObject.daysInMonth(); i++) {
    if (i == currentDay) currentDayClass = "today";
    else currentDayClass = "";
    monthDays.push(
     
      <td key={i} className={`dates ${currentDayClass}`} onClick={dateClickHandler}>
        {i}
      </td>
      
    );
  }
  // mapping dates to corresponding rows and columns and pushing cells to frame table 
  let rows = [];
  let cells = [];
  monthDays.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
    if (i === monthDays.length - 1) {
      rows.push(cells);
    }
  });

  // Dates click handling logics and API request

  
 
  // all logics end here the components are rendered below 
  return (
    <div className="calendar-box">
      <table className="calendar">
        <thead>
          <tr>
            <td className="month-navigator"></td>
            <td className="month-navigator" onClick={prevClickHandler}>&lt;&lt;</td>
            <td colSpan={3}>
              <div className="month-navigator">
                {month} ({year})
              </div>
            </td >
            <td className="month-navigator" onClick={nextClickHandler}>&gt;&gt;</td>
            <td className="month-navigator"></td>
          </tr>
          <tr>
            {weekdayshort.map((day) => (
              <th key={day} onClick={(e) =>dateClickHandler(e.target.innerText)}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((d, i) => (
            <tr>{d}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendars;
