import React, { useMemo, useState } from 'react';

import './Calender.scss';

const getDaysCount = (month, year) => new Date(year, month + 1, 0).getDate();
const monthStartingDay = (month, year) => new Date(year, month, 1).getDay();
const getMonthName = (monthCount) => {
  const month = [
    'january',
    'febuary',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ];
  return month[monthCount];
};

const renderDays = (month, year) => {
  const daysCount = getDaysCount(month, year);
  const startingDay = monthStartingDay(month, year);
  const rendredJSX = [];

  let i = 0;
  while (i <= 35) {
    if (i === startingDay) {
      for (let j = 1; j <= daysCount; j++)
        rendredJSX.push(
          <li key={j + i} className="days">
            {j}
          </li>
        );
      i += daysCount + 1;
    } else {
      rendredJSX.push(<li key={i} className="days days-empty"></li>);
      i++;
    }
  }
  return rendredJSX;
};

const getMonthYear = (date) => {
  return { month: date.getMonth(), year: date.getFullYear() };
};

const Calender = () => {
  const [{ month, year }, setTime] = useState(() => getMonthYear(new Date()));
  const monthData = useMemo(() => renderDays(month, year), [month, year]);
  return (
    <section className="calender-component">
      <div className="header">
        <button onClick={() => setTime(getMonthYear(new Date(year, month - 1)))}>{'<'}</button>
        <span>
          {getMonthName(month)} {year}
        </span>
        <button onClick={() => setTime(getMonthYear(new Date(year, month + 1)))}>{'>'}</button>
      </div>
      <div className="weeks">
        <ul>
          <li className="weekday">Sun</li>
          <li className="weekday">Mon</li>
          <li className="weekday">Tue</li>
          <li className="weekday">Wed</li>
          <li className="weekday">Thr</li>
          <li className="weekday">Fri</li>
          <li className="weekday">Sat</li>
        </ul>
      </div>

      <div className="days">
        <ul>{monthData}</ul>
      </div>
    </section>
  );
};

export default Calender;
