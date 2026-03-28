import React from "react";
import "../styles/calendar.css";

const Calendar = () => {
  const today = new Date();

  const month = today.toLocaleString("default", { month: "long" });
  const day = today.getDate();

  
  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(today.getDate() - 3 + i);
    return d;
  });

  return (
    <div className="calendar-container">
      <div className="glass-card">

        
        <div className="tabs">
          <button className="active-tab">Weekly</button>
          <button>Monthly</button>
        </div>

        
        <h1 className="header">
          {month} <span>{day}</span>
        </h1>

        
        <div className="week">
          {dates.map((d, i) => (
            <div key={i} className="day-name">
              {d.toLocaleDateString("en-US", { weekday: "short" })}
            </div>
          ))}
        </div>

        
        <div className="dates">
          {dates.map((d, i) => {
            const isToday =
              d.toDateString() === today.toDateString();

            return (
              <div
                key={i}
                className={`date-item ${isToday ? "active" : ""}`}
              >
                {d.getDate()}
              </div>
            );
          })}
        </div>

        
        <div className="bottom">
          <span className="note">✎ Add a note...</span>
          <button className="btn">+ New Event</button>
        </div>

      </div>
    </div>
  );
};

export default Calendar;